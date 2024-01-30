import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const fixedGalleryItems = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", fixedGalleryItems);

// ===========================================================================

const lightbox = basicLightbox.create(`<img src="" />`, {
  onShow: () => window.addEventListener("keydown", escape),
  onClose: () => window.removeEventListener("keydown", escape),
});

function showLightbox(event) {
  event.preventDefault();
  const src = event.target.dataset.source;

  if (!src) return;

  lightbox.element().querySelector("img").src = src;
  lightbox.show();
}

gallery.addEventListener("click", showLightbox);

function escape(event) {
  if (event.key !== "Escape") return;
  lightbox.close();
}

console.log(galleryItems);
