const changeFontSize = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

changeFontSize.addEventListener("input", (evt) => {
  span.style.fontSize = evt.currentTarget.valueAsNumber + "px";
});
