import SmoothScroll from './modules/smooth-scroll.js';
import initTabNav from './modules/tabnav.js';
import Accordion from './modules/accordion.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/animation-scroll.js';

const smoothscroll = new SmoothScroll('[data-menu="smooth"]');
smoothscroll.init();

const accordion = new Accordion('[data-set="accordion"] dt');
accordion.init();



initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimais();
initFetchBitcoin();
initAnimationScroll();