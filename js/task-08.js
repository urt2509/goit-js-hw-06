const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля форми!");
  } else {
    const user = {
      usermail: email.value,
      userpassword: password.value,
    };
    console.log(user);
    document.querySelector(".login-form").reset();
  }
}
