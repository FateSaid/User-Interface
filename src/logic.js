function btnEvent(hidden) {
  hidden.classList.toggle("show");
}

function rightEvent(theDiv) {
  const styles = getComputedStyle(theDiv);
  if (theDiv.style.right === "300px") {
    theDiv.style.left = "";
    theDiv.style.right = "1000px";
  } else if ((theDiv.style.right = "1000px")) {
    theDiv.style.right = "1600px";
  }
}

function leftEvent(theDiv) {
  if (theDiv.style.right === "1600px") {
    theDiv.style.right = "1000px";
  } else if (theDiv.style.right === "1000px") {
    theDiv.style.right = "300px";
  }
}

function firstPic(theDiv) {
  theDiv.style.right = "300px";
}

function secondPic(theDiv) {
  theDiv.style.right = "1000px";
}

function thirdPic(theDiv) {
  theDiv.style.right = "1600px";
}

function time(theDiv) {
  let count = 0;
  return function () {
    if (count === 0) {
      firstPic(theDiv);
    } else if (count === 1) {
      secondPic(theDiv);
    } else if (count === 2) {
      thirdPic(theDiv);
    }
    count++;
    if (count === 3) {
      count = 0;
    }
  };
}

export { btnEvent, leftEvent, rightEvent, time, firstPic, secondPic, thirdPic };
