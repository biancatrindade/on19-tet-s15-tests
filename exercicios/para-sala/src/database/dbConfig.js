const mongoose = require('mongoose');

const password = "xuxubeleza";

mongoose.connect(
  `mongodb+srv://biancatrindade:${password}@cluster0.oxgeab4.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;