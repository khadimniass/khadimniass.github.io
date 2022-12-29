const bouton = document.getElementById("bouton");
const menu = document.querySelector(".menu");
var liste = document.createElement("div");
liste.className = "liste";
const flech = document.querySelectorAll(".fa-angle-left");

let tableauElement = [
  {
    titre: "Dashboard",
    mClass: "Dashboard",
    elements: [
      "Top Navigation",
      "Top Navigation + Sidebar",
      "boxed",
      "Fixed Sidebar + custum Area",
      "fixed Navbar",
      "Fixed Footer",
    ],
    icone: "fa fa-tachometer-alt",
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
  {
    titre: "Widgets",
    mClass: "widgets",
    elements: [],
    icone: 'fa fa-th aria-hidden="true"',
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
  {
    titre: "Layout Options",
    mClass: "layoutOptions",
    elements: ["ChartJS", "Flot", "Inline", "uPlot"],
    icone: "fas fa-copy",
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
  {
    titre: "Charts",
    mClass: "charts",
    elements: [],
    icone: "fas fa-chart-pie",
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
  {
    titre: "UI Elements",
    mClass: "UiElements",
    elements: [],
    icone: "fas fa-tree",
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
  {
    titre: "Forms",
    mClass: "forms",
    elements: [],
    icone: "fas fa-edit",
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
  {
    titre: "Tables",
    mClass: "tables",
    elements: [],
    icone: "fas fa-table",
    ileft: "fa fa-angle-left",
    iright: "fa fa-angle-down",
  },
];

bouton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// menu.addEventListener('mouseover',() =>
// {
//   menu.classList.add('active');
// });

// menu.addEventListener('mouseout', ()=>{
//   menu.classList.remove('active');
// });

for (let i = 0; i < tableauElement.length; i++) {
  var divP = document.createElement("div");
  divP.classList.add(tableauElement[i].mClass, "principal");
  let iconeP = document.createElement("i");
  iconeP.className = tableauElement[i].icone;
  var lesIcones = document.createElement("div");
  lesIcones.className = "lesIcones";
  //lesIcones
  var currentElt = document.createElement("span");
  currentElt.innerHTML = tableauElement[i].titre;
  // containtSpan
  let containtSpan = document.createElement("div");
  containtSpan.className = "containtSpan";
  var countSpan = document.createElement("span");
  var newSpan = document.createElement("span");
  var ileft = document.createElement("i");
  ileft.className = tableauElement[i].ileft;
  var iright = document.createElement("i");
  iright.className = tableauElement[i].iright;
  iright.className = "invisible";

  containtSpan.appendChild(countSpan);
  containtSpan.appendChild(newSpan);
  containtSpan.appendChild(iright);
  containtSpan.appendChild(ileft);

  lesIcones.appendChild(currentElt);
  lesIcones.appendChild(containtSpan);

  divP.appendChild(iconeP);
  divP.appendChild(lesIcones);

//   if (tableauElement[i].elements.length > 0) {
    ileft.addEventListener("click", () => {
    //   document.write(tableauElement[i].elements.length);
      ileft.id = `icon${i}`;
    
      ileft.classList.toggle("tourne");
      for (let j = 0; j < tableauElement[i].elements.length; j++) {
        const li = document.createElement("li");
        li.innerHTML = tableauElement[i].elements[j];
        liste.appendChild(li);
      }
    });
//   }
  if (divP.className == "Dashboard principal") {
    newSpan.innerHTML = '0'+tableauElement[i].elements.length;
    newSpan.classList = "six";
    divP.classList.add("bc-blue");
  } else if (divP.className == "widgets principal") {
    newSpan.innerHTML = "New";
    newSpan.classList = "new";
  } else {
    newSpan.innerHTML = '0'+tableauElement[i].elements.length;
    newSpan.classList = "six";
  }
  liste.appendChild(divP);
  menu.appendChild(liste);

//   let p = document.createElement("li");
//   let li = document.createElement("li");
//   li.innerHTML = `mon li de ${i}`;
//   p.innerHTML = "my p";
//   liste.appendChild(p);
//   liste.appendChild(li);
}
