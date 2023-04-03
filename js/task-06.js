const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onValidate);
console.dir(inputText);

// function onValidate(evt) {
//   evt.currentTarget.value.trim().length === 6
//     ? inputText.classList.toggle("valid")
//     : inputText.classList.toggle("invalid");
// }

// ---------------regular expression without whitespaces etc.
// function onValidate(evt) {
//   evt.currentTarget.value.replace(/\s/g, "").length === 6
//     ? inputText.classList.add("valid")
//     : inputText.classList.add("invalid");
// }

function onValidate(evt) {
  const expectedLength = inputText.dataset.length;
  console.log(expectedLength);
  console.log(typeof expectedLength);

  const inputLength = evt.currentTarget.value.trim().length;
  console.log("inputed length is " + inputLength);

  if (inputLength === Number(expectedLength)) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
    // console.dirinput("inputed text if invalid: " + inputText.classList);
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
    // console.dir("inputed text: " + inputText.classList);
  }
}
