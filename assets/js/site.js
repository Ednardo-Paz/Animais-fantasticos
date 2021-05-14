function initTabNav() {
  const tabMenu = document.querySelectorAll(`.js-tabmenu li`);
  const tabContent = document.querySelectorAll(`.js-tabcontent section`);

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(`ativo`);

    activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove(`ativo`);
      });
      tabContent[index].classList.add(`ativo`);
    };

    tabMenu.forEach((click, index) => {
      click.addEventListener(`click`, () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(`.js-accordion dt`);
  const active = `ativo`;
  accordionList[0].classList.add(active);
  accordionList[0].nextElementSibling.classList.add(active);
  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }

    accordionList.forEach((item) => {
      item.addEventListener(`click`, activeAccordion);
    });
  }
}
initAccordion();

const linksInternos = document.querySelectorAll(`.js-menu a[href^="#"] `);
function initScrollSuave() {
  scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute(`href`);
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: `smooth`,
      block: `start`,
    });

    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: `smooth`
    // })
  };

  linksInternos.forEach((links) => {
    links.addEventListener(`click`, scrollToSection);
  });
}
initScrollSuave();

function initAnimeScroll() {
  const sections = document.querySelectorAll(`.js-scroll`);
  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const sec = item.getBoundingClientRect().top;
        const isSectionVisible = sec - metadeTela < 0;
        if (isSectionVisible) {
          item.classList.add(`ativo`);
        } else 
          item.classList.remove(`ativo`);
        
      });
    }
    animaScroll();

    window.addEventListener(`scroll`, animaScroll);
  }
}
initAnimeScroll();
