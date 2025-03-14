// Nav Bar Toggle

let toggleBtn = document.getElementById("toggleBtn");
let headerTitle = document.querySelector(".nav-title");
let body = document.getElementById("body");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	this.classList.toggle("toggled");

	let links = document.getElementById("side-bar");
	if (
		links.style.transform === "translateX(-200%)" ||
		links.style.transform === ""
	) {
		headerTitle.style.color = "#c8c5ba";
		links.style.transform = "translateX(0px)";
		body.style.overflowY = "hidden";
	} else {
		headerTitle.style.color = "#665b55";
		links.style.transform = "translateX(-200%)";
		body.style.overflowY = "scroll";
	}
}
