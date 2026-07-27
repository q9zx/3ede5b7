/*
 * METRI.IMMO LINK FRAMEWORK
 * Version: BETA 1
 * Fecha de generación: 2026-07-26
 * Autor: OpenAI Codex
 */

"use strict";

// Las imágenes se mantienen en el orden editorial proporcionado.
const propertyImages = [
    { src: "65ba.png", alt: "Fachada principal de la casa en Los Robles, El Hatillo" },
    { src: "65bb.png", alt: "Vista exterior completa de la propiedad en Los Robles" },
    { src: "65bc.png", alt: "Sala y comedor de la casa principal en El Hatillo" },
    { src: "65bd.png", alt: "Cocina de la casa principal en Los Robles" },
    { src: "65be.jpg", alt: "Composición de vistas interiores de la propiedad" },
    { src: "65bf.png", alt: "Baño revestido de la vivienda en Los Robles" },
    { src: "65bg.png", alt: "Vista complementaria de uno de los baños de la propiedad" },
    { src: "65bh.png", alt: "Segundo baño visible dentro del inmueble en El Hatillo" },
    { src: "65bi.png", alt: "Área interior con cocina y acceso de la propiedad" },
    { src: "65bj.png", alt: "Vista desde el pasillo hacia el área interior de la casa" },
    { src: "65bk.png", alt: "Habitación de paredes azules dentro de la propiedad" },
    { src: "65bl.png", alt: "Habitación organizada con ventana y mobiliario existente" },
    { src: "65bm.png", alt: "Habitación vacía con pared de acento en Los Robles" },
    { src: "65bn.png", alt: "Habitación vacía con armario de madera" },
    { src: "65bo.png", alt: "Área interior abierta con repisas, ventana y barra" },
    { src: "65bp.png", alt: "Terraza con mobiliario exterior y vista al entorno de montaña" }
];

let currentImageIndex = 0;
let elementThatOpenedLightbox = null;

const mainImage = document.getElementById("mainImage");
const thumbnailContainer = document.getElementById("thumbnailContainer");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const openLightboxButton = document.getElementById("openLightboxBtn");
const closeLightboxButton = document.getElementById("closeLightboxBtn");
const previousButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

function galleryIsReady() {
    return Boolean(mainImage && thumbnailContainer && lightbox && lightboxImage);
}

function updateMainImage(index) {
    if (!galleryIsReady() || !propertyImages[index]) return;

    currentImageIndex = index;
    const selectedImage = propertyImages[index];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    if (lightbox.classList.contains("active")) {
        lightboxImage.src = selectedImage.src;
        lightboxImage.alt = selectedImage.alt;
    }

    thumbnailContainer.querySelectorAll(".thumbnail").forEach((thumbnail, thumbnailIndex) => {
        const isActive = thumbnailIndex === index;
        thumbnail.classList.toggle("active", isActive);
        thumbnail.setAttribute("aria-current", isActive ? "true" : "false");
    });
}

function buildThumbnails() {
    if (!thumbnailContainer) return;

    const fragment = document.createDocumentFragment();

    propertyImages.forEach((image, index) => {
        const button = document.createElement("button");
        button.className = "thumbnail";
        button.type = "button";
        button.setAttribute("aria-label", `Mostrar fotografía ${index + 1} de ${propertyImages.length}`);

        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = image.src;
        thumbnailImage.alt = image.alt;
        thumbnailImage.loading = index < 2 ? "eager" : "lazy";
        thumbnailImage.decoding = "async";

        button.appendChild(thumbnailImage);
        button.addEventListener("click", () => updateMainImage(index));
        fragment.appendChild(button);
    });

    thumbnailContainer.replaceChildren(fragment);
}

function openLightbox(index = currentImageIndex) {
    if (!galleryIsReady() || !propertyImages[index]) return;

    elementThatOpenedLightbox = document.activeElement;
    currentImageIndex = index;
    lightboxImage.src = propertyImages[index].src;
    lightboxImage.alt = propertyImages[index].alt;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeLightboxButton?.focus();
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (elementThatOpenedLightbox instanceof HTMLElement) {
        elementThatOpenedLightbox.focus();
    }
}

function showNextImage() {
    updateMainImage((currentImageIndex + 1) % propertyImages.length);
}

function showPreviousImage() {
    updateMainImage((currentImageIndex - 1 + propertyImages.length) % propertyImages.length);
}

if (galleryIsReady()) {
    buildThumbnails();
    updateMainImage(0);

    mainImage.addEventListener("click", () => openLightbox(currentImageIndex));
    mainImage.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(currentImageIndex);
        }
    });
    mainImage.tabIndex = 0;
    mainImage.setAttribute("role", "button");
    mainImage.setAttribute("aria-label", "Abrir fotografía principal en tamaño ampliado");
}

openLightboxButton?.addEventListener("click", () => openLightbox(currentImageIndex));
closeLightboxButton?.addEventListener("click", closeLightbox);
nextButton?.addEventListener("click", showNextImage);
previousButton?.addEventListener("click", showPreviousImage);

lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
    if (!lightbox?.classList.contains("active")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNextImage();
    if (event.key === "ArrowLeft") showPreviousImage();
});
