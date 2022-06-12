const db = require('../models');
const User = db.users;

exports.create = (req, res) => {
  if(!req.body.firstName) {
    res.status(400).send(message:"Cannot be empty")
    return
  } 
  const user = new User ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    imageUrl: req.body.imageUrl
  })
  user
  .save(user)


  exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    var condition = firstName || lastName ? {firstName: {$regex: newRegExp(firstName, lastName), $options: 'i'}} : {
      
    }
  }
}