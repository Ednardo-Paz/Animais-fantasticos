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
  const active = `ativo`
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
