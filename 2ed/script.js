const images = [
    {
        src: "2eda.jpg",
        alt: "Town House Dúplex en Lomas de la Lagunita - vista principal"
    },
    {
        src: "2edb.jpg",
        alt: "Área social del Town House en Lomas de la Lagunita"
    },
    {
        src: "2edc.jpg",
        alt: "Sala y comedor integrados"
    },
    {
        src: "2edd.jpg",
        alt: "Cocina de concepto abierto con tope de granito"
    },
    {
        src: "2ede.jpg",
        alt: "Balcón y ventanal con vista verde"
    },
    {
        src: "2edh.jpg",
        alt: "Habitación principal"
    },
    {
        src: "2edi.jpg",
        alt: "Baño principal remodelado"
    },
    {
        src: "2edj.jpg",
        alt: "Habitación secundaria"
    },
    {
        src: "2edf.jpg",
        alt: "Family room creado a partir de la tercera habitación original"
    },
    {
        src: "2edg.jpg",
        alt: "Family room y área de estar íntimo"
    },
    {
        src: "2edk.jpg",
        alt: "Vista complementaria del área social"
    },
    {
        src: "2edl.jpg",
        alt: "Baño secundario"
    },
    {
        src: "2edm.jpg",
        alt: "Detalles interiores del inmueble"
    },
    {
        src: "2edn.jpg",
        alt: "Circulaciones y acabados del Town House"
    },
    {
        src: "2edo.jpg",
        alt: "Áreas de apoyo de la propiedad"
    },
    {
        src: "2edp.jpg",
        alt: "Entorno y visuales del conjunto"
    },
    {
        src: "2edq.jpg",
        alt: "Fachada o acceso del Town House"
    },
    {
        src: "2edr.jpg",
        alt: "Vista final del inmueble y su entorno"
    }
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