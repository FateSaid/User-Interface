function btnEvent(hidden) {
  hidden.classList.toggle("show");
}

function bodyEvent(hide) {
  hide.remove("show");
}

export { btnEvent, bodyEvent };
