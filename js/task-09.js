function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function changeBodyColor() {
	const randomColor = getRandomHexColor();
	document.body.style.backgroundColor = randomColor;
	colorSpan.textContent = randomColor;
};

changeColorButton.addEventListener('click', changeBodyColor);