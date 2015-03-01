var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Connection error: ' + err);
});

db.on('open', function () {
    console.log('Connection opened');
});

db.on('connected', function () {
    console.log('Connected');
});

db.on('disconnected', function () {
    console.log('Disconnected');
});

module.exports = db;