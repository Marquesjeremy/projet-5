const slides =[
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

const arrowLeft = document.querySelector("#arrowLeft");
arrowLeft.addEventListener("click", () => {
	console.log("gauche");
})

const arrowRight = document.querySelector("#arrowRight");
arrowRight.addEventListener("click", () => {
	console.log("droite");
})

const dots = document.querySelector(".dots");
dots.addEventListener("click", () => {
	console.log("1");
})

let dot;
let index = 0;
let numberDot;
dots.classList.add("dots");

for (let i = 0; slides.length > i; i++) {
	dot = document.createElement("span");
	dots.append(dot);
	dot.classList.add("dot");
	dot.classList.add(i);
	numberDot = document.querySelectorAll(".dot");
}

numberDot[0].classList.add("dot_selected");
