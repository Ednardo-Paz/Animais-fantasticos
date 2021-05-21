export default function initAnimeScroll() {
  const sections = document.querySelectorAll(`[data-anime="scroll"]`);
  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const sec = item.getBoundingClientRect().top;
        const isSectionVisible = sec - metadeTela < 0;
        if (isSectionVisible) {
          item.classList.add(`ativo`);
        } else if(item.classList.contains(`ativo`)){
          item.classList.remove(`ativo`);
        }
      });
    }
    animaScroll();

    window.addEventListener(`scroll`, animaScroll);
  }
}

