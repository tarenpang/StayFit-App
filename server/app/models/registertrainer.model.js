module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            firstName: String,
            lastName: String, 
            userName: String,
            password: String,
            credentials: String,
        },
        {timeStamps: true}
    );

    const Trainer = mongoose.model('trainer', schema)
    return Trainer
}