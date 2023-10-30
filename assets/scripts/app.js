const movieModal =document.getElementById('add-modal');
const showModalButton = document.getElementById('modalOpen');
const backdrop = document.getElementById('backdrop');
const cancelBtn = movieModal.querySelector('.btn--passive');


const toggleMovieModal =()=>{
    movieModal.classList.toggle('visible');
    backdropToggle();
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

