function initTabNav() {
  const tabMenu = document.querySelectorAll(`[data-tab="menu"] li`);
  const tabContent = document.querySelectorAll(`[data-tab="content"] section`);

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(`ativo`);

    activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove(`ativo`);
      });
      console.log(tabContent[index].dataset.anime)
      const direcao = tabContent[index].dataset.anime
      tabContent[index].classList.add(`ativo`, direcao);
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
  const accordionList = document.querySelectorAll(`[data-anime="accordion"] dt`);
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

const linksInternos = document.querySelectorAll(`[data-menu="suave"] a[href^="#"] `);


