var path = require('path');

module.exports = function (app) {
  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

};


