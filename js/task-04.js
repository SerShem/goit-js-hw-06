let counterValue = 0;

const value = document.querySelector("#value");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const buttonClickDecrement  = (event) => {
  counterValue -= 1;
	value.textContent = counterValue;
};

const buttonClickIncrement = (event) => {
  counterValue += 1;
	value.textContent = counterValue;
};

buttonDecrement.addEventListener('click', buttonClickDecrement);
buttonIncrement.addEventListener('click', buttonClickIncrement);