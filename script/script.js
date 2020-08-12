
import {Api} from "components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz/',

};
console.log('a');
export const api = new Api();

api.getCardsInfo();

/*const menuToggle = document.querySelector('.header__menu-toggle');
menuToggle.onclick = function (e) {
  if (menuToggle.checked) {
    menuToggle.setAttribute('aria-pressed', 'true');
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    menuToggle.setAttribute('aria-pressed', false);
    menuToggle.setAttribute('aria-expanded', false);
  }
}*/

