const db = require('../models');
const Trainer = require("../models/Trainer");
const generateToken = require('../config/generateToken');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const saltRounds = +process.env.SALT;

exports.create = asyncHandler(async(req, res) => {
  const { firstName, lastName, userName, password, repeatPassword, credentials, imageUrl } = req.body;
  
  if(!firstName || !lastName || !userName || !password || !credentials) {
    res.status(400).send({message: "Cannot be empty!"})
    return
  }

  const trainerExists = await Trainer.findOne({ userName }); 

  if(trainerExists) {
    res.status(400).send({message:"User already exists!"})
    return
  }
  
  if(password !== repeatPassword) {
    res.status(400).send({message: "Passwords do not match!"})
    return
  }

  const salt = bcrypt.genSaltSync(saltRounds); 
  const hash = bcrypt.hashSync(password, salt);
  try{
    const trainer = new Trainer({
        firstName: firstName,
        lastName: lastName, 
        userName: userName,
        password: hash, 
        credentials: credentials,
        imageUrl: imageUrl
    })
    trainer
    .save(trainer)
    .then(data => {
        res.send(data)
    })

    if(trainer) {
      res.status(201).json({
        _id: trainer._id,
        firstName: trainer.firstName,
        lastName: trainer.lastName,
        token: generateToken(trainer._id),
      });
    } else {
      res.status(400).send({message:"User not found"})
    }
  }catch(err){
    console.log(err.response.status);
    console.log(err.response.statusText);
    console.log(err.message);
    console.log(err.response.headers); 
    console.log(err.response.data);
  } 
});

exports.login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const trainer = await User.findOne({userName});

  if(trainer && (await user.matchPassword(password))){
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