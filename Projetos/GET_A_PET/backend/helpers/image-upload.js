const multer = require("multer");
const path = require("path");

// config destination to store the images
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "";
    // validation to includes in router
    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("pets")) {
      folder = "pets";
    }

    cb(null, `public/images/${folder}`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + String(Math.floor(Math.random() * 100)) + path.extname(file.originalname));
  },
});

// config image upload
const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    // validation to ext file
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Por favor, envie apenas jpg ou png!"));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
