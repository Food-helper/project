import {stars} from '../constants.js';
// import {api} from '../components/Api.js';
import {selectors} from '../selectors.js';

const handleClick = (evt) => {
  evt.target.classList.toggle(selectors.tooltip);
};

stars.forEach(star => {
  star.addEventListener('click', handleClick);
});