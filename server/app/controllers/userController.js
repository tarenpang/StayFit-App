const db = require('../models');
const User = db.users;

exports.create = (req, res) => {
    if(!req.body.firstName) {
        res.status(400).send({message:"Cannot be empty"})
        return
    }
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        imageUrl: req.body.imageUrl
    })
    user
    .save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured creating User."
        })
    })
}

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