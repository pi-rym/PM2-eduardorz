
// seleccionamos el contenedor
const container = document.getElementById('container');

function renderFilms(movie){
    // creamos los elementos que iran dentro del contenedor
    const movieElement = document.createElement('article');
    const containerMovie = document.createElement('div');

    // le agregamos el poster de la pelicula a la tarjeta
    // movieElement.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`

    // mediante la clase "divMovie" darle estilos a la tarjeta
    containerMovie.classList.add('divMovie');

    // se crea el contenedor y luego se le inserta el HTML
    containerMovie.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title} (${movie.year})</h3>
    <p><strong>${movie.director}</strong></p> 
    <p><strong>${movie.duration}</strong></p> 
    <p><strong>${movie.genre.join(', ')}</strong></p> 
    <p><strong>${movie.rate}</strong></p> 
    `
    // se appendean los elementos al contenedor y a las tarjetas
    container.appendChild(movieElement);
    movieElement.appendChild(containerMovie);
}

module.exports = renderFilms;