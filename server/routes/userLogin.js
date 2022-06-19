const router = require('express').Router();
const {User} = require('../models/User')
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const mongoose = require('mongoose'); 

router.post('/', async(req, res) => {
    console.log("log in post request1")
    try {
        // const {error} = validate(req.body)
        // if(error) {
        // console.log("login error occured: " + error)
        // return res.status(400).send({message: error.details[0].message});
        // }
        // console.log('passed user validation')

        const user = await User.findOne({userName: req.body.userName})
        if(!user) {
            console.log('did not find user')
            return res.status(401).send({message:"User not found!"})
        }

        const validPassword = bcrypt.compareSync(req.body.password, user.password);

        if(!bcrypt.compareSync(req.body.password, user.password)) {
            console.log('password failed')
            return res.status(401).send({message:"Password is not valid!"})
        }
        // const token = user.generateAuthToken();
        console.log('password successful')
        res.status(200).send({message: "Logged in successfully!"})
    } catch(error) {
        console.log('caught error = ' + error )
        res.status(500).send({message:"Internal server error"})
    }
});

const validate = (data) => {
	const schema = Joi.object({
		userName: Joi.string().userName().required().label("userName"),
		password: Joi.string().required().label("password"),
	});
	return schema.validate(data);
};

module.exports = router; 