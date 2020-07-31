const express = require("express");
const router = express.Router();
const multer = require("multer");
const home = require("../controller/home");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = function(app) {
   router.get('/', home.index);
   router.post('/upload', upload.single('upload-file'), home.upload);
   app.use(router);
};