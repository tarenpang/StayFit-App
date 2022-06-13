const db = require('../models');
const Trainer = db.trainers;

exports.create = (req, res) => {
    // if(!req.body.firstName) {
    //     res.status(400).send({message: "Cannot be empty"})
    //     return
    // }
    const trainer = new Trainer({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        userName: req.body.userName,
        password: req.body.password,
        credentials: req.body.credentials,
        imageUrl: req.body.imageUrl
    })
   trainer
    .save(trainer)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured creating trainer."
        })
    })
};

exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {};
    Trainer.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve trainers."
        })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  Trainer.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Trainer with id " + id });
    else res.send(data);  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Trainer with id=" + id })
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }
  const id = req.params.id;
  Trainer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Trainer with id=${id}. Maybe Trainer was not found!`
        });
      } else res.send({ message: "Trainer was updated successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Trainer with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Trainer.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Trainer with id=${id}. Maybe Trainer was not found!`
        });
      } else {
        res.send({
          message: "Trainer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Trainer with id=" + id
      });
    }); 
};