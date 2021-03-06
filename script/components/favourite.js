import {
	api
} from "../components/Api.js";
import {
	stars,
	addButtonsFavourites
} from '../constants.js';
import {
	selectors
} from '../selectors.js';
//здесь все прекрасно работает, не трогать без необходимости!
//тут манипуляции со звездой
//если кнопка активна - запрос на удаление, если пассивна - запрос на добавление

const handleClick = (evt) => {
	const subId = evt.target.getAttribute('data-id');
	if (evt.target.classList.contains(selectors.tooltip)) {
		api.deleteNewFavourite(subId)
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err);
	});
	} else {
		api.addNewFavourite(subId)
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err);
		})
	};
	evt.target.classList.toggle(selectors.tooltip);
}

stars.forEach(star => {
	star.addEventListener('click', handleClick);
})

//тут манипуляции с кнопкой "Добавить в покупки"
const handleClickPurchase = (evt) => {
  evt.target.classList.toggle(selectors.addButtonFavourite);
  evt.target.classList.toggle(selectors.addButtonActive);
  evt.target.disabled = true;
}

function addPurchase(evt) {
  const id = evt.target.getAttribute('data-id');
  api.addNewPurchase(id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    handleClickPurchase(evt);
	evt.target.innerHTML =  "Рецепт добавлен";
}

addButtonsFavourites.forEach(button => {
  button.addEventListener("click", (evt) => addPurchase(evt));
});