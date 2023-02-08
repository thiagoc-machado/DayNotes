const mongoose = require('mongoose');

const dbConfig =
  'mongodb+srv://thiago:140106@cluster0.6s6tjgr.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = connection;