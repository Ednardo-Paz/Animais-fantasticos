// const animais = document.querySelector(`.animais`);

// const gridSection = document.getElementsByClassName(`grid-section`);
// console.log(gridSection[2])

// const primeiraLi = document.querySelector(`li`)
// console.log(primeiraLi)

// const primeiraUl = document.querySelector(`ul`)
// console.log(primeiraUl)

// const linhsInternos = document.querySelector(`[href^="#"]`);
// console.log(linhsInternos)

// const animaisImg = document.querySelectorAll(`.animais img`)
// console.log ( animaisImg)

// const gridSectionHtml = document.getElementsByClassName(`grid-section`)
// console.log(gridSectionHtml)

// const gridSectionNode = document.querySelectorAll(`.grid-section`)
// console.log( gridSectionNode)

// -------------forEach e arrow functions

// const paragrafo = document.querySelectorAll(`p`)
// paragrafo.forEach((item) => {
//     console.log(item.innerText)
// })
// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
//const imgs = document.querySelectorAll('img');
//  imgs.forEach((item, index) => {
//  console.log(item, index)
//  })
//   let i = 0;
//  imgs.forEach(( ) => {
// console.log(i++)
//  });
// imgs.forEach(() => i++);

//---------------------classes e atributos-----------------------
// const menu = document.querySelector(`.menu`)
// menu.classList.add(`ativo`);
// console.log(menu)
//  const animais = document.querySelector(`.animais`);

//  console.log(animais.attributes.class)

//  const img = document.querySelector(`img`)

//  const imgSorse = img.getAttribute(`src`)

//  const imgSorse1 = img.setAttribute(`alt`, `é uma raposa`)

// console.log(imgSorse)

// Adicione a classe ativo a todos os itens do menu
// const menu = document.querySelectorAll(`.menu a`);
// menu.forEach((item) => {
//     item.setAttribute(`class`, `ativo`)
// })
// menu.forEach((item) => {
//     item.classList.remove(`class`, `ativo`)
// })
// menu[0].classList.add(`ativo`)
// console.log(menu)
// Remove a classe ativo de todos os itens do menu e mantenha ape
// Verifique se as imagens possuem o atributo alt
// Modifique o href do link externo no menu

//-------------------------Dimensões e distäncias
// const listaAnimais = document.querySelector(`.animais-lista`);

// console.log(listaAnimais.scrollHeight)

// const animaisTop = listaAnimais.offsetTop

// const raposa = document.querySelector(`h2`);
//  const h2left = raposa.offsetLeft
//  console.log(h2left)

//  const rect = raposa.getBoundingClientRect()
//  console.log(rect)

//  const small = window.matchMedia(`(max-width: 600px)`)
//  console.log(small)

// Verifique a distância da primeira imagem
// const img = document.querySelector(`img`);
// console.log(img.offsetTop);
// em relação ao topo da página
// Retorne a soma da largura de todas as imagens
// const imgs = document.querySelectorAll(`img`);

// function somaImagens() {
//   soma = 0;
//   imgs.forEach((item) => {
//     soma += item.offsetWidth;

//   });
//   console.log(soma)
// }

// window.onload = () => {
//   somaImagens();
// };
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// const menu = document.querySelectorAll(`a`);

// menu.forEach((a) => {
//     const linkWidth = a.offsetWidth;
//     const linkHeigth = a.offsetHeight;
//     if(linkHeigth <= 47 || linkWidth <= 47) {
//        console.log(`não possui acessibilidade`)
//     } else {
//         console.log (`possui acessibilidade`)
//     }

// })

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
// const menu1 = document.querySelector(`.menu`);
// const menuMobile = window.matchMedia(`(max-width: 720px)`);

// if (menuMobile.matches) {
//   menu1.classList.add(`menu-mobile`);
// } else {
//   `tela maior que 720px`;
// }
// console.log(menuMobile);

// ------------------------Eventos---------------------

// const img = document.querySelector(`img`);

// img.addEventListener(`click`, clicou);

// function clicou(event) {
//     console.log(event)
// }

// const animaisLista = document.querySelector(`.animais-lista`);

// animaisLista.addEventListener(`click`, callbackLista);

// function callbackLista (e) {
//     console.log (e.currentTarget)
// }

// console.log(animaisLista)

// const linkExterno = document.querySelector(`a[href^="https"]`)

// function teste(e){
//     e.preventDefault();

//     console.log(this)
//     console.log(e.currentTarget)
//     console.log(e.target)

// }

// linkExterno.addEventListener(`click`, teste)

// const h1 = document.querySelector(`h1`)

// function handleEvent(e){
//     console.log(e.type, e)
// }

// h1.addEventListener(`click`, handleEvent)
// h1.addEventListener(`mouseenter`, handleEvent)
// h1.addEventListener(`mousemove`, handleEvent)

// window.addEventListener(`scroll`, handleEvent)
// window.addEventListener(`resize`, handleEvent)
// const footer = document.querySelector(`footer`)

// function handleKeyborad(e){
//     if(e.key === `a`) {
//         document.body.classList.toggle(`azul`)
//     }else if(e.key === `b`)
//     footer.classList.toggle(`red`)
// }

// window.addEventListener(`keydown`, handleKeyborad)

//==========exercícios=================

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const linkInterno = document.querySelectorAll(`a`);

// function linksClicados(e) {
//   e.preventDefault();

//   linkInterno.forEach((link) => {
//     link.classList.remove(`ativo`);
//   });
// e.currentTarget.classList.add(`ativo`)
 

// }

// linkInterno.forEach((item) => {
//   item.addEventListener(`click`, linksClicados);
//   console.log(item);
// });

// Selecione todos os elementos do site começando a partir do
//body,
// const body = document.querySelectorAll(`body *`);
// console.log(body);
// ao clique mostre exatamente quais elementos estão sendo
//clicados

// function mostrarElem(e){
//    console.log( e.target.remove())
// }

// body.forEach(function(item){
//     item.addEventListener(`click`, mostrarElem)
// })
// Utilizando o código anterior, ao invés de mostrar no
//console,
// remova o elemento que está sendo clicado, o método remove()
//remove um elemento
// Se o usuário clicar na tecla (t), aumente todo o texto do
//site.
// function presT(e){
//     if(e.key === `t`){
//         body.classList.toggle(`texth1`)
//     }
// }

// window.addEventListener(`keydown`, presT)

//---------------------------------------- Traversing e Manipulação 1----------------------------------
// const h1 = document.querySelector(`h1`);
// const animaisLista = document.querySelector(`.animais-descricao`);

// console.log(h1.outerHTML)
// console.log(h1.innerHTML)
// console.log(h1.innerText)

// const lista = document.querySelector(`.animais-lista`);
// console.log(lista.parentElement)
// console.log(lista.nextElementSibling)
// console.log(lista.previousElementSibling)

// const animais = document.querySelector(`.animais`);
// const contato = document.querySelector(`.contato`);


// const mapa = document.querySelector(`.mapa`);

// // contato.insertBefore(animais,mapa)

// const novoH1 = document.createElement(`h1`)

// novoH1.classList.add(`titulo`)

// mapa.appendChild(novoH1)
// novoH1.innerHTML = `Novo titulo`

// duplique o menu e o mova para copy
// const copy = document.querySelector(`.copy`)
// const menu = document.querySelector(`.menu`);

// const menuclone = menu.cloneNode(true);

// copy.appendChild(menuclone)

// // selecione o primeiro dt da dl de faq
// const faq = document.querySelector(`.faq`)
// const primeiroDt = document.querySelector(`dt`)

// const primeiroDD = primeiroDt.nextElementSibling

// console.log(primeiroDD)

// //substitua o HTML de faq pelo de animais
// const animais = document.querySelector(`.animais`);

// menu.innerHTML = animais.innerHTML





