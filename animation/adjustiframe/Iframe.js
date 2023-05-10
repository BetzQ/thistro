import E from "./Elements.js";

const adjustIFrameSize = (width, phone) => {
  const I = E ? E.iframe.style : false
  I.width = width
  I.height = phone ? '790px' : '500px'
  E.wrapperIframe.style.marginTop = width === '100%' ? '52px' : null
}

export { adjustIFrameSize }