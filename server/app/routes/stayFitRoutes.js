module.exports = app => {
    const exercises = require('../controllers/stayFitController')
    var router = require('express').Router();

    router.post('/', exercises.create);
    router.get('/', exercises.findAll);
    router.get("/:id", exercises.findOne);
    router.put("/:id", exercises.update);
    router.delete("/:id", exercises.delete);

    app.use('/api/exercises', router);
}