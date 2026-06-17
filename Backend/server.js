const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const userRoutes = require("./src/routes/userRoute");
const merchantRoutes = require("./src/routes/merchantRoute");

dotenv.config();

/** Ensure Atlas URI includes a database name (e.g. /shopco) */
function normalizeMongoUri(uri) {
  if (!uri) return uri;
  const trimmed = uri.trim();
  const hasDbName = /mongodb(\+srv)?:\/\/[^/]+\/[^/?]+/.test(trimmed);
  if (hasDbName) return trimmed;
  return trimmed.replace(
    /(mongodb(\+srv)?:\/\/[^/]+)(\/?)(\?|$)/,
    "$1/shopco$4"
  );
}

const mongoUri = normalizeMongoUri(
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shopco"
);

if (!process.env.MONGO_URI) {
  console.warn(
    "Shop.Co: MONGO_URI is not set. Add it in Render → Environment (MongoDB Atlas URI)."
  );
} else {
  console.log("MONGO_URI is set (connecting to Atlas)...");
}

const app = express();
const PORT = process.env.PORT || 4000;
const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const isDbReady = () => mongoose.connection.readyState === 1;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/healthz", (_req, res) => {
  if (isDbReady()) return res.status(200).send("ok");
  return res.status(503).send("database disconnected");
});

app.use((req, res, next) => {
  if (req.path === "/healthz") return next();
  if (isDbReady()) return next();
  return res.status(503).json({
    msg: "Database unavailable. Check Atlas Network Access (0.0.0.0/0) and MONGO_URI on Render.",
  });
});

app.use("/", userRoutes);
app.use("/", merchantRoutes);
app.use("/api", userRoutes);
app.use("/api", merchantRoutes);

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) return cb(null, true);
    cb(new Error("Images only"));
  },
});

app.use("/uploads", express.static(uploadsDir));

app.post("/upload", upload.single("productImage"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }
    const base =
      process.env.RENDER_EXTERNAL_URL ||
      `${req.protocol}://${req.get("host")}`;
    const imageUrl = `${base}/uploads/${req.file.filename}`;
    res.status(200).json({ msg: "File uploaded successfully", imageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

mongoose.set("bufferCommands", false);

let mongoConnecting = false;

const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) return;
  if (mongoConnecting) return;
  mongoConnecting = true;

  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 20000 });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    if (/authentication failed|bad auth/i.test(err.message)) {
      console.error("Fix: wrong username/password in MONGO_URI on Render.");
    }
    console.error("Retrying in 15s...");
    setTimeout(connectMongo, 15000);
  } finally {
    mongoConnecting = false;
  }
};

connectMongo();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
