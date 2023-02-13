import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery")
const imgCardMarkup = createimgCardMarkup(galleryItems)
function createimgCardMarkup(galleryItems) 
{return galleryItems.map(({preview, original, description})=> 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}"" alt="${description}"/>
</a>`)
    .join("")
}
galleryEl.insertAdjacentHTML('afterbegin', imgCardMarkup);


const lightbox = new SimpleLightbox('.gallery a', {  captionDelay: 250,
    captionsData: "alt",})

