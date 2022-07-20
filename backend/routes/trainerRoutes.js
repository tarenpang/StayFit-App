const router = require('express').Router();
const { createTrainer, loginTrainer, findAllTrainers, findOneTrainer, updateTrainer, deleteTrainer, addExerciseToTrainer } = require("../controllers/trainerController"); 
const { protect } = require('../middleware/authMiddleware')

// Create Trainer
router.post('/', createTrainer);

//Login Trainer
router.post('/login', loginTrainer); 

// FindAll Trainers
router.get('/', findAllTrainers);

// Find Trainer by ID
router.get('/:id', protect, findOneTrainer);

//find Trainer and update info; 
router.put('/:id', protect, updateTrainer);

//find trainer by ID and delete
router.delete('/:id', protect, deleteTrainer);

//add exercise to trainer
router.post('/saveExercise/:trainer/:exercise', protect, addExerciseToTrainer)

module.exports = router; 