module.exports = {
   index: function(req, res) {
      res.render('index');
   },
   upload: function(req, res) {
      const theSize = req.file.size > 2 ? req.file.size + ' bytes' : req.file.size + ' byte';
      res.json({
         filename: req.file.originalname,
         filesize: theSize
      });
   }
};