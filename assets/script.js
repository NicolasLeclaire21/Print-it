const slides = [
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
	}
]

let currentIndex = 0;


const image = document.querySelector(".banner-img");
image.src = "assets/images/slideshow/" + slides[currentIndex].image;

const texte = document.querySelector(".banner-texte");
texte.innerHTML = slides[currentIndex].tagLine;



const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = 3;
	}
	image.src = "assets/images/slideshow/" + slides[currentIndex].image;
	texte.innerHTML = slides[currentIndex].tagLine;
	updateSelectedDot();
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	currentIndex++;
	if (currentIndex > 3) {
		currentIndex = 0;
	}
	image.src = "assets/images/slideshow/" + slides[currentIndex].image;
	texte.innerHTML = slides[currentIndex].tagLine;
	updateSelectedDot();
});



const dots = document.querySelector(".dots");

const nombreElements = slides.length;
for (let a = 0; a < slides.length; a++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (a === currentIndex) {
		dot.classList.add("dot_selected");
	} else {
	}
	dots.appendChild(dot);
}


function updateSelectedDot() {
    const dotElements = dots.querySelectorAll(".dot");
    dotElements.forEach(dot => {
        dot.classList.remove("dot_selected");
    });
    dotElements[currentIndex].classList.add("dot_selected");
}