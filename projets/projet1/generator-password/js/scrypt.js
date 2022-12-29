const placepassword = document.querySelector(".pwd-2"); //afficher apres generation
const Ppwd=document.querySelector('#Ppwd');
const btnGenrator = document.querySelector(".btn");
const form = document.getElementById("form");
const btncopy = document.querySelector(".copy");
const outcopy =document.querySelector(".cp");
/*checkbox button*/
const inputNumber = document.getElementById("nombre");

const Cmajuscule = document.querySelector("#majuscules");
const Cminuscule = document.getElementById("minuscules");
const Cnombre = document.querySelector("#nbm");
const Cspecial = document.querySelector("#special");

function getNumber() {
  return Math.floor(Math.random() * 10);
}
function getLower() {
  var minuscule = "abcdefghijklmnopqrstuvwxyz".split("");
  // minay = Array.from(minuscule);
  return minuscule[Math.floor(Math.random() * minuscule.length)];
}
function getUpper() {
  return getLower().toUpperCase();
}
function getSpecial() {
  var special = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
  arrayChar = Array.from(special);
  return arrayChar[Math.floor(Math.random() * arrayChar.length)];
}
let alphabet="abcdefghijklmnopqrstuvwxyz";
let getLowers=alphabet.split("");
let getUpper=alphabet.toUpperCase().split("");
console.log(getUpper)
function genPwd() {
  var pwd = [].concat(
    // Cminuscule.checked ? getLower() : [],
    Cminuscule.checked ? getLowers:[],
    Cmajuscule.checked ? getUpper: [],
    Cnombre.checked ? getNumber() : [],
    Cspecial.checked ? getSpecial() : []
  );

  const lenP = parseInt(inputNumber.value);
  if (lenP < 8 || lenP > 15) {
    return (placepassword.innerHTML =
      "<span style='color:red;'>la taille doit etre cmpris entre 8 et 15</span>");
  }
  let newP = "";
  // for (var i of lenght) {
  for (let i = 0; i < lenP; i++) {
    newP += pwd[Math.floor(Math.random() * pwd.length)];

  }
  if (pwd.length === 0) {
    return (placepassword.innerHTML ="<span style='color:red;'>choisit le format</span>");
  }
  return newP; //password generated
}
//evenement de génération de pwd
var pwdgerated="";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  pwdgerated =genPwd();
  placepassword.innerHTML = pwdgerated;
  btncopy.classList.add('access');
});
btncopy.addEventListener("click", function () {
  copy(pwdgerated);

});

//fonction copie
function copy(tocopy) {
  console.log(tocopy);
  const textarea=document.createElement('textarea');
  textarea.value=tocopy; //tocopy=pwd;
  textarea.select();
  textarea.setSelectionRange(0,99999);

  if(document.execCommand("copy")){
  outcopy.innerHTML ="<span style='color:green'>copié avec success ...</span>";
  }
  textarea.remove();
}
