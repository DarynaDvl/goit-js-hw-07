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
containerGallery.addEventListener("click", getOriginalImage);
let instance = null;

function getOriginalImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;
  const originalSource = event.target.closest(".gallery__link").href;

  instance = basicLightbox.create(
    `
    <img src="${originalSource}" width="800" height="600">
`,
    {
      onClose: () => {
        window.removeEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();

  window.addEventListener("keydown", onEscape);
}

function onEscape(event) {
  if (event.code === "Escape" && instance) {
    instance.close();
  }
}
