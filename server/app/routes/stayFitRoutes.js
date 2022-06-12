module.exports = app => {
    const exercises = require('../controllers/stayFitController')
    var router = require('express').Router()

    router.get('/', exercises.findAll)
    router.post('/', exercises.create)
    

    app.use('/api/exercises', router)
}