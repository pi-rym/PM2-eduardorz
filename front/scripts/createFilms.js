const genres = ['Action','Fantasy','Comedy','Drama','Sci-Fi','Terror','Adventure','Romance'];

const buttonSubmit = document.getElementById('buttonSubmit');
const buttonCleaner = document.getElementById('buttonCleaner');

const options = document.getElementById('options');

const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const duration = document.getElementById('duration');
const rate = document.getElementById('rate');
const poster = document.getElementById('poster');

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

    if(![title.value, year.value, director.value, duration.value, rate.value, poster.value].every(Boolean)) {
        return alert('Faltan datos de la película por llenar')
    }

    return alert('Película enviada');
}


/* validar almenos 1 género seleccionado
function validateCheckboxes(){
    const checkboxes = document.querySelectorAll('input [name = "genre[]"]');
    console.log(checkboxes);
}

validateCheckboxes()

*/

// LIMPIAR EL FORMULARIO
function cleanInputs(){
    title.value = '';
    year.value = '';
    director.value = '';
    duration.value = '';
    rate.value = '';
    poster.value = '';
    
    /* 
    const checkboxes = document.querySelectorAll('input [name = "genre[]"]');
    for (const item of checkboxes) {
        item.checked = false;
        item.classList.remove('selected');
    }
    */
   
}

buttonSubmit.addEventListener('click', handlerSubmit);
buttonCleaner.addEventListener('click', cleanInputs);