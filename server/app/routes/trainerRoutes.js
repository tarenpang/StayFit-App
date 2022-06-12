module.exports = app => {
    const trainers = require('../controllers/trainerController');
    const router = require('express').Router();

    router.get('/', trainers.findAll);
    router.post('/', trainers.create);

    app.use('/api/trainers', router); 
}