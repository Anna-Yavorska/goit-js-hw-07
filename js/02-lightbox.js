import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);

function createMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionsDelay: 250,
});

console.log(galleryItems);
