const images = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
];

/* const galleryList = document.querySelector(`.gallery`);

images.forEach((image) => {

	const galleryItem = document.createElement(`li`);
	const imageItem = document.createElement(`img`);
	imageItem.src = image.url;
	imageItem.alt =image.alt;
	galleryItem.appendChild(imageItem);
	galleryList.appendChild(galleryItem);
	
}); */
 
//-----------var with insertAdjacentHTML().

const galleryList = document.querySelector(`.gallery`);

	const galleryElemets = images
		.map((image) => `<li><img src='${image.url} alt='${image.alt}'></img></li>`)
		.join("");
	galleryList.insertAdjacentHTML("beforebegin",galleryElemets);

