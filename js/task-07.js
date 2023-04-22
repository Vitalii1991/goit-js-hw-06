const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

inputRef.addEventListener("change", onChangeFontSize);

function onChangeFontSize(event) {
  const inputRefValue = event.currentTarget.value;
  const inputRefValueNumber = parseInt(inputRefValue);

  spanTextRef.style.fontSize = inputRefValueNumber + "px";
}
