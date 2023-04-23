function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divBoxe = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const amount = parseInt(inputRef.value);
  createBoxes(amount);
});

buttonDestroy.addEventListener("click", () => {
  divBoxe.innerHTML = "";
});

function createBoxes(amount) {
  let sizeDiv = 30;

  for (let i = 0; i < amount; i++) {
    const newDivCollection = document.createElement("div");

    newDivCollection.style.width = sizeDiv + "px";
    newDivCollection.style.height = sizeDiv + "px";
    newDivCollection.style.backgroundColor = getRandomHexColor();

    divBoxe.appendChild(newDivCollection);
    sizeDiv += 10;
  }
}
