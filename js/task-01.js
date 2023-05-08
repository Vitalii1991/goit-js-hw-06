const refs = {
  categoriesList: document.querySelector("#categories"),
  categoriesItems: document.querySelectorAll(".item"),
};
console.log("Number of categories:", refs.categoriesItems.length);

refs.categoriesItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
