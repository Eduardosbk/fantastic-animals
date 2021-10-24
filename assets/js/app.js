import SmoothScroll from './modules/smooth-scroll.js';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import fetchAnimals from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/animation-scroll.js';

const smoothscroll = new SmoothScroll('[data-menu="smooth"]');
smoothscroll.init();

const accordion = new Accordion('[data-set="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="active"]', '[data-modal="close"]', '.modal-container');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimals('../../../animaisapi.json', '.numbers-grid');
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchBitcoin();
initAnimationScroll();