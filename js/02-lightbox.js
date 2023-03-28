import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCard = document.querySelector('.gallery');

const getItemMarkup = ({preview, original, description}) => `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
`
const getImagesMarkup = (images) => images.map(item => getItemMarkup(item)).join('')

galleryCard.innerHTML = getImagesMarkup(galleryItems);
galleryCard.addEventListener('click', clickGallery)

new window.SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt'
});

function clickGallery(element) {
  element.preventDefault();
}
