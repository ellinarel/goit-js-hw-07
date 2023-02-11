import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery")
const imgCardMarkup = createimgCardMarkup(galleryItems)
function createimgCardMarkup(galleryItems) 
{return galleryItems.map(({preview, original, description})=> 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    width = "340"/></a></div>`)
    .join("")
}
galleryEl.insertAdjacentHTML('afterbegin', imgCardMarkup);

galleryEl.addEventListener('click', imgOnclick);
function imgOnclick(ev){
ev.preventDefault();
if(!ev.target.dataset.source){
return;
}
var instance = basicLightbox.create(
`
<img src="${ev.target.dataset.source}" width ="800" height="auto">
`, 
 {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);
instance.show();

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;
  if (isEscKey) {
    instance.close();
  }
}
}

