import {
  api
} from "../components/Api.js";
import {
  stars,
  addButtons,
  buttonsSubscribe
} from '../constants.js';
import {
  selectors
} from '../selectors.js';

const purchase = document.querySelector('.add-button');
const id = purchase.getAttribute('data-id');
const subscribe = document.querySelector('.tooltip');
const subId = subscribe.getAttribute('data-id');


//тут манипуляции с кнопкой "Добавить в покупки"
const handleClickPurchase = (evt) => { //при нажатии на кнопку меняет классы и блокирует ее
  evt.target.classList.toggle(selectors.addButton);
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

api.getPurchasesInfo()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

addButtons.forEach(button => {
  button.addEventListener("click", (evt) => addPurchase(evt));
});

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

/*const handleClickSubscribe = (evt) => { //при нажатии на кнопку меняет классы и блокирует ее
  evt.target.classList.toggle(selectors.subscribe);
  evt.target.classList.toggle(selectors.subscribe);
  evt.target.disabled = true;
}*/
const handleAuthorClick = (evt) => {
  const id = evt.target.getAttribute('data-id');
  if (evt.target.classList.contains(selectors.unSubscribe)) {
    api.deleteNewAuthor(id)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })
    evt.target.classList.toggle(selectors.unSubscribe);
    evt.target.classList.toggle(selectors.subscribe);
    evt.target.innerHTML =  "Подписаться на автора";
  } else {
    api.addNewAuthor(id)
        .then((res) => {
          console.log(res)
        })

        .catch((err) => {
          console.log(err);
        })
    evt.target.classList.toggle(selectors.subscribe);
    evt.target.classList.toggle(selectors.unSubscribe);
    evt.target.innerHTML =  "Отписаться от автора";}



}



/*
function addAuthor(evt) {
  const id = evt.target.getAttribute('data-id');
  api.addNewAuthor(id)
      .then((res) => {
        console.log(res);
        evt.target.disabled = true;
      })
      .catch((err) => {
        console.log(err);
      })
  evt.target.classList.toggle(selectors.subscribe);
  evt.target.classList.toggle(selectors.unSubscribe);
  evt.target.innerHTML =  "Отписаться от автора";


}*/


stars.forEach(star => {
  star.addEventListener('click', handleClick);
})
buttonsSubscribe.forEach(buttonSubscribe => {
  buttonSubscribe.addEventListener('click', handleAuthorClick)
})