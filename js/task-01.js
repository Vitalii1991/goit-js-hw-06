const refs = {
  categoriesList: document.querySelector("#categories"),
  categoriesItem: document.querySelectorAll(".item"),
};
console.log("Number of categories:", refs.categoriesItem.length);

refs.categoriesItem.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
