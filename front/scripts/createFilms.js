// const { CleanPlugin } = require("webpack");
const axios = require("axios");
const endPoint = 'http://localhost:3000/movies'
const genres = ['Action','Fantasy','Comedy','Drama','Sci-Fi','Terror','Adventure','Romance'];
// const movieGenres = document.querySelectorAll("input[name='genre[]']");
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonCleaner = document.getElementById('buttonCleaner');

const options = document.getElementById('options');

const title = document.getElementById('movieTitle');
const year = document.getElementById('movieYear');
const director = document.getElementById('movieDirector');
const duration = document.getElementById('movieDuration');
const rate = document.getElementById('movieRate');
const poster = document.getElementById('moviePoster');



// renderizando los géneros
function renderGenres(){
    options.innerHTML = ''

    // para cada género dentro del arreglo
    for ( const genre of genres ){
        const input = document.createElement('input');
        const label = document.createElement('label');

        
        input.type = "checkbox";
        input.classList.add('form-check-input');
        input.id = genre;
        input.name = "genre[]";
        input.value = genre;
        
        label.classList.add('form-check-label');
        label.htmlFor = genre;
        label.textContent = genre;

        options.appendChild(input);
        options.appendChild(label);
    }
    return options;
}

renderGenres();



// validar almenos 1 género seleccionado
function validateCheckboxes(){
    const checkboxes = document.querySelectorAll('input[name = "genre[]"]');
    
    const genreArray = []
    
    for (const selectedGenre of checkboxes) {
        if (selectedGenre.checked){
            genreArray.push(selectedGenre.value)
        }
    }
    
    return genreArray
}



const postMovies = async (movie) => {
    try {
        await axios.post(endPoint, movie);
        alert("Se creó la película exitosamente");
    } catch (error) {
        console.log("Error al crear la película");
    }
}


// LIMPIAR EL FORMULARIO
function cleanInputs(){
    title.value = '';
    year.value = '';
    director.value = '';
    duration.value = '';
    rate.value = '';
    poster.value = '';
    
    const checkboxes = document.querySelectorAll('input [name = "genre[]"]');
    for (const item of checkboxes) {
        item.checked = false;
        item.classList.remove('selected');
    }
    
}

// obtener los datos del formulario
function handlerSubmit(event){
    event.preventDefault();
    const genres = validateCheckboxes();

    if(![title.value, year.value, director.value, duration.value, rate.value, poster.value, genres].every(Boolean)) {
        return alert('Faltan datos de la película por llenar')
    }

    const movie = {
        title: title.value,
        year: year.value,
        director: director.value,
        duration: duration.value,
        genre: genres,
        rate: rate.value,
        poster: poster.value,
    }

    postMovies(movie);

}


buttonSubmit.addEventListener('click', handlerSubmit);
buttonCleaner.addEventListener('click', cleanInputs);