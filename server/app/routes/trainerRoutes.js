module.exports = app => {
    const trainers = require('../controllers/trainerController');
    const router = require('express').Router();

    router.post('/', trainers.create);
    router.get('/', trainers.findAll);
    router.get("/:id", trainers.findOne)
    router.put("/:id", trainers.update);
    router.delete("/:id", trainers.delete);

    app.use('/api/trainers', router); 
}