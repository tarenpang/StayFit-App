const db = require('../models');
const User = db.users;

exports.create = (req, res) => {
    if(!req.body.firstName) {
        res.status(400).send({message:"Cannot be empty"})
        return
    }
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        imageUrl: req.body.imageUrl
    })
    user
    .save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured creating User."
        })
    })
}

exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {}
    User.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve users."
        })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found User with id " + id });
    else res.send(data);  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving User with id=" + id })
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    }); 
};