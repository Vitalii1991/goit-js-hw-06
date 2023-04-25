const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

spanTextRef.style.fontSize = spanTextRef.value + "px";

inputRef.addEventListener("input", (event) => {
  spanTextRef.style.fontSize = event.currentTarget.value + "px";
});
