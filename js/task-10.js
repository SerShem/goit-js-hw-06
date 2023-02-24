const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const color = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    boxesContainer.append(box);

    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);