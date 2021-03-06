const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.index);

router.post('/', moviesController.create);

router.put('/:id', moviesController.update);

router.delete('/:id', moviesController.remove);

module.exports = router;
