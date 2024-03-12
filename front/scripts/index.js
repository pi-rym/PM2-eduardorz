const renderFilms = require("./renderFilms");

$.get(`https://students-api.up.railway.app/movies`, (data) => { data.map(renderFilms) });




