const { getMovies, postMovies } = require("../services/");

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor",
            });
        }
    },
    postMoviesController: async (req, res) => {
        try {
            const movies = await postMovies(req.body);
            res.status(201).json(movies);
        } catch (error) {
            res.status(400).json({
                error: "Error interno del servidor",
            });
        }
    }
}
 