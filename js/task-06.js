const inputRef = document.querySelector("#validation-input");
const inputDataLength = inputRef.getAttribute("data-length");
const inputDataLengthNumber = parseInt(inputDataLength);

inputRef.addEventListener("input", () => {});
inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length >= inputDataLengthNumber) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
