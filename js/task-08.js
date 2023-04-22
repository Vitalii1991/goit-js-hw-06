const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector('input[type="email"]');
const inputPasswordRef = document.querySelector('input[type="password"]');

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (inputEmailRef.value === "" || inputPasswordRef.value === "") {
    alert("Все поля должны быть заполнены!");
  }

  const elements = event.currentTarget;

  const valueForm = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(valueForm);

  elements.reset();
}
