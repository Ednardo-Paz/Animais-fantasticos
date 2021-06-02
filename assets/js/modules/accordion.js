export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    `[data-anime="accordion"] dt`,
  );
  const active = `ativo`;
  accordionList[0].classList.add(active);
  accordionList[0].nextElementSibling.classList.add(active);
  function activeAccordion() {
    this.classList.toggle(active);
    this.nextElementSibling.classList.toggle(active);
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener(`click`, activeAccordion);
    });
  }
}
