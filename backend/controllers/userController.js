// const db = require('../models');
const generateToken = require('../config/generateToken');
const bcrypt = require("bcryptjs");
const saltRounds = +process.env.SALT;
const asyncHandler = require("express-async-handler");
const User = require('../models/User');
const Exercise = require('../models/Exercise')
const mongoose = require('mongoose');
// const toId = mongoose.Types.ObjectId

// register
const createUser = asyncHandler( async(req, res) => {
  const { firstName, lastName, userName, password, repeatPassword, imageUrl } = req.body

  // validation

  if(!firstName || !lastName || !userName || !password) {
        res.status(400)
        throw new Error("Please enter all required fields!")
    }

    if(password !== repeatPassword) {
      res.status(400)
      throw new Error("Passwords do not match!")
    }

  const userExists = await User.findOne({ userName });
  if(userExists) {
    res.status(400)
    throw new Error("An account with this Username already exists.")
  }
  
  // hash the password

  const salt = bcrypt.genSaltSync(saltRounds); 
  const hashedPassword = bcrypt.hashSync(password, salt); 

  // create user
  
  const user = await User.create({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
      imageUrl
  })

  //will generate and pass cookie to front end

    if(user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        token: generateToken(user._id),
      });
    } else {
      res.status(400)
      throw new Error("Invalid user data!")
    }
})

// Log In / authenticate user / attach token  

const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  // let token;

  // check for userName

  const user = await User.findOne({userName});

  token = generateToken(user._id);

  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id: user._id, 
      userName: user.userName,
      token: generateToken(user._id)
    });
    res.cookie('authCookie', token,{maxAge: 900000, httpOnly: true})
  } else {
    res.status(401);
    throw new Error("Invalid username or password")
  }
});

//find all users

const findAllUsers = asyncHandler(async(req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {}
    await User.find(condition).populate({path: 'exercises', model: 'Exercise'})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve users."
        })
    })
})

//find user by id
const findOneUser = asyncHandler(async(req, res) => {
  const id = req.params.id;
  User.findById(id).populate({path: 'exercises', model: 'Exercise'})
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found User with id " + id });
    else res.json({
      _id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      token: generateToken(data._id)
    });  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving User with id=" + id })
  });
});

//find by user ID, and update info

const updateUser = asyncHandler(async(req, res) => {
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
});
//find user by ID and delete

const deleteUser = asyncHandler(async(req, res) => {
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
});

  const addExerciseToUser = asyncHandler(async(req, res) => {

    // let exerciseId = req.body
    const exercise = await Exercise.findById(req.params.exercise)
    const user = await User.findById(req.params.user)

    if(user) {
      User.findByIdAndUpdate(req.params.user, {$push: {exercises: exercise}}).exec()
        res.json(user)
    } else {
        return res.status(409).send({message:"Unable to get user by id"})
    }
})

// Get user data
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

module.exports = {
  createUser,
  loginUser,
  findAllUsers,
  findOneUser,
  updateUser,
  deleteUser,
  addExerciseToUser,
  getMe,
}