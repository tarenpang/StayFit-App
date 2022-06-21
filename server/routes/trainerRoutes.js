const bcrypt = require('bcryptjs');
const router = require('express').Router();
const { createTrainer, loginTrainer, findAllTrainers, findOneTrainer, updateTrainer, deleteTrainer, addExerciseToTrainer } = require("../controllers/trainerController"); 

// Create Trainer
router.post('/', createTrainer);

//Login Trainer
router.post('/login', loginTrainer); 

// FindAll Trainers
router.get('/', findAllTrainers);

// Find Trainer by ID
router.get('/:id', findOneTrainer);

//find Trainer and update info; 
router.put('/:id', updateTrainer);

//find trainer by ID and delete
router.delete('/:id', deleteTrainer);

//add exercise to trainer
router.post('/addExercise/:id', addExerciseToTrainer)

module.exports = router; 
