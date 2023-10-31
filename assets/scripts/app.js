const movieModal =document.getElementById('add-modal');
const showModalButton = document.getElementById('modalOpen');
const backdrop = document.getElementById('backdrop');
const cancelBtn = movieModal.querySelector('.btn--passive');
const confirmAddMovie = cancelBtn.nextElementSibling;
const textToHide = document.getElementById('entry-text')
const userInput = document.querySelectorAll('input');
const updateUI = ()=>{
        if(movies.length == 0){
            textToHide.style.display = "block";
        }else{
            textToHide.style.display = "none";
        }
}
const movies = [];
const toggleMovieModal =()=>{
    movieModal.classList.toggle('visible');
    backdropToggle();
}
const clearMoviesInput = () =>{
    for(const userinput of userInput){
        userinput.value = '';
    }
}


const addMovieHander = ()=>{
    titleValue = userInput[0].value;
    imageValue = userInput[1].value;
    ratingValue = userInput[2].value;
    if(titleValue.trim() === '' || 
    imageValue.trim() === '' ||
     ratingValue.trim() === '' ||
     +ratingValue < 1 ||
     +ratingValue > 5){
        alert('something is wrong check your fields (rating between 1-5')
        return;
     }

     const newMovie = {
        id: Math.random().toString(),
        title:titleValue,
        image:imageValue,
        rating:ratingValue
     };
     movies.push(newMovie);
     console.log(movies);
     toggleMovieModal();
     clearMoviesInput();     
     renderNewMovieElement(newMovie.id,newMovie.title,newMovie.image,newMovie.rating);
     updateUI();
}
const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies){
        if(movie.id == movieId){
            break;
        }
        movieIndex ++;
    }
    movies.splice(movieIndex, 1);
    const ListRoot = document.getElementById('movie-list');
    ListRoot.children[movieIndex].remove();
}
const renderNewMovieElement = (id,title, image, rating) =>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src=${image} alt=${title}/>
        </div>   
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div> 
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null,id));
    const ListRoot = document.getElementById('movie-list');   
    ListRoot.append(newMovieElement);
}
const backdropToggle=()=>{
    backdrop.classList.toggle('visible');    
}
const closeMovieModal = ()=>{
    toggleMovieModal();
}
showModalButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelBtn.addEventListener('click',closeMovieModal);
confirmAddMovie.addEventListener('click', addMovieHander);
