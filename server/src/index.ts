import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    // params are (req, file, cb)
    cb(null, "images");
  },
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (_, res) => {
  res.send("Image uploaded successfully");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
