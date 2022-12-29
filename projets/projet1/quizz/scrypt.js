const startButton = document.getElementById("startButton");
const btnPart=document.querySelector('.btnstart'); //c'est la class globale
const btbSuivant = document.querySelector(".Suivant");
const gpcontQuest = document.querySelector(".container");
const Contquest = document.getElementById("questions");
const question = document.getElementById("question");
let questionPlaceS = document.querySelectorAll(".question-place"); //liste des reponses eventuels
const resultat=document.querySelector('.containt-score');
const nbpoint=document.querySelector('.result');
const repA=document.getElementById("rep-a");
const repB=document.getElementById("rep-b");
const repC=document.getElementById("rep-c");
const repD=document.getElementById("rep-d");

let cpt=0;
let score=0;

let QUESTIONS = [
  {
    question:
    "Je suis un langage utilisé principalement en mathématiques et pour les sciences :",
    a: "Fortran",
    b: "AppleScript",
    c: "PHP",
    d: "java",
    correct: "a",
  },
  {
    question: "Quel est le MeilleurLanguage de Programmation en 2022",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "quelle balise permet d'aller à la ligne",
    a: " br ",
    b: " p ",
    c: " b ",
    d: " pre ",
    correct: "a",
  },
  {
    question:
      "Parmis les propositions suivantes, quel langage est très utilisé pour les pages web ?",
    a: "COBOL",
    b: "PHP",
    c: "python",
    d: "SPL",
    correct: "b",
  },
  {
    question: "Je suis un langage de programmation créé par Microsoft :",
    a: " Shell Unix",
    b: "Swift",
    c: "Visual Basic",
    d: "C#",
    correct: "c",
  },
  {
    question: 
    "Parmis ces propositions laquelle n'est pas un langage de programmation ?",
    a: "Caml",
    b: "RedHat",
    c: "Eiffel",
    d: "C++",
    correct: "b",
  },
];

//button de démarrage du jeu
function startGame() {
  btnPart.style.visibility="hidden";
  gpcontQuest.classList.add("display");
}

//generateur de reponses éventuelles a,b,c,d
function getQuestion() {
  let reponse;
  questionPlaceS.forEach(item => {
    if (item.checked) {
      reponse = item.id;
    }
  });
  return reponse;
}
function selectQuestion() {
  questionPlaceS.forEach(item => item.checked = false);
}

function rafrechirJeu() {
  selectQuestion()
  const questionEncour = QUESTIONS[cpt];
  question.innerHTML=questionEncour.question;

  repA.innerHTML=questionEncour.a;
  repB.innerHTML=questionEncour.b;
  repC.innerHTML=questionEncour.c;
  repD.innerHTML=questionEncour.d;  
}

/**commencer le jeu*/
startButton.addEventListener('click',function(){
  startGame();
});
rafrechirJeu();
btbSuivant.addEventListener("click", () => {
  const reponse=getQuestion();

  if (reponse) {
    if (reponse===QUESTIONS[cpt].correct) {
      score++;
    }
    cpt++;
    if(cpt < QUESTIONS.length) {
      rafrechirJeu();
    }else{
      //affichage score : vous avez score/QUESTIONS.lenght
      resultat.style.marginTop="0";
      resultat.classList.add("display");
      nbpoint.innerHTML=score+ "/" + QUESTIONS.length;
      gpcontQuest.style.visibility="hidden";

    }
  }
});

resultat.addEventListener('click',function(){
  location.reload();
})