const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createList = (content) => {
  return content.map((ingredient) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.textContent = ingredient;
    ingredientsItem.classList.add("item");

    return ingredientsItem;
  });
};

const elements = createList(ingredients);
ingredientsList.append(...elements);
