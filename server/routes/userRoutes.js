const router = require('express').Router()
const { createUser, loginUser, findAllUsers, findOneUser, updateUser, deleteUser, addExerciseToUser } = require('../controllers/userController')

//Create new user
router.post('/', createUser);

//logIn User
router.post('/login', loginUser); 

//get all users; 
router.get('/', findAllUsers); 

//Add exercise to user with exerciseId from req.body
router.post('/:id', addExerciseToUser);

//get user by ID
router.get(`/:id`, findOneUser);

//find by user ID and update
  router.put('/:id', updateUser);

//Find user by ID and delete
  router.delete(`/:id`, deleteUser);

module.exports = router