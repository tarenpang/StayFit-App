const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose; 
db.url = dbConfig.url;
db.exercises = require('./exercise.model.js')(mongoose);
db.trainers = require('./registertrainer.model.js')(mongoose); 
module.exports = db;  