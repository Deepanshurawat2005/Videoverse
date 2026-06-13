import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp"); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname)
  },
});
const upload = multer({ storage: storage });
export default upload;
