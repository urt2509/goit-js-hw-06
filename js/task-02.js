const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function foo() {
  let result = [];
  ingredients.map((ingredient) => {
    let li = document.createElement("li");
    li.classList.add("item");
    li.textContent = ingredient;

    result.push(li);
  });
  return result;
}
list.append(...foo());
