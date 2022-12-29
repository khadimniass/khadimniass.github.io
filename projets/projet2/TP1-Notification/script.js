const btn = document.querySelectorAll("button");
const containt_alert = document.querySelector(".containt-alert");

function addDiv(classAdded, button) {
  const mdiv = document.createElement("div");
  const span = document.createElement("span");
  span.innerHTML = button.outerText;
  mdiv.className = `containt-alert ${classAdded}`;
  mdiv.appendChild(span);
  document.body.appendChild(mdiv);
  setTimeout(()=>mdiv.remove() , 1500);
}

btn[0].addEventListener("click", () => {
  addDiv("success", btn[0]);
});

btn[1].addEventListener("click", () => {
  addDiv("danger", btn[1]);
});

btn[2].addEventListener("click", () => {
  addDiv("warning", btn[2]);
});

btn[3].addEventListener("click", () => {
  addDiv("info", btn[3]);
});