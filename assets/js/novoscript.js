import initAnimeScroll from "./modules/scroll-animacao.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initmodal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBiticoin from "./modules/fetch-biticoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initFetchAnimais();
initFuncionamento();
initMenuMobile();
initAnimeScroll();

initAccordion();
initTabNav();
initmodal();
initTooltip();
initDropDown();
initFetchBiticoin();
