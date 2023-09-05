import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', handleImageClick);

function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
         </a>
    </li>`
    }).join('');
}

function handleImageClick(event) {
    
    if (event.target === event.currentTarget) {
      return;
    }
    
    const targetElement = event.target.closest('li');
    const source = targetElement.dataset.preview;
    const image = galleryItems.find(image => image.preview === source);
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${image.original}" alt="${image.description}"/>
    </div>
`);
    instance.show();
};

console.log(galleryItems);
