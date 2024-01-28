import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const fixedGalleryItems = galleryItems
  .map(
    (galleryItem) =>
      `<li>
      <a class="gallery__link gallery__item" href="${galleryItem.original}">
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
// ============================================================
var images = document.querySelectorAll(".gallery img");
images.forEach(function (image) {
  image.addEventListener("click", function (event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox(".gallery a", {});
  });
});
