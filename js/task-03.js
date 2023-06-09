const images = [
  {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(images);

galleryList.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(images) {
  return images
    .map(({ src, alt }) => {
      return `<li><img src="${src}" alt="${alt}"></li>`;
    })
    .join("");
}
