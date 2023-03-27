const bodyColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const container = document.querySelector("body");

const title = document.querySelector(".color");

const btn = document.querySelector(".change-color");

btn.addEventListener("click", onClick);

function onClick(evt) {
  container.style.backgroundColor = bodyColor();

  title.textContent = container.style.backgroundColor;
}
