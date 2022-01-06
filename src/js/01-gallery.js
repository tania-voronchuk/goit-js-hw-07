import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")

function createGallery (galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
      return `<a 
      class="gallery__link" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
    </a>`}).join("");
}
galleryEl.insertAdjacentHTML("afterbegin", createGallery (galleryItems)); 

galleryEl.addEventListener("click", (event) => {
   event.preventDefault()
   if(event.target.nodeName !== "IMG") {
   return
} 
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`)
    instance.show()
});
console.log(galleryItems);  

 
