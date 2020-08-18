import {
  api
} from "../components/Api.js";
import {
  ingridientInput,
  amountInput,
  ingridientSpan,
  addIngridients,
} from "../constants.js";
//import {stars} from "../constants";
let query = ingridientInput.textContent;
api
  .search(query)
  .then((res) => {
    console.log(res);
    const arr = res.map((item) => item.title);
    console.log(arr);
    const add = (evt) => { //при нажатии на кнопку меняет классы и блокирует ее
        ingridientInput.value = evt.target.textContent;
        document.getElementById("ingridient-result").classList.toggle('select_hidden');
        const index = arr.indexOf(ingridientInput.value);
        console.log(index);
        if (index !== -1) {
            ingridientSpan.textContent = res[index].dimension;
        }
      }
    //создаем в контейнере с id result список ul с перечислением ингридиентов
    let ingridientsList = "";
    for (let i = 0; i < res.length; i++) {
      ingridientsList +=
        "<li class='item'>" + res[i].title + "</li>";
      const item = document.querySelector('.item');
      // item.setAttribute('data-id', '2');
    }
    document.getElementById("ingridient-result").innerHTML = ingridientsList;
    //для каждого элемента - если он не содержит значения инпута, то он скрывается классом hide
    //запускается при любом изменении инпута - так что если буква появилась - он появляется
    let array = Object.values(document.querySelectorAll(".select li"));
    
    array.forEach(elem => {
      elem.addEventListener('mousedown', add);
    })
    ingridientInput.oninput = function () {
      let val = this.value.trim(); //значение инпута без пробелов
      if (val !== "") {
        array.forEach((elem) => {
          if (elem.innerHTML.toLowerCase().search(val) === -1) {
            elem.classList.add("hide");
          } else {
            elem.classList.remove("hide");
            //добавить класс этим элементам, искать по классу и навесить слушатели.
            elem.addEventListener('click', add);
          }
        });
      } else {
        array.forEach((elem) => {
          elem.classList.remove("hide");
        });
      };
    };

    document.addEventListener('blur', () => {
      document.getElementById("ingridient-result").classList.add('select_hidden');
    })
    ingridientInput.addEventListener('focus', () => {
      document.getElementById("ingridient-result").classList.remove('select_hidden');
    })


    amountInput.onblur = function () {
      amountInput.value = this.value;
    };
    addIngridients.addEventListener("click", () => {
      //  КОПИРУЕТ БЛОК ИНПУТС И ВСТАВЛЯЕТ В НИЗ БЛОКА ИНПУТ-БЛОКС (ДОБАВЛЯЕТ 2 ИНПУТА)
      // НАДО ТЕСТИРОВАТЬ!
      document
        .querySelector("#inputs")
        .cloneNode(true)
        .appendTo(document.querySelector(".input-block"));
    });
  })
  .catch((err) => {
    console.log(err);
  });