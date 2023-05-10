import { animToolsMoveToTop,animToolsMoveToDefault,setDefaultOpacityTagI,selectedButton } from "./Animations.js";
import { animOptionColor,animOptionColorToDefault } from "./HeroOption.js";
import { adjustIFrameSize } from "./Iframe.js";


const desktopDisplay = (event) => {
    adjustIFrameSize('100%')
    animToolsMoveToTop()
    setDefaultOpacityTagI()
    selectedButton(event)
    animOptionColorToDefault()
  }
  const tabletDisplay = (event) => {
    adjustIFrameSize('60%')
    animToolsMoveToDefault()
    setDefaultOpacityTagI()
    selectedButton(event)
    animOptionColor()
  }
  const phoneDisplay = (event) => {
    adjustIFrameSize('30%', true)
    animToolsMoveToDefault()
    setDefaultOpacityTagI()
    selectedButton(event)
    animOptionColor()
  }

export {desktopDisplay, tabletDisplay, phoneDisplay}