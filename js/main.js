// Nav Bar Toggle

let toggleBtn = document.getElementById("toggle-btn");
let headerTitle = document.querySelector(".nav-title");
let body = document.getElementById("body");
let links = document.querySelectorAll(".side-bar-link");
let sideBar = document.getElementById("side-bar");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	toggleBtn.classList.toggle("toggled");

	if (
		sideBar.style.transform === "translateX(-200%)" ||
		sideBar.style.transform === ""
	) {
		headerTitle.style.color = "#c8c5ba";
		sideBar.style.transform = "translateX(0px)";
		body.style.overflowY = "hidden";
	} else {
		headerTitle.style.color = "#665b55";
		sideBar.style.transform = "translateX(-200%)";
		body.style.overflowY = "auto";
	}
}
links.forEach((link) =>
	link.addEventListener("click", () => {
		sideBar.style.transform = "translateX(-200%)";
		body.style.overflowY = "auto";
		toggleBtn.classList.toggle("toggled");
	})
);

// Carousel
const carouselContainer = document.querySelector(".carousel-container");
const reviews = document.querySelectorAll(".review");
let currentIndex = 0;

reviews[currentIndex].classList.add("active");

function moveCarousel() {
	reviews[currentIndex].classList.remove("active");
	currentIndex = (currentIndex + 1) % reviews.length;
	reviews[currentIndex].classList.add("active");
}

setInterval(moveCarousel, 5000);
