const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

module.exports = mongoose => {
    var userSchema = mongoose.Schema(
    {
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
    )

    userSchema.methods.matchPassword = async function (enteredPassword) {
      return await bcrypt.compare(enteredPassword, this.password);
    }

    userSchema.pre("save", async function (next) {
        if(!this.isModified) {
            next()
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); 
    })

    const User = mongoose.model('user', userSchema)
    return User
}

