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
    )
    const User = mongoose.model('user', schema)
    return User
}