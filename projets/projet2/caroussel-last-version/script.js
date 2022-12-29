const containtSlider = document.getElementById("containerSecond");
let Caroussel = function ([...image]) {
	let i =0;
	this.tableauImage = [...image];

	this.createurImage = function(){
	const image = document.createElement("img");
    image.src = this.tableauImage[0];
    image.id = "idimage";
    containtSlider.appendChild(image);
	}
	
	this.navigationLeftRight = function(){
		const buttonD = document.getElementById("arrowD");
		buttonD.addEventListener("click", ()=> {
		const idimage = document.getElementById("idimage");
			if (i < this.tableauImage.length-1) {
				i++;
       	}else {
       	i = 0;
       	}
       	idimage.src = this.tableauImage[i];
	});
		const buttonG = document.getElementById('arrowG');
   		buttonG.addEventListener("click", ()=> {
   		const idimage = document.getElementById("idimage");
	       i--;
	       idimage.src = this.tableauImage[i];
           idimage.alt= this.tableauImage[i];
	       if (i < 0) {
	       i = this.tableauImage.length - 1;
           idimage.src = this.tableauImage[i];
           idimage.alt= this.tableauImage[i];
       	   }
   		});
	}
}
// setInterval(() => {
let ImagesFoods = new Caroussel (["img/foods/food1.jpg","img/foods/food2.jpg", "img/foods/food3.jpg","img/foods/food4.PNG","img/foods/food5.jpg","img/foods/food5.jpg","img/foods/food6.jpg",
	"img/foods/food7.jpg","img/foods/food8.jpg","img/foods/food9.jpg","img/foods/food10.jpg","img/foods/food12.jpg","img/foods/food13.PNG","img/foods/food14.PNG"]);
	ImagesFoods.createurImage();
	ImagesFoods.navigationLeftRight();
// }, 1000);