const categoriesList = document.querySelector("#categories");

const categoriesItem = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const categoryCount = item.querySelectorAll("li").length;
  console.log("Elements: ", categoryCount);
});
