function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('input[type="number"]'),
  buttonCreateEl: document.querySelector("button[data-create]"),
  buttonDestroyEl: document.querySelector("button[data-destroy]"),
  divBoxeEl: document.querySelector("#boxes"),
};

refs.buttonCreateEl.addEventListener("click", () => {
  const amount = parseInt(refs.inputEl.value);
  if (
    amount >= Number(refs.inputEl.min) &&
    amount <= Number(refs.inputEl.max)
  ) {
    createBoxes(amount);
  } else {
    alert("Помилка! Введіть значення від 1 до 100.");
    refs.inputEl.value = "";
  }
});

refs.buttonDestroyEl.addEventListener("click", () => {
  refs.divBoxeEl.innerHTML = "";
});

function createBoxes(amount) {
  let sizeDiv = 30;

  for (let i = 0; i < amount; i += Number(refs.inputEl.step)) {
    const newDivCollection = document.createElement("div");

    newDivCollection.style.width = sizeDiv + "px";
    newDivCollection.style.height = sizeDiv + "px";
    newDivCollection.style.backgroundColor = getRandomHexColor();

    refs.divBoxeEl.appendChild(newDivCollection);
    sizeDiv += 10;
  }
}
