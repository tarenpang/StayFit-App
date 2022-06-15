const mongoose = require('mongoose');
const User = require('./User');

module.exports = (mongoose) => {
  var trainerSchema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      userName: String,
      password: String,
      credentials: String,
      imageUrl: String,
      clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
    },
    { timeStamps: true }
  );

  trainerSchema.pre("save", async function (next) {
    if(!this.isModified) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); 
})

  const Trainer = mongoose.model("trainer", trainerSchema);
  return Trainer;
};
