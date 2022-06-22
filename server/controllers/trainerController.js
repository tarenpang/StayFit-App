const db = require('../models');
const Trainer = require("../models/Trainer");
const Exercise = require("../models/Exercise"); 
const generateToken = require('../config/generateToken');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const saltRounds = +process.env.SALT;

//Register new trainer
const createTrainer = asyncHandler(async(req, res) => {
  const { firstName, lastName, userName, password, repeatPassword, credentials } = req.body;
  
  if(!firstName || !lastName || !userName || !password || !credentials) {
    res.status(400)
    throw new Error("Please enter all required fields!")
  }

  const trainerExists = await Trainer.findOne({ userName }); 

  if(trainerExists) {
    res.status(400)
    throw new Error("Username taken!")
  }
  
  if(password !== repeatPassword) {
    res.status(400).send({message: "Passwords do not match!"})
  }

  const salt = bcrypt.genSaltSync(saltRounds); 
  const hashedPassword = bcrypt.hashSync(password, salt);
  const trainer = await Trainer.create({
    firstName,
    lastName,
    userName,
    password: hashedPassword,
    credentials,
  }) 
 if(trainer) {
  res.json({
    _id: trainer._id,
    firstName: trainer.firstName,
    lastName: trainer.lastName,
    token: generateToken(user._id)
  })
 }  else {
  res.status(400)
  throw new Error("Invalid trainer data!")
 } 

});

//login with Trainer
const loginTrainer = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const trainer = await Trainer.findOne({userName});

  if(trainer && (await bcrypt.compare(password, trainer.password))){
    res.json({
      _id: trainer._id,
      userName: trainer.userName,
      token: generateToken(trainer._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid userName or password")
  }
})

//find all trainers
const findAllTrainers = asyncHandler(async(req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {};
    await Trainer.find(condition).populate({path:'exercises', model: "Exercise"})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500)
        throw new Error(err.message || "Error occured retrieving trainers!")
    })
})
//find one trainer
const findOneTrainer = asyncHandler(async(req, res) => {
  const id = req.params.id;
  
  await Trainer.findById(id).populate({path:'exercises', model: "Exercise"})
  .then(data => {
    if (!data) {
      res.status(404)
      throw new Error({ message: "Not found Trainer with id " + id });
    }
    else res.send(data)  
  })
  .catch(err => {
    res.status(500)
    throw new Error(err.message || "Error retrieving Trainer with id=" + id )
  });
});
//update trainer
const updateTrainer = asyncHandler(async(req, res) => {
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
});
//delete trainer
const deleteTrainer = asyncHandler(async(req, res) => {
  const id = req.params.id;
  await Trainer.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Trainer with id=${id}. Trainer was not found!`
        });
      } else {
        res.send({
          message: "Trainer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Trainer with id=" + id
      });
    }); 
});
//add exerise to trainer by id;
const addExerciseToTrainer = asyncHandler(async(req, res) => {

  // let exerciseId = req.body
  const exercise = await Exercise.findById(req.params.exercise)
  const trainer = await Trainer.findById(req.params.trainer)

  if(trainer) {
    Trainer.findByIdAndUpdate(req.params.trainer, {$push: {exercises: exercise}}).exec()
      res.json(trainer)
  } else {
      return res.status(409).send({message:"Unable to get trainer by id"})
  }
})

module.exports = {
  createTrainer, 
  loginTrainer,
  findAllTrainers, 
  findOneTrainer,
  updateTrainer,
  deleteTrainer,
  addExerciseToTrainer
}