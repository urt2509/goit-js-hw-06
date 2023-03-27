const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onValidate);

function onValidate(evt) {
  evt.currentTarget.value.replace(/\s/g, "").length === 6
    ? inputText.classList.add("valid")
    : inputText.classList.add("invalid");
}
