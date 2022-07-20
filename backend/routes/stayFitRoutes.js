const router = require("express").Router();
const Exercise = require("../models/Exercise");

//create an exercise
router.post("/", async (req, res) => {
	console.log(req.body.name)
	console.log(req.body.description)
	try {
		const exercise = await Exercise.findOne({ name: req.body.name });
		if (exercise)
			return res
				.status(409)
				.send({ message: "Exercise with this name already Exist!" });

		await new Exercise({ ...req.body }).save();
		res.status(201).send({ message: "Exercise created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
//get all exercises 
router.get('/', async(req, res) => {
	const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: 'i'}} : {};
    await Exercise.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
      console.log("error is:")
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve exercises."
        })
    });	
})

//get exercise by ID
router.get(`/:id`, async(req, res) => {
    const id = req.params.id;
    
    await Exercise.findById(id)
    .then(data => {
        if(!data) {
            res.status(400).send({message:"No exercise found"})
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error retrieving with id=${id}`
        })
    })
  });

  //update exercise by id
  router.put('/:id', async(req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data does not exist"
        });
    }
    const id = req.params.id;
    await Exercise.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data) {
            res.status(400).send({message:`Cannot update exercise with an id of id=${id}`})
        } else res.send({message: "Exercise info updated succesfully!"})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error updating user with id= ${id}`
        })
    })
  });  

  //delete exercise by id
  router.delete(`/:id`, async(req, res) => {
    const id = req.params.id;
    await Exercise.findByIdAndRemove(id)
    .then(data => {
        if(!data) {
            res.status(400).send({message:`Cannot delete exercise with an id of id=${id}`})
        } else res.send({message: `Exercise with an ${id} deleted succesfully!`})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Error deleting user with id= ${id}`
        })
    })
  });

module.exports = router;