import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener("click", onImageClick);

function createGalleryItemsMarkup(items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}" rel='noreferrer noopener nofollow'>
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div> 
        `;
    })
    .join('');
};

function onImageClick(event) {
    event.preventDefault();

    if(!event.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
    `);

    instance.show();

    window.addEventListener('keydown', onEscapePress);

    function onEscapePress(event) {
        if (event.code === 'Escape') {
        instance.close();

        window.removeEventListener('keydown', event);
        }
    };
};
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src = ${event.target.dataset.source} width="800" height="600">
`,{
onClose: (instance) => {
  document.removeEventListener("keydown", onEscKeyPress);
},
});

  instance.show();
  
  galleryEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }}


});


