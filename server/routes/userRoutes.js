const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { User, validate } = require('../models/User')
const { Exercise } = require('../models/Exercise')

//Create new user
router.post('/', async(req, res) => {
    try {
        const {error} = validate(req.body)
        if(error)
        return res.status(400).send({message: error.details[0].message})
        console.log(error)

        const user = await User.findOne({userName: req.body.userName})
        if(!user) {
            const salt = await bcrypt.genSalt(Number(process.env.SALT))
            const hashPassword = await bcrypt.hash(req.body.password, salt)
    
            await new User({...req.body, password: hashPassword}).save()
            res.status(201).send({message:"User created!"})
        } else {
            return res.status(409).send({message:"Username already exists!", userLoggedIn: true})
        }
    }catch(error) {
        res.status(500).send({message: error.details.message})
    }
});

//get all users; 
router.get('/', async(req, res) => {
	const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: 'i'}} : {};
    await User.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
      console.log("error is:")
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve users."
        })
    });	
})


//Add exercise to user exercise cart
router.post('/:id', async(req, res) => {

    let userId = req.params.id
    let exerciseId = req.body

    const user = await User.findById(userId)
    const exercise = await Exercise.findById(req.body)

    if(user) {
        User.findByIdAndUpdate(userId, {$push:{exercises: exercise}})
        console.log("user found")
    } else {
        return res.status(409).send({message:"Unable to get user by id"})
    }
});

router.get(`/:id`, async(req, res) => {
    const id = req.params.id;
    
    await User.findById(id)
    .then(data => {
        if(!data) {
            res.status(400).send({message:"No user found"})
        } else {
            res.send({message:`User ${data.firstName} found with an ${data.id}`})
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error retrieving with id=${id}`
        })
    })
  });


  router.put('/:id', async(req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data does not exist"
        });
    }
    const id = req.params.id;
    await User.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data) {
            res.status(400).send({message:`Cannot update user with an id=${id}`})
        } else res.send({message: "User info updated succesfully!"})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error updating user with id= ${id}`
        })
    })
  });  

  router.delete(`/:id`, async(req, res) => {
    const id = req.params.id;
    await User.findByIdAndRemove(id)
    .then(data => {
        if(!data) {
            res.status(400).send({message:`Cannot delete user with an id of id=${id}`})
        } else res.send({message: "User deleted succesfully!"})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error deleting user with id= ${id}`
        })
    })
  });

module.exports = router
// module.exports = app => {
//     const users = require('../controllers/userController');
//     const router = require('express').Router(); 

//     router.get('/', users.findAll);
//     router.post('/', users.create);
//     router.post('/login', users.login);
//     router.get("/:id", users.findOne);
//     router.put("/:id", users.update);
//     router.delete("/:id", users.delete);

//     app.use('/api/users', router); 
// }

// const router = require("express").Router();
// const { User, validate } = require("../models/User");
// const bcrypt = require("bcryptjs");

// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await User.findOne({ email: req.body.userName });
// 		if (user)
// 			return res
// 				.status(409)
// 				.send({ message: "User with this username already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new User({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

// module.exports = router;