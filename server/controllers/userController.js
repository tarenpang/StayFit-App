const db = require('../models');
const User = require('../models/User');
const generateToken = require('../config/generateToken');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const saltRounds = +process.env.SALT;

//Register new Users
exports.create = asyncHandler( async(req, res) => {
  const { firstName, lastName, userName, password, repeatPassword, imageUrl } = req.body
 
  if(!firstName || !lastName || !userName || !password) {
        res.status(400).send({message:"Cannot be empty"})
        return
    }

    const userExists = await User.findOne({ userName });

    if(userExists) {
      res.status(400).send({message:"User already exists!"})
    }

    if(password !== repeatPassword) {
      res.status(400).send({message:"Passwords do not match!"})
    }

    const salt = bcrypt.genSaltSync(saltRounds); 
    const hash = bcrypt.hashSync(password, salt); 
    try{
    const user = new User({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: hash,
        imageUrl: imageUrl
    })
    user
    .save(user)
    .then(data => {
        res.send(data)
    })

    if(user) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        token: generateToken(user._id),
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
})

exports.login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName, password); 

  const user = await User.findOne({userName});

  if(user && (await user.matchPassword(password))){
    res.json({
      _id: user._id, 
      userName: user.userName,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password")
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