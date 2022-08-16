const themeSwitch = document.getElementById("theme-switch");
const body = document.getElementById("body");

themeSwitch.addEventListener("click", () => {
	let currentBodyClass = body.className;

	if (body.className === "light") {
		body.className = "dark";
	} else if (body.className === "dark") {
		body.className = "light";
	}
});
