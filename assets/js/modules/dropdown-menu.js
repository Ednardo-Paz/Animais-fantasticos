import outsideClick from "./outsideClick.js";

export default function initDropDown() {}

  const dropdown = document.querySelectorAll(`[data-dropdown]`);

  dropdown.forEach((menu) => {
    [`touchstart`, `click`].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add(`active`);
    outsideClick(this, [`touchstart`, `click`], () => {
      this.classList.remove(`active`);
    });
}
