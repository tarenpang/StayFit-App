const db = require('../models');
const User = require('../models/User');
const generateToken = require('../config/generateToken');
const asyncHandler = require("express-async-handler");


//Register new Users
exports.create = asyncHandler( async(req, res) => {
  const { firstName, lastName, userName, password, imageUrl } = req.body
    
  if(!firstName || !lastName || !userName || !password) {
        res.status(400).send({message:"Cannot be empty"})
        return
    }

    const userExists = await User.findOne({ userName });

    if(userExists) {
      res.status(400).send({message:"User already exists!"})
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
    if(user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send({message:"User not found"})
    }
})

exports.login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({userName});

  if(user && (await user.matchPassword(password))){
    res.json({
      userName: user.userName,
      password: user.password,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid userName or password")
  }
})

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