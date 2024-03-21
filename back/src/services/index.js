const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },
    postMovies: async (movieData) => {
        try {
            const movie = await Movie.create(movieData);
            return movie;
        } catch (error) {
            console.error('Error al crear la película:', error.message);
            throw new Error('Error al crear la película: ' + error.message);
        }
    }
}