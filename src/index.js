import "./style.css";
import Icon from "./building.jpg";
import { btnEvent, bodyEvent } from "./logic";

const myIcon = new Image();
myIcon.src = Icon;
const content = document.querySelector(".content");
content.appendChild(myIcon);

function eventHandlers() {
  const hiddenMenu = document.querySelector(".hidden-container");
  const menuBtn = document.querySelector(".menu-button");
  menuBtn.addEventListener("click", (e) => {
    btnEvent(hiddenMenu);
    e.stopPropagation();
  });
  document.body.addEventListener("click", () => {
    if (hiddenMenu.classList.contains("show")) {
      hiddenMenu.classList.remove("show");
    }
  });
}

eventHandlers();
