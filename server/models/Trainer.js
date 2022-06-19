
const mongoose = require('mongoose');
const User = require('./User');
const Exercise = require('./Exercise'); 
const { Schema } = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity')
const secret = process.env.SECRET 
const jwt = require('jsonwebtoken'); 


  var trainerSchema = new Schema(
    {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true},
      userName: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      credentials: String,
      imageUrl: String,
      bio: String,
      clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
      exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
      }],
    },
    { timestamps: true }
  );

//   trainerSchema.methods.generateAuthToken = function() {
//     const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {
//       expires: "7d",
//   })
//   return token;
// }

const Trainer = mongoose.model('trainer', trainerSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(20).label("firstName"),
    lastName: Joi.string().required().min(2).max(20).label("lastName"),
    userName: Joi.string().required().label("userName"),
    password: passwordComplexity().required().label("password"),
  })
  return schema.validate(data)
}

module.exports = { Trainer, validate }
