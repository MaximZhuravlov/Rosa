const selectElement = function(element) {
	return document.querySelector(element);
};

let body = selectElement("body");
let menuToggler = selectElement(".menu-toggle");
menuToggler.addEventListener("click", function() {
	body.classList.toggle("open");
});

/* prevent all animations and transitions from appearing on window resizing */
let resizeTimer;
window.addEventListener("resize", function() {
	 document.body.classList.add("resize-animation-transition-stopper");
	 clearTimeout(resizeTimer);
	 resizeTimer = setTimeout(function() {
	 	document.body.classList.remove("resize-animation-transition-stopper");
	 }, 400);
});

// Scroll reveal
ScrollReveal().reveal(".animate-left", {
	origin: "left",
	duration: 1000,
	distance: "25rem",
	delay: 300
});

ScrollReveal().reveal(".animate-right", {
	origin: "right",
	duration: 1000,
	distance: "25rem",
	delay: 300
});

ScrollReveal().reveal(".animate-top", {
	origin: "top",
	duration: 1000,
	distance: "25rem",
	delay: 600
});

ScrollReveal().reveal(".animate-bottom", {
	origin: "bottom",
	duration: 1000,
	distance: "25rem",
	delay: 600
});

ScrollReveal().reveal(".sub-headline", {
	opacity: 0,
	duration: 1000,
	delay: 600
});