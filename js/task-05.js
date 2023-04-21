const inputEl = document.querySelector("#name-input");
const titleContent = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if (inputEl.value.trim() === "") {
    titleContent.textContent = "Anonymous";
  } else {
    titleContent.textContent = inputEl.value;
  }
});
