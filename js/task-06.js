const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  if (Number(inputRef.dataset.length) === event.currentTarget.value.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
