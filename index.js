const bgModal = document.querySelector(".bg_modal");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");
const contactButton = document.getElementById("contact");

console.log(closeButton);

contactButton.addEventListener("click", launchModal);
closeButton.addEventListener("click", closeModal);

function launchModal() {
  bgModal.style.display = "block"; // Permet l'affichage de la modale
}

function closeModal() {
  bgModal.style.display = "none"; // Permet de fermer la modale
}
