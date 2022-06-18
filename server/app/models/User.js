const Exercise = require('./Exercise')
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Joi = require('joi'); 
const passwordComplexity = require('joi-password-complexity')
const secret = +process.env.SECRET

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    imageUrl: String,
    exercises: [{type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
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
  },
    {timestamps: true}
);

userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({_id: this._id}, secret, {
    expires: "7d"
  })
  return token
}

const User = mongoose.model('user', userSchema)
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(20).label("firstName"),
    lastName: Joi.string().required().min(2).max(20).label("lastName"),
    userName: Joi.string().required().label("userName"),
    password: passwordComplexity().required().label("password"), 
  })
  return schema.validate(data)
}


module.exports = {User, validate}
