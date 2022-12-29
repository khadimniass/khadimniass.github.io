const butGd = document.querySelector("#btn-g-d");
const butDg = document.querySelector("#btn-d-g");
const gauche = document.querySelector(".paragraph-g");
const droite = document.querySelector(".paragraph-d");
var paragraphs = [
  " mon premier element",
  "mon deuxieme element",
  "mon troisieme element",
  "mon Quatrieme element",
  "mon cinquieme element",
];

function disableButton(container, button) {
  if (container.childNodes.length == 0) {
    button.disabled = true;
    button.className = "";
  } else {
    button.disabled = false;
  }
}
function moved() {
  //extraire les éléments du tableau et de l'afficher à gauche
  for (let i = 0; i < paragraphs.length; i++) {
    const p = document.createElement("p");
    p.innerHTML = paragraphs[i];
    p.id = "idp";
    gauche.appendChild(p);

    //evenement doit s'aplliquer la balise et non sur la phrase entière
    p.addEventListener("mouseover", function () {
      p.classList.toggle("actived"); //to add in css
    });
    //btb G-D
    butGd.addEventListener("click", function () {
      const selection = document.querySelector(".actived");
      droite.appendChild(selection);
      selection.className = "";
      disableButton(droite, butDg);
      disableButton(gauche, butGd);
    });

    //btn D-G
    butDg.addEventListener("click", function () {
      const selection = document.querySelector(".actived");
      gauche.appendChild(selection);
      selection.className = "";
      disableButton(gauche, butGd);
      disableButton(droite, butDg);
    });
  }
}
moved();
disableButton(droite, butDg);
