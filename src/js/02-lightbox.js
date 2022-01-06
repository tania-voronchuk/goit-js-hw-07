import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")

function createGallery (galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `<a 
      class="gallery__item" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}"/>
    </a>`
    }).join("")
}
galleryEl.insertAdjacentHTML("afterbegin", createGallery (galleryItems)); 

const lightbox = new SimpleLightbox(".gallery a", { 
    captionsData: "alt",
    captionType: "attr",
    captionDelay: 250, 
});
lightbox()
console.log(galleryItems);
