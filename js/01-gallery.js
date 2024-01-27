import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const fixedGalleryItems = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", fixedGalleryItems);

// ===========================================================================

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  lightbox.show();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    basicLightbox.close();
  }
});

console.log(galleryItems);
