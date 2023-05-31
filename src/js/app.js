import menuCardInfo from '../data/menu.json';
import pageCardTpl from '../templates/page-list.hbs';

const cardMarkUp = pageCardTpl(menuCardInfo);

const pageCardMarkUp = document.querySelector('.js-menu');

pageCardMarkUp.innerHTML = cardMarkUp;
