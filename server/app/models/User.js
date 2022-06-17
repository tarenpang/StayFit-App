const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    firstName: {type:"String", required: true},
    lastName: {type:"String", required: true},
    userName: {type:"String", required: true, unique: true},
    password: {type:"String", required: true},
    imageUrl: String,
    exercises: [],
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
  },
    {timeStamps: true}
);

module.exports = mongoose.model('user', userSchema);
