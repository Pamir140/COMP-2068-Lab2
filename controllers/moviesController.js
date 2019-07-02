const Movie = require('../models/movie');

exports.index = (req, res) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {
        movies: movies,
        title: 'Archive'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.show = (req, res) => {};

exports.new = (req, res) => {
  res.render('movies/new', {
    title: 'New Movie Post'
  });
};

exports.edit = (req, res) => {};

exports.create = (req, res) => {
  Movie.create(req.body.movie)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};


// To fil in later
exports.drafts = (req, res) => {};

exports.published = (req, res) => {};