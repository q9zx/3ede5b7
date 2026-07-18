const images = [
    { src: "abka.jpg", alt: "Fachada del anexo amoblado en El Marqués" },
    { src: "abkb.jpg", alt: "Espacio interior amoblado del anexo" },
    { src: "abkc.jpg", alt: "Cocina integral equipada" },
    { src: "abkd.jpg", alt: "Ambiente interior de la propiedad" },
    { src: "abke.jpg", alt: "Detalle del espacio amoblado" },
    { src: "abkf.jpg", alt: "Área complementaria del anexo" },
    { src: "abkg.jpg", alt: "Vista complementaria de la propiedad" },
    { src: "abkh.jpg", alt: "Ambiente adicional del anexo" },
    { src: "abki.jpg", alt: "Vista de uno de los ambientes" },
    { src: "abkj.jpg", alt: "Detalle complementario de la vivienda" },
    { src: "abkl.jpg", alt: "Vista adicional de la vivienda" },
    { src: "abkm.jpg", alt: "Patio de la propiedad" }
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const thumbnailContainer = document.getElementById("thumbnailContainer");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const openLightboxBtn = document.getElementById("openLightboxBtn");
const closeLightboxBtn = document.getElementById("closeLightboxBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateMainImage(index) {
    currentIndex = index;
    const image = images[index];

    mainImage.src = image.src;
    mainImage.alt = image.alt;

    if (lightbox.classList.contains("active")) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    }

    document.querySelectorAll(".thumbnail").forEach((thumb, thumbIndex) => {
        thumb.classList.toggle("active", thumbIndex === index);
    });
}

function buildThumbnails() {
    thumbnailContainer.innerHTML = "";

    images.forEach((image, index) => {
        const button = document.createElement("button");
        button.className = "thumbnail";
        button.type = "button";
        button.setAttribute("aria-label", `Ver imagen ${index + 1}`);

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";

        button.appendChild(img);
        button.addEventListener("click", () => updateMainImage(index));
        thumbnailContainer.appendChild(button);
    });
}

function openLightbox(index = currentIndex) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(currentIndex);
    if (lightbox.classList.contains("active")) {
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(currentIndex);
    if (lightbox.classList.contains("active")) {
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }
}

buildThumbnails();
updateMainImage(0);

mainImage.addEventListener("click", () => openLightbox(currentIndex));
openLightboxBtn.addEventListener("click", () => openLightbox(currentIndex));
closeLightboxBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowRight") {
        showNextImage();
    } else if (event.key === "ArrowLeft") {
        showPrevImage();
    }
});
