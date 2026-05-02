/* ================= GO TO TOP ================= */

const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
	if (window.scrollY > 400) {
		goTopBtn.classList.add("show");
	} else {
		goTopBtn.classList.remove("show");
	}
});

goTopBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
