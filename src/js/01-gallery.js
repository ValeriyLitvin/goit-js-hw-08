// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryDiv = document.querySelector('.gallery');
const createImaneFn = createImageCard({ galleryItems });

galleryDiv.insertAdjacentHTML('beforeend', createImaneFn);

galleryDiv.addEventListener('click', callOriginalPicture);

function createImageCard({ galleryItems }) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
             </a>`;
    })
    .join('');
}
function callOriginalPicture(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  let lightbox = new SimpleLightbox('.gallery a', {
    navText: ['👈', '👉'],
    captionsData: 'alt',
    showCounter: false,
    captionDelay: 250,
  });
}
