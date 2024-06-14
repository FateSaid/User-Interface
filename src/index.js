import "./style.css";
import Icon from "./building.jpg";
import Architect from "./architect.jpg";
import Architect2 from "./architect2.jpg";
import { btnEvent } from "./logic";

function Images(picture) {
  const content = document.querySelector(".content");
  const myPicture = new Image(100, 200);
  myPicture.src = picture;

  content.appendChild(myPicture);
}

function addPicture() {
  Images(Icon);
  Images(Architect);
  Images(Architect2);
}

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
addPicture();
eventHandlers();
