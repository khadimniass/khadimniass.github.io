const Containtslides = document.querySelector(".slides"); //track
// const slides = Array.from(Containtslides.children);
const slides = document.querySelectorAll("li");
const btnNavigLef = document.querySelector(".carousel-left");
const btnNavigRight = document.querySelector(".caroussel-right");
const caroussel_nav = document.querySelector(".caroussel_nav"); //dotsNav
const btnNavBottom = document.querySelectorAll(".caroussel-navigator");
// btnNavBottom = dots
//je peux prendre n'importe le quel car je l'ai donné des même width
const widthSlide = slides[0].getBoundingClientRect().width;

//mettre les slides les uns apres les autre
const setSlidePosition = (slide, i) => {
  slide.style.left = widthSlide * i + "px";
};
slides.forEach(setSlidePosition);

// slides.forEach((slide, i) =>{
//     slide.style.left = widthSlide * i + 'px';
// });

function moveToslide(slideCourant, SlideToMove) {
  const toMove = SlideToMove.style.left;
  Containtslides.style.transform = "translateX(-" + toMove + ")";
  slideCourant.classList.remove("current-slide");
  SlideToMove.classList.add("current-slide");
}
function updateBtn(currentDot, targetDot) {
    currentDot.classList.remove('carousel-current');
    targetDot.classList.add('carousel-current');
}
btnNavigRight.addEventListener("click", () => {
  // const slideCourant = Containtslides.querySelector('.current-slide'); /* ajouter en html */
  const slideCourant = document.querySelector(".current-slide"); /* ajouter en html */
  const nextSlide = slideCourant.nextElementSibling;
  //effacer slide suivant
  moveToslide(slideCourant, nextSlide);
});
btnNavigLef.addEventListener('click',()=>{
    const slideCourant = document.querySelector(".current-slide"); /* ajouter en html */
  const previousSlide = slideCourant.previousElementSibling;
  //effacer slide suivant
  moveToslide(slideCourant, previousSlide);
});

caroussel_nav.addEventListener('click', e=>{
    // const targetDot=e.target;
    const targetDot=e.target.closest('button');
    if (!targetDot) return;

    const slideCourant = Containtslides.querySelector(".current-slide");
    const buttonCourant = Containtslidesgit .querySelector(".current-slide");
    
    btnNavBottom.forEach((elm, index)=>{
        if(elm==targetDot){
            indexTarget=index;
        }
    });
    const targetSlide=slides[indexTarget];
    moveToslide(slideCourant,targetSlide);

    // updateBtn(buttonCourant,slideCourant);
});