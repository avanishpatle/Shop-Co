const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoute");
const merchantRoutes = require("./src/routes/merchantRoute");

dotenv.config();

if (!process.env.MONGO_URI) {
  console.warn(
    "Shop.Co: MONGO_URI is not set. Add it in Render → Environment (MongoDB Atlas URI)."
  );
}

const app = express();
const PORT = process.env.PORT || 4000;

const isDbReady = () => mongoose.connection.readyState === 1;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Render health check — fails if MongoDB is not connected
app.get("/healthz", (_req, res) => {
  if (isDbReady()) return res.status(200).send("ok");
  return res.status(503).send("database disconnected");
});

// API routes need an active MongoDB connection
app.use((req, res, next) => {
  if (req.path === "/healthz") return next();
  if (isDbReady()) return next();
  return res.status(503).json({
    msg:
      "Database unavailable. In Atlas: Network Access → allow 0.0.0.0/0. In Render: set MONGO_URI.",
  });
});

// Routes — mount at / and /api so both /login and /api/login work
app.use("/", userRoutes);
app.use("/", merchantRoutes);
app.use("/api", userRoutes);
app.use("/api", merchantRoutes);

const path = require("path");
const multer = require("multer");

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

// Check File Type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Upload Endpoint
app.post('/upload', upload.single('productImage'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ msg: 'No file uploaded' });
        }
        // Return the URL to access the file
        const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
        res.status(200).json({
            msg: 'File uploaded successfully',
            imageUrl: imageUrl
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

const mongoUri =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shopco";

mongoose.set("bufferCommands", false);

if (process.env.MONGO_URI) {
  console.log("MONGO_URI is set (connecting to Atlas)...");
} else {
  console.warn("MONGO_URI is missing — using local fallback mongodb://127.0.0.1:27017/shopco");
}

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 15000 });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.error(
      "Check: Atlas Network Access 0.0.0.0/0, MONGO_URI password, /shopco in URI."
    );
    console.error("Retrying in 30s...");
    setTimeout(connectMongo, 30000);
  }
};

connectMongo();

// Frontend is deployed on Vercel — this service is API-only (no app.get('*') — breaks Express 5)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
