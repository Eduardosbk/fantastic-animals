import SmoothScroll from './modules/smooth-scroll.js';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import fetchAnimals from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

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

const animaScroll = new ScrollAnima('[data-anima="scroll"]');
animaScroll.init();

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

fetchAnimals('../../../animaisapi.json', '.numbers-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-price');

initOperation();