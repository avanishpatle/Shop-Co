const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoute");
const merchantRoutes = require("./src/routes/merchantRoute");

dotenv.config();

if (!process.env.MONGO_URI) {
  console.warn(
    "Shop.Co: MONGO_URI is not set. Add it in Render → Environment (Atlas URI)."
  );
}

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Render / load balancer health check (must exist if Health Check Path is /healthz)
app.get("/healthz", (_req, res) => res.status(200).send("ok"));

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

// MongoDB (non-blocking — server listens so /healthz works during DB startup)
mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/backend")
    .then(() => console.log("Connected to MongoDB established"))
    .catch((err) => console.error("MongoDB connection error:", err));

// ==========================================
// 🚀 PRODUCTION DEPLOYMENT: Serve Frontend
// ==========================================
if (process.env.NODE_ENV === "production" || process.env.SERVE_FRONTEND === "true") {
    // Serve frontend dist files
    const frontendDistPath = path.join(__dirname, '..', 'Frontend', 'dist');
    app.use(express.static(frontendDistPath));

    // For any other route, send the React index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendDistPath, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
