const Exercise = require('./Exercise')
const Trainer = require('./Trainer')
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    imageUrl: String,
    exercises: [{type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise', strictPopulate: false
    }],
    trainerId: Number,
    age: Number,
    height: Number,
    currentWeight: Number,
    targetWeight: Number,
    injuries: String,
    hr: Number,
    bp: [Number,Number],
    respirations: Number,
    o2: Number,
    bmi: Number,
    favorites: [],
    fitnessGoals: String
  },
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema)

