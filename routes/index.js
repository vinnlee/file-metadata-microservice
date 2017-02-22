var express = require("express");
var router = express.Router();
var multer = require("multer");
var home = require("../controller/home");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

module.exports = function(app) {
   router.get('/', home.index);
   router.post('/upload', upload.single('upload-file'), home.upload);
   app.use(router);
};