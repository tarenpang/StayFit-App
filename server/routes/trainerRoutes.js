const bcrypt = require('bcryptjs');
// const Joi = require('joi');
const router = require('express').Router();
const {Trainer, validate} = require('../models/Trainer')

// Create Trainer
router.post('/', async(req, res) => {
    try {
        const {error} = validate(req.body)
        if(error)
        return res.status(400).send({message: error.details.message});
				console.log(error);

        const trainer = await Trainer.findOne({userName: req.body.userName})
        if(!trainer) {
			const salt = await bcrypt.genSalt(Number(process.env.SALT))
			const hashPassword = await bcrypt.hash(req.body.password, salt)
	
			await new Trainer({...req.body, password: hashPassword}).save()
			res.status(201).send({message:"Trainer created"})
		} else {
			return res.status(409).send({message:"Trainer already exists!"})
		}			
    } catch(error) {
				console.log(error.message); 
        res.status(500).send({message: error.details.message})
    }
});

// FindAll Trainers
router.get('/', async(req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;

  var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {};
  Trainer.find(condition)
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Error occured trying to retrieve trainers."
      })
  })
});

// Find Trainer by ID
router.get('/:id', async(req, res) => {
  const id = req.params.id;
  Trainer.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Trainer with id " + id });
    else res.send(data);  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Trainer with id=" + id })
  });
});

//find Trainer and update info; 
router.put('/:id', async(req, res) => {
  const id = req.params.id;
  Trainer.findByIdAndUpdate(id, req.body)
  .then(data => {
    if (!data) {
      res.status(404).send({ message: "Not found Trainer with id " + id });
    }
    else res.send({message:`Trainer ${data.firstName} info updated sucessfully!`});  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Trainer with id=" + id })
  });
});

//find trainer by ID and delete
router.delete('/:id', async(req, res) => {
  const id = req.params.id;
  Trainer.findByIdAndDelete(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Trainer with id " + id });
    else res.send({message: `Traner ${data.firstName} deleted successfully!`});  
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Trainer with id=" + id })
  });
});

module.exports = router; 

// module.exports = app => {
//     const trainers = require('../controllers/trainerController');
//     const router = require('express').Router();

//     router.post('/', trainers.create);
//     router.get('/', trainers.findAll);
//     router.get("/:id", trainers.findOne)
//     router.put("/:id", trainers.update);
//     router.delete("/:id", trainers.delete);

//     app.use('/api/trainers', router); 
// }







// const salt = await bcrypt.genSalt(Number(process.env.SALT))
// const hashPassword = await bcrypt.hash(req.body.password, salt)

// const validPassword = await bcrypt.compare(req.body.password, user.password);

// if(!validPassword)
// return res.status(400).send({message:"Password is not valid!"})

// const token = user.generateAuthToken();
// res.status(200).send({data: token, message: "Logged in successfully!"})
// } catch(error) {
// 		console.log(error.message); 
// res.status(500).send({message: error.details.message})
// }