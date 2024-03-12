const renderFilms = require("./renderFilms");
const axios = require("axios");


const fetchFilms = async () => {
    try {
        const answer = await axios.get("https://students-api.up.railway.app/movies");
        const films = answer.data;
        films.map(renderFilms);
    } catch (error) {
        console.log("Tuvimos un error en la petición.");
    }
};

fetchFilms();

