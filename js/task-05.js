const inputEl = document.querySelector("#name-input");
const titleContent = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() === "") {
    titleContent.textContent = "Anonymous";
  } else {
    titleContent.textContent = event.currentTarget.value;
  }
}
