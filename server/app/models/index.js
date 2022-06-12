const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose; 
db.url = dbConfig.url;
db.exercises = require('./Exercise.js')(mongoose);
db.trainers = require('./Trainer.js')(mongoose);
db.users = require('./User')(mongoose);  
module.exports = db;  