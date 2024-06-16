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

function timeDelay(theDiv) {
  setTimeout(() => {
    if (theDiv.style.right === "300px") {
      theDiv.style.right = "1000px";
    } else if (theDiv.style.right === "1000px") {
      theDiv.style.right = "1600px";
    } else if (theDiv.style.right === "1600px") {
      theDiv.style.right = "300px";
    }
  }, "5000");
}

export { btnEvent, leftEvent, rightEvent, timeDelay };
