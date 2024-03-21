// const { CleanPlugin } = require("webpack");
const axios = require("axios");
const endPoint = 'http://localhost:3000/movies'
const genres = ['Action','Fantasy','Comedy','Drama','Sci-Fi','Terror','Adventure','Romance'];
// const movieGenres = document.querySelectorAll("input[name='genre[]']");
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonCleaner = document.getElementById('buttonCleaner');

const options = document.getElementById('options');


const movieObject = () => {
    const title = document.getElementById('movieTitle').value;
    const year = document.getElementById('movieYear').value;
    const director = document.getElementById('movieDirector').value;
    const duration = document.getElementById('movieDuration').value;
    const rate = document.getElementById('movieRate').value;
    const poster = document.getElementById('moviePoster').value;

    const movie = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    }

    return movie;
}

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

// obtener los datos del formulario
function handlerSubmit(event){
    event.preventDefault();
    const genres = validateCheckboxes()
    const { title, year, director, duration, rate, poster } = movieObject;

    if(![title, year, director, duration, rate, poster, genres].every(Boolean)) {
        return alert('Faltan datos de la película por llenar')
    }

}


// validar almenos 1 género seleccionado
function validateCheckboxes(){
    const checkboxes = document.querySelectorAll('input [name = "genre[]"]');
    console.log(checkboxes)
    
    const genreArray = []

    for (const selectedGenre of checkboxes) {
        if (selectedGenre.checked){
            genreArray.push(selectedGenre.value)
        }
    }
    
    return genreArray
}

validateCheckboxes()



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



const postMovies = async () => {
    const data = axios.post(endPoint, movieObject);
}



buttonSubmit.addEventListener('click', handlerSubmit);
buttonCleaner.addEventListener('click', cleanInputs);