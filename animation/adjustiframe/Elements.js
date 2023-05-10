const doQu = (e) => document.querySelector(e)
const E = {
  iframe: doQu('iframe'),
  wrapperIframe: doQu('.wrapperIframe'),
  changeDisplay: doQu('.changeDisplay'),
heroOption: doQu('.hero_option'),
changeDisplayDivs: Array.from(document.querySelectorAll('.changeDisplay div')),
}

export default E