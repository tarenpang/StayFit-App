const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const exerciseSchema = new Schema({
            name: String,
            description: String, 
            category: String,
            reps: Number,
            sets: Number,
            frequency: Number,
            imageUrl: String,
            },
            { timeStamps: true }
          );

    module.exports = mongoose.model("exercise", exerciseSchema);
