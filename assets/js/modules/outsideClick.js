export default function outsideClick(elemento, events, callback) {
    const html = document.documentElement;
    const outside = `data-outside`;
  
    if (!elemento.hasAttribute(outside)) {
      events.forEach((userEvent) => {
      html.addEventListener(userEvent, outsidehandleClick);
          
      })
      elemento.setAttribute(outside, ``);
    }
    function outsidehandleClick(e) {
      if (!elemento.contains(e.target)) {
        events.forEach((userEvent) => {
        html.removeEventListener(userEvent, outsidehandleClick);
              
          })
      elemento.removeAttribute(outside, ``);
  
        callback();
      }
    }
  }
  