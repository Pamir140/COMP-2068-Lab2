const router = require('express').Router();

const MoviesController = require('../controllers/moviesController');

// Begin routes

router.get('/', MoviesController.index);
router.get('/new', MoviesController.new);
router.get('/:id', MoviesController.show);
router.get('/:id/edit', MoviesController.edit);
router.post('/', MoviesController.create);
router.post('/:id', MoviesController.update);
router.post('/:id/delete', MoviesController.destroy);

// End routes

module.exports = router;