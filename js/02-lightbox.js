import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li> <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" loading="lazy" width="300"></a> </li>`
  )
  .join("");

containerGallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    lightbox.close();
  }
});
