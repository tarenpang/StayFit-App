const router = require('express').Router()
// const Joi = require('joi');
const bcrypt = require('bcryptjs')
const { User, validate } = require('../models/User')

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
            return res.status(409).send({message:"Username already exists!"})
        }
    }catch(error) {
        res.status(500).send({message: error.details.message})
    }
});

router.get('/', async(req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
  
    var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {};
    User.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve trainers."
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