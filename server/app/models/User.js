module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          firstName: String,
          lastName: String, 
          userName: String,
          password: String,
          imageUrl: String,
          exercises: [],
          trainerId: Number,
          age: Number,
          height: Number,
          currentWeight: Number



      },
      {timeStamps: true}
  );

  const User = mongoose.model('trainer', schema)
  return User
}