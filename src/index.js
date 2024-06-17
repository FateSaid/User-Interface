import "./style.css";
import Icon from "./building.jpg";
import Architect from "./architect.jpg";
import Architect2 from "./architect2.jpg";
import {
  btnEvent,
  firstPic,
  leftEvent,
  rightEvent,
  secondPic,
  thirdPic,
  time,
} from "./logic";

const timeDelay = time(document.querySelector(".content"));
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
  const content = document.querySelector(".content");
  const hiddenMenu = document.querySelector(".hidden-container");
  const menuBtn = document.querySelector(".menu-button");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");
  const circleOne = document.getElementById("circle-one");
  const circleTwo = document.getElementById("circle-two");
  const circleThree = document.getElementById("circle-three");
  menuBtn.addEventListener("click", (e) => {
    btnEvent(hiddenMenu);
    e.stopPropagation();
  });
  document.body.addEventListener("click", () => {
    if (hiddenMenu.classList.contains("show")) {
      hiddenMenu.classList.remove("show");
    }
  });

  leftBtn.addEventListener("click", () => {
    leftEvent(content);
  });

  rightBtn.addEventListener("click", () => {
    rightEvent(content);
  });

  circleOne.addEventListener("click", () => {
    firstPic(content);
  });

  circleTwo.addEventListener("click", () => {
    secondPic(content);
  });

  circleThree.addEventListener("click", () => {
    thirdPic(content);
  });
}
addPicture();

setInterval(() => {
  timeDelay();
}, "5000");
eventHandlers();
