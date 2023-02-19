const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);

ingredients.forEach((ingredientsItems) => {
	const ingredient = document.createElement(`li`);
	ingredient.textContent = ingredientsItems;
	ingredient.className = `item`;
	ingredientsList.appendChild(ingredient);
});

