module.exports = app => {
    const exercises = require('../controllers/stayFitController')
    const trainers = require('../controllers/trainerController')
    var router = require('express').Router()

    router.get('/', exercises.findAll)
    router.post('/', exercises.create)
    router.get('/', trainers.findAll )
    router.post('/', trainers.create)

    app.use('/api/exercises', router)
    app.use('/api/trainers', router)
}