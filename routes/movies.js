const express = require('express');
const MoviesService = require('../services/movies');

function moviesApp(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MoviesService();

  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await movieService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (e) {
      next(e);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movies = await movieService.getMovie({ movieId });

      res.status(200).json({
        data: movies,
        message: 'movie retrived',
      });
    } catch (e) {
      next(e);
    }
  });
  router.post('/', async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createMovieId = await movieService.createMovie({ movie });

      res.status(200).json({
        data: createMovieId,
        message: 'movie created',
      });
    } catch (e) {
      next(e);
    }
  });
  router.put('/:movieId', async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      const updatedMovieId = await movieService.updateMovie({ movieId, movie });

      res.status(201).json({
        data: updatedMovieId,
        message: 'movies updated',
      });
    } catch (e) {
      next(e);
    }
  });
  router.delete('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await movieService.deleteMovie({ movieId });

      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (e) {
      next(e);
    }
  });
  router.patch('/:movieId', async function (req, res, next) {
    const { body: movie } = req;
    const patchMovie = await movieService.patchMovie({ movie });
    res.status(201).json({
      data: patchMovie,
      message: 'movie updated',
    });
  });
}

module.exports = moviesApp;
