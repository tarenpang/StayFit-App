const db = require('../models');
const Exercise = db.exercises;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({message: "Cannot be empty"})
        return
    }
    const exercise = new Exercise({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        reps: req.body.reps,
        sets: req.body.sets,
        frequency: req.body.frequency,
        imageUrl: req.body.imageUrl
    })
    exercise
    .save(exercise)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured creating exercise."
        })
    })
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: 'i'}} : {};
    Exercise.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve exercises."
        })
    })
}


