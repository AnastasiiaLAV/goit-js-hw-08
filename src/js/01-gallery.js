// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);


const refs = {
    wrapGallery: document.querySelector(".gallery"),
}

const markupGalleryItems = createsPictureCards(galleryItems);

refs.wrapGallery.insertAdjacentHTML('beforeend', markupGalleryItems)

function createsPictureCards(items) {
    return items.map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" 
            title="${description}"/>
            </a> `
        })
        .join('')
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
})

let style = document.createElement('STYLE');
style.type = 'text/css';
style.innerHTML =
    '.sl-overlay {background: linear-gradient(160deg, black, transparent)}';
document.querySelector('body').append(style);