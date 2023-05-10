import E from "./Elements.js";

const addClass = (element, classList) => element.classList.add(...classList);
const removeClass = (element, classList) => element.classList.remove(...classList);
const animOptionColor = () => {
  E.heroOption.style.top = '300px'
  E.heroOption.style.width = '18%'
  const dQ = (e) => document.querySelector(e)
  const changeRow = dQ('.row-cols-3')
  changeRow ? changeRow.classList.remove('row-cols-3') : false
  changeRow ? changeRow.classList.add('row-cols-2') : false
  addClass(E.heroOption, ['position-absolute'])
};
const animOptionColorToDefault = async () => {
  E.heroOption.style.top = null
  E.heroOption.style.width = null
  const changeRow = await document.querySelector('.row-cols-2')
  changeRow ? changeRow.classList.remove('row-cols-2') : false
  changeRow ? changeRow.classList.add('row-cols-3') : false
  removeClass(E.heroOption, ['position-absolute'])
};

export { animOptionColor, animOptionColorToDefault }