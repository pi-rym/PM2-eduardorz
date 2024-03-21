
const { Router } = require("express");
const { getAllMovies, postMoviesController } = require("../controllers/movieController");

const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.post("/", postMoviesController);

module.exports = movieRouter;
