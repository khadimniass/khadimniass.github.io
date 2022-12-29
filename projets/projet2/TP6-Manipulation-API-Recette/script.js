const LINK_RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";
const LINK_FILTER_BY_ID ="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913";
const LINK_FILTER_BY_RECETTE_NAME =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const openPopup = document.getElementById("heart");
const popup = document.querySelector(".containt-popup");
const close = document.querySelector(".close");
const containtGenerateRecette = document.querySelector(".recette-genere");
const Containtpopup = document.querySelector('.popup');
const search=document.getElementById('search');

// const dat = await getData()
// async fetch getData();

generateur(LINK_RANDOM);
// openPopup.addEventListener("click", () => {
//   popup.classList.add("open-popup");
// });

close.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});

window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.classList.remove("open-popup");
  }
});

search.addEventListener('input', (e)=>{
  e.preventDefault;
  let val = search.value;
  let test = false;
  if (val) {
    fetch(LINK_FILTER_BY_RECETTE_NAME + val )
      .then((data) => data.json())
      .then((tab) => {
        createeurElement(tab["meals"], test);
        creatorpopup(tab['meals']);
      });
  }
});

function generateur(url) {
  fetch(url)
    .then((data) => data.json())
    .then((tab) => {
      createeurElement(tab["meals"]);
      creatorpopup(tab['meals']);
    });
}
// img

function createeurElement(tableau, test = true) {
  tableau.forEach((element) => {
    const divmeadles = document.createElement("div");
    divmeadles.className = "meadle";
    const h3 = document.createElement("h3");
    h3.innerHTML = "Mes Recettes Favorites";
    const divIcone = document.createElement("div");
    divIcone.className = "icone";
    const divcontHimg = document.createElement("div");
    divcontHimg.className = "cont-h-img";
    const imgHeader = document.createElement("img");
    imgHeader.src = element.strMealThumb;
    imgHeader.alt = element.strCategory;
    divcontHimg.appendChild(imgHeader);
    const strong = document.createElement("strong");
    strong.innerHTML = element.strCategory;
    divIcone.appendChild(divcontHimg);
    divIcone.appendChild(strong);
    divmeadles.appendChild(h3);
    divmeadles.appendChild(divIcone);

    const divBotPart = document.createElement("div");
    divBotPart.className = "bottom-part";
    const divIbot = document.createElement("div");
    divIbot.className = "item-bottom";
    const divContMidImg = document.createElement("div");
    divContMidImg.className = "cont-m-img";
    const imgMiddle = document.createElement("img");
    imgMiddle.src = element.strMealThumb;
    imgMiddle.alt = element.strCategory;
    divContMidImg.appendChild(imgMiddle);

    const divDetails = document.createElement("div");
    divDetails.className = "details";
    const h3det = document.createElement("h3");
    h3det.innerText = element.strMeal;
    const btnHeart = document.createElement("button");
    btnHeart.id = "heart";
    btnHeart.innerHTML = "🤍";

    btnHeart.addEventListener("click", () => {
      // popup.innerText = "";
      popup.classList.add("open-popup");
    });

    divDetails.appendChild(h3det);
    divDetails.appendChild(btnHeart);

    if(test){
    const divBotContBnt = document.createElement("button");
    divBotContBnt.className = "b-containt-btn";
    const btnGerator = document.createElement("button");
    btnGerator.id = "generator-recette";
    btnGerator.innerText = "Gerer une recette";
    btnGerator.addEventListener('click', ()=>{
        window.location.reload();
    })
    divBotContBnt.append(btnGerator);
    divIbot.appendChild(divBotContBnt);
  }
    divIbot.appendChild(divContMidImg);
    divIbot.appendChild(divDetails);
    divBotPart.appendChild(divIbot);

    containtGenerateRecette.appendChild(divmeadles);
    containtGenerateRecette.appendChild(divBotPart);
  });
}


function creatorpopup(tab) {
    tab.forEach(elt => {
        const divPopMain = document.createElement('div');
        divPopMain.className = "pop-main";
        const h2pop= document.createElement('h2');
        h2pop.innerText=elt.strTags;
        const divContaintImgPop = document.createElement('div');
        divContaintImgPop.className ="pop-containt-img";
        const imgPop= document.createElement('img');
        imgPop.src = elt.strMealThumb;
        imgPop.alt=elt.strCategory;
        divContaintImgPop.appendChild(imgPop);
        divPopMain.appendChild(h2pop);
        divPopMain.appendChild(divContaintImgPop);

        const divpopBottom = document.createElement('div');
        divpopBottom.className = "pop-bottom";
        const h3popDesc=document.createElement('h3');
        h3popDesc.innerText = "description";
        const pdesc = document.createElement('p');
        pdesc.innerHTML = elt.strInstructions;
        const h2Ingrediens = document.createElement('h2');
        h2Ingrediens.innerText = "ingredien";
        const olIngrediens= document.createElement('ol');
        
        for(i=1; i<=20; i++){
            if (elt["strIngredient"+i] !=''){
                const li = document.createElement('li');
                li.innerText = elt["strIngredient"+i];
                olIngrediens.appendChild(li);
            }
        }
        
        for(i=1; i<=20; i++){
            if (elt["strMeasure"+i] !=''){
                const li = document.createElement('li');
                li.innerText = elt["strMeasure"+i];
                olIngrediens.appendChild(li);
            }
        
        }
        const divLink = document.createElement('div');
        divLink.className = "link-indicator";
        const a = document.createElement('a');
        a.href = elt.strYoutube;
        a.innerText ="suivez la preparation";
        divLink.appendChild(a);

        const adet = document.createElement('a');
        adet.href = elt.strSource;
        adet.innerText = "source";
        divLink.appendChild(adet);

        divpopBottom.appendChild(h3popDesc);
        divpopBottom.appendChild(pdesc);
        divpopBottom.appendChild(h2Ingrediens);
        divpopBottom.appendChild(olIngrediens);
        divpopBottom.appendChild(divLink);

        Containtpopup.appendChild(divPopMain);
        Containtpopup.appendChild(divpopBottom);
    });
}

