const db = require('../models');
const Exercise = require('../models/Exercise');

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
      console.log("error is:")
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve exercises."
        })
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Exercise.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Exercise with id " + id });
    else res.send(data);  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Exercise with id=" + id })
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }
  const id = req.params.id;
  Exercise.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Exercise with id=${id}. Maybe Exercise was not found!`
        });
      } else res.send({ message: "Exercise was updated successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Exercise with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Exercise.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Exercise with id=${id}. Maybe Exercise was not found!`
        });
      } else {
        res.send({
          message: "Exercise was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Exercise with id=" + id
      });
    }); 
};