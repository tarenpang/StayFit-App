const router = require('express').Router()
const { createUser, loginUser, findAllUsers, findOneUser, updateUser, deleteUser, addExerciseToUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware'); 

//Create new user
router.post('/', createUser);

//logIn User
router.post('/login', loginUser); 

//get all users; 
router.get('/', findAllUsers); 

//Add exercise to user with exerciseId from req.body
router.post('/addExercise/:id', protect, addExerciseToUser);

//get user by ID
router.get(`/:id`, protect, findOneUser);

//find by user ID and update
  router.put('/:id', protect, updateUser);

//Find user by ID and delete
  router.delete(`/:id`, protect, deleteUser);

module.exports = router