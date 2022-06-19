const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Joi = require('joi'); 


var exerciseSchema = new Schema({
            name: String,
            description: String, 
            category: String,
            reps: Number,
            sets: Number,
            frequency: Number,
            imageUrl: String,
            },
            { timestamps: true }
          );

    module.exports = mongoose.model("Exercise", exerciseSchema);
