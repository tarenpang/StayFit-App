const router = require("express").Router();
const Exercise = require("../models/Exercise");

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


module.exports = router;

// module.exports = app => {
//     const exercises = require('../controllers/stayFitController')
//     var router = require('express').Router();

//     router.post('/', exercises.create);
//     router.get('/', exercises.findAll);
//     router.get("/:id", exercises.findOne);
//     router.put("/:id", exercises.update);
//     router.delete("/:id", exercises.delete);

//     app.use('/api/exercises', router);
// }