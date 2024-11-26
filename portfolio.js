// script.js
function navigateTo(url) {
    window.location.href = url;
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  const menuOpen = menu.style.right === '0px';

  if (menuOpen) {
    menu.style.right = '-250px';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
  } else {
    menu.style.right = '0px';
    overlay.style.opacity = '0.7'; // Ajuste l'opacité si nécessaire
    overlay.style.visibility = 'visible';
  }
});

// Ferme le menu si on clique sur l'overlay
overlay.addEventListener('click', () => {
  menu.style.right = '-250px';
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
});


// JavaScript pour gérer le défilement infini
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children); // Liste des images initiales

    // Duplique les images pour assurer une boucle fluide
    images.forEach(image => {
        const clone = image.cloneNode(true); // Copie de l'image
        track.appendChild(clone); // Ajoute à la fin
    });

    // Ajoute encore un clone pour rendre la transition encore plus fluide
    images.forEach(image => {
        const clone = image.cloneNode(true); // Copie de l'image
        track.appendChild(clone);
    });
});
