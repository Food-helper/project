import { api } from "../components/Api.js";
import {
  ingridientInput,
  amountInput,
  ingridientSpan,
  addIngridients,
} from "../constants.js";

const query = ingridientInput.textContent;

api
  .search(query)
  .then((res) => {
    console.log(res);
    //создаем в контейнере с id result список ul с перечислением ингридиентов
    let ingridientsList = "<ul>";
    for (let i = 0; i < res.length; i++) {
      ingridientsList +=
        "<li class='input_ingridients-list'>" + res[i].title + "</li>";
    }
    document.getElementById("ingridient-result").innerHTML = ingridientsList;
    //для каждого элемента - если он не содержит значения инпута, то он скрывается классом hide
    //запускается при любом изменении инпута - так что если буква появилась - он появляется
    ingridientInput.oninput = function () {
      let val = this.value.trim(); //значение инпута без пробелов
      if (val != "") {
        res.forEach((elem) => {
          if (elem.innerText.search(val) == -1) {
            elem.classList.add("hide");
          } else {
            elem.classList.remove("hide");
            //меняет весовые значения
            ingridientSpan.textContent = res(
              elem.innerText.search(val)
            ).dimension;
          }
        });
      } else {
        res.forEach((elem) => {
          elem.classList.remove("hide");
        });
      }
      //это чтоб запомнить вводимое значение, тут я сомневаюсь
      ingridientInput.value = val;
    };
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
