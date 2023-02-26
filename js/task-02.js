const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);
const ingredientsHtml = ingredients
	.map((e) => `<Li class="item">${e}</Li>`)
	.join('');

	ingredientsList.innerHTML = ingredientsHtml;
	