const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
  }

  const valueForm = {
    email: email.value,
    password: password.value,
  };
  console.log(valueForm);

  formRef.reset();
}
