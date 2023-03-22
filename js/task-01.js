const listOfCategories = document.querySelector("#categories");
const numberOfItems = [...listOfCategories.children].length;
console.log(`Number of categories: ${numberOfItems}`);

const result = [...listOfCategories.children].forEach((item) => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);

  console.dir(`Elements: ${item.lastElementChild.children.length}`);
});
