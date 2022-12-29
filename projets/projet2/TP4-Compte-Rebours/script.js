const jour = document.getElementById("jours");
const heure = document.getElementById("heures");
const minute = document.getElementById("minutes");
const seconde = document.getElementById("secondes");
const countDounw = document.getElementById("count-dounw");
const nextYear = document.getElementById('next-year');
const loading = document.querySelector('.loading');

const dateCourante = new Date().getFullYear();
const nouvelleAnnee = new Date(`January 01 ${dateCourante + 1} 00:00:00`);

nextYear.innerHTML= dateCourante +1;
function compteARebours() {
  const nombreMillisecondeAvant = new Date();
  const diff = nouvelleAnnee - nombreMillisecondeAvant;
  
  // const ObjetDate = new Date(diff);
  // const nombreJours = ObjetDate.getDate();
  // const nombreHeures = ObjetDate.getHours();
  // const nombreMinutes = ObjetDate.getMinutes();
  // const nombreSecondes = ObjetDate.getSeconds();

  const nombreJours = Math.floor(diff / 1000 / (60 * 60 * 24));
  const nombreHeures = Math.floor(diff / 1000 / (60 * 60)) % 24;
  const nombreMinutes = Math.floor(diff / 1000 / 60) % 60;
  const nombreSecondes = Math.floor(diff / 1000) % 60;

  jour.innerText = nombreJours;
  heure.innerText = nombreHeures < 10 ? '0' + nombreHeures : nombreHeures;
  minute.innerText = nombreMinutes < 10 ? '0' + nombreMinutes : nombreMinutes;
  seconde.innerText = nombreSecondes < 10 ? '0' + nombreSecondes : nombreSecondes;
}

setTimeout(() => {
  loading.style.visibility="hidden";
  loading.style.opacity="0";
  countDounw.style.visibility="visible";
  countDounw.style.opacity="1";
}, 1000);


setInterval(() => {
    compteARebours();
}, 1000);
