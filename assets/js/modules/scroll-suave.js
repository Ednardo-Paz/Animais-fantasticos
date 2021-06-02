export default function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute(`href`);
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: `smooth`,
      block: `start`,
    });

    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: `smooth`,
    });
  }
  const linksInternos = document.querySelectorAll(
    `[data-menu="suave"] a[href^="#"] `,
  );
  linksInternos.forEach((links) => {
    links.addEventListener(`click`, scrollToSection);
  });
}
