var mongoose = require('mongoose');
require("./model/project")
require("./model/imgs")
require("./model/news")
var dbURI = 'mongodb://localhost/test';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});