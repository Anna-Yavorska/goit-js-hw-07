import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handleImageClick);

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

function handleImageClick(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    new SimpleLightbox(".gallery__item a", {
      captionsData: "alt",
      captionPosition: "bottom",
      captionsDelay: 250,
    });
  }
  gallery.open();
}

console.log(galleryItems);
