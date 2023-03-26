const btnDecrement = document.querySelector('[data-action = "decrement"]');
const btnIncrement = document.querySelector('[data-action= "increment"]');

const result = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", decreaseCounter);

btnIncrement.addEventListener("click", increaseCounter);

function decreaseCounter(evt) {
  counterValue -= 1;
  result.textContent = counterValue;
}

function increaseCounter(evt) {
  counterValue += 1;
  result.textContent = counterValue;
}
