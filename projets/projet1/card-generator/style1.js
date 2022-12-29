//initiatlisation
const btnajouter = document.querySelector("#ajouter");
const sorti = document.querySelector(".textarea-items");

function createur() {
    const i1 = document.createElement('i');
    i1.id="edit";
    i1.innerHTML="<img src='imgs/edit1.png' id='edit' width='20'/>";

    const i2 = document.createElement('i');
    i2.id="edit"; 
    i2.innerHTML="<img width='15' src='imgs/corbeille.png' id='corbeille' id='corbeille'/>";

    const mydivh = document.createElement("div");
    mydivh.className = "header";
    mydivh.appendChild(i1);
    mydivh.appendChild(i2);
    
    const mytextarea = document.createElement("textarea");
    mytextarea.rows = "10"

    const grandiv = document.createElement("div"); //iem
    grandiv.className = "header-area";
    grandiv.appendChild(mydivh);
    grandiv.appendChild(mytextarea);
    sorti.appendChild(grandiv);

    i1.addEventListener('click',function(){
        mytextarea.toggleAttribute("disabled");
        mytextarea.focus();
    });
    i2.addEventListener('click',function(){
        grandiv.parentNode.removeChild(grandiv);
    });

}
btnajouter.addEventListener('click',function(){
    createur();
});