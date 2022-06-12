module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            description: String, 
            category: String,
            reps: Number,
            sets: Number,
            frequency: Number,
            imageUrl: String,
        },
        {timeStamps: true}
    );

    const Exercise = mongoose.model('exercise', schema)
    return Exercise
}