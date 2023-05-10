import E from "./Elements.js";

const addClass = (element, classList) => element.classList.add(...classList);
const removeClass = (element, classList) => element.classList.remove(...classList);

const animToolsMoveToTop = (_) => {
  const CDV = E.changeDisplayDivs
  const CD = E.changeDisplay
  const CS = (i) => i || i == 0 ? CDV[i].style : CD.style;
  CDV.forEach((div) => (div.style.marginRight = '20px'));
  CS(0).marginTop = '-1px';
  CS(1).marginTop = '-5px';
  CS(2).marginTop = '0px';
  CS().left = '41%'
  addClass(CD, ['d-lg-flex', 'd-md-flex']);
  removeClass(CD, ['d-lg-block', 'd-md-block', 'py-2']);
};

const animToolsMoveToDefault = (_) => {
  const CDV = E.changeDisplayDivs
  const CD = E.changeDisplay
  CDV.forEach((div) => (div.style.marginRight = '0px'));
  const CS = (i) => i || i == 0 ? CDV[i].style : CD.style;
  CS(0).marginTop = '5px';
  CS(1).marginTop = '5px';
  CS(2).marginTop = '5px';
  CS().left = null
  addClass(CD, ['d-lg-block', 'd-md-block', 'py-2']);
  removeClass(CD, ['d-lg-flex', 'd-md-flex']);
};

const setDefaultOpacityTagI = (_) => {
  E.changeDisplayDivs.forEach((div) => (div.querySelector('i').style.opacity = null));
};

const selectedButton = (event) => {
  const arrayDiv = E.changeDisplayDivs
  event
    ? (event.target.style.opacity = '1')
    : (arrayDiv[0].querySelector('i').style.opacity = '1')
}

export { animToolsMoveToTop, animToolsMoveToDefault, setDefaultOpacityTagI, selectedButton }