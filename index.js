import { desktopDisplay, tabletDisplay, phoneDisplay } from "./animation/adjustiframe/Events.js";

desktopDisplay()

const icons = document.querySelectorAll(".bi-laptop, .bi-tablet, .bi-phone");
const displays = [desktopDisplay, tabletDisplay, phoneDisplay];

icons.forEach((icon, index) => {
  icon.addEventListener("click", (event) => {
    displays[index](event);
  });
});