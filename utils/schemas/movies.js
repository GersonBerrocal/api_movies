const joi = require('joi');

// const movieIdSchema = joi.object({
//   movieId: joi.string().regex(/^[0-9a-fA-F]{24}$/),
// });
const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const movieTileSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(500);
const movieDurationSchema = joi.number().min(1).max(3000);
const movieContentRatingSchema = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const moviesTagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = joi.object({
  title: movieTileSchema.required(),
  year: movieYearSchema.required(),
  cover: movieCoverSchema.required(),
  description: movieDescriptionSchema.required(),
  duration: movieDurationSchema.required(),
  contentRating: movieContentRatingSchema.required(),
  source: movieSourceSchema.required(),
  tags: moviesTagsSchema,
});

const updateMovieSchema = joi.object({
  title: movieTileSchema,
  year: movieYearSchema,
  cover: movieCoverSchema,
  description: movieDescriptionSchema,
  duration: movieDurationSchema,
  contentRating: movieContentRatingSchema,
  source: movieSourceSchema,
  tags: moviesTagsSchema,
});

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};
