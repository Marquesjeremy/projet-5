const slides =[
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

const arrowRight = document.querySelector("#arrowRight");
const arrowLeft = document.querySelector("#arrowLeft");
const dots = document.querySelector(".dots")
const banner = document.querySelector("#banner");

const bannerP = document.createElement("p");{
	banner.append(bannerP)
    bannerP.classList.add("banner-p");
    bannerP.id = "bannerP";
    bannerP.innerHTML = slides[0].tagLine;
}
const bannerImg = document.createElement("img");{
	banner.append(bannerImg)
	bannerImg.classList.add("banner-img");
	bannerImg.id = "bannerImg";
	bannerImg.src = `./assets/images/slideshow/${slides[0].image}`;
}

let index = 0;
let numberDot;

for (let i = 0; slides.length > i; i++) {
	let dot = document.createElement("span");
	dots.appendChild(dot);
	dots.classList.add("dots");
	dot.classList.add("dot");
	numberDot = document.querySelectorAll(".dot");
	numberDot[0].classList.add("dot_selected");
}

arrowLeft.addEventListener("click", () => {
	numberDot[index].classList.remove("dot_selected");
	if (index === 0) {
		index = 4;
		index --;
		numberDot[index].classList.add("dot_selected");
	} else {
		index--;
		numberDot[index].classList.add("dot_selected");
	}
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerP.innerHTML = slides[index].tagLine;
	console.log("fleche gauche");
});

arrowRight.addEventListener("click", () => {
	numberDot[index].classList.remove("dot_selected");
	index++;
	if (index === 4) {
		index = 0;
	}
	numberDot[index].classList.add("dot_selected");
	bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
	bannerP.innerHTML = slides[index].tagLine;
	console.log("fleche droite");
});
