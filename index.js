const modal = document.getElementById('modal');
const contactButton = document.getElementById('contact');

// console.log(contactButton);

contactButton.addEventListener('click', launchModal);

function launchModal(){
    modal.style.display = 'flex'; // Permet l'affichage de la modale
}