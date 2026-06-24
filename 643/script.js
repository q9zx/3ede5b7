document.addEventListener("DOMContentLoaded", () => {
    /*
    ============================================================
    LINK WASI / METRI.IMMO
    Property: 2ed
    Version: coherent with Mobile Premium Shell + revised index.html
    ============================================================
    */

    /**
     * ------------------------------------------------------------
     * 1) IMAGE SETUP
     * ------------------------------------------------------------
     * Orden optimizado para conexión visual / narrativa comercial.
     *
     * Ajusta este array si en el futuro decides cambiar el orden.
     * IMPORTANTE:
     * - La primera imagen del array será la hero principal.
     * - Todas las imágenes deben existir dentro de /2ed/
     */
    const imageList = [
        "2eda.jpg", // hero principal
        "2edb.jpg",
        "2edc.jpg",
        "2edd.jpg",
        "2ede.jpg",
        "2edf.jpg",
        "2edg.jpg",
        "2edh.jpg",
        "2edi.jpg",
        "2edj.jpg",
        "2edk.jpg",
        "2edl.jpg",
        "2edm.jpg",
        "2edn.jpg",
        "2edo.jpg",
        "2edp.jpg",
        "2edq.jpg",
        "2edr.jpg"
    ];

    /**
     * Textos ALT por imagen.
     * Si una imagen no tiene descripción específica, se usa fallback.
     */
    const imageAltMap = {
        "2eda.jpg": "Town House Dúplex en Lomas de la Lagunita - vista principal de la propiedad",
        "2edb.jpg": "Área social del Town House en Lomas de la Lagunita",
        "2edc.jpg": "Sala y comedor integrados del Town House",
        "2edd.jpg": "Cocina del Town House en Lomas de la Lagunita",
        "2ede.jpg": "Vista interior de la cocina y área social",
        "2edf.jpg": "Family room del Town House",
        "2edg.jpg": "Habitación principal del Town House",
        "2edh.jpg": "Baño principal remodelado",
        "2edi.jpg": "Habitación auxiliar del Town House",
        "2edj.jpg": "Baño auxiliar del inmueble",
        "2edk.jpg": "Vista del balcón con conexión visual al entorno verde",
        "2edl.jpg": "Visual del entorno residencial de la propiedad",
        "2edm.jpg": "Detalles de distribución interior del Town House",
        "2edn.jpg": "Otra vista del área social del inmueble",
        "2edo.jpg": "Espacios internos del Town House en venta",
        "2edp.jpg": "Detalle adicional de la propiedad en Lomas de la Lagunita",
        "2edq.jpg": "Vista complementaria de la propiedad",
        "2edr.jpg": "Imagen final del recorrido visual del Town House"
    };

    const fallbackAlt =
        "Town House Dúplex en Lomas de la Lagunita, El Hatillo";

    /**
     * ------------------------------------------------------------
     * 2) DOM REFERENCES
     * ------------------------------------------------------------
     */
    const mainImage = document.getElementById("mainImage");
    const thumbnailContainer = document.getElementById("thumbnailContainer");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const openLightboxBtn = document.getElementById("openLightboxBtn");
    const closeLightboxBtn = document.getElementById("closeLightboxBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    /**
     * ------------------------------------------------------------
     * 3) STATE
     * ------------------------------------------------------------
     */
    let currentIndex = 0;

    /**
     * ------------------------------------------------------------
     * 4) HELPERS
     * ------------------------------------------------------------
     */
    function getAltText(fileName) {
        return imageAltMap[fileName] || fallbackAlt;
    }

    function getSafeIndex(index) {
        if (index < 0) return imageList.length - 1;
        if (index >= imageList.length) return 0;
        return index;
    }

    function updateMainImage(index) {
        const safeIndex = getSafeIndex(index);
        const fileName = imageList[safeIndex];

        if (!mainImage) return;

        mainImage.src = fileName;
        mainImage.alt = getAltText(fileName);
        mainImage.setAttribute("data-current-index", String(safeIndex));

        currentIndex = safeIndex;
        highlightActiveThumbnail();
    }

    function updateLightboxImage(index) {
        const safeIndex = getSafeIndex(index);
        const fileName = imageList[safeIndex];

        if (!lightboxImage) return;

        lightboxImage.src = fileName;
        lightboxImage.alt = getAltText(fileName);
        currentIndex = safeIndex;
        highlightActiveThumbnail();
    }

    function openLightbox(index = currentIndex) {
        if (!lightbox || !lightboxImage) return;

        const safeIndex = getSafeIndex(index);
        updateLightboxImage(safeIndex);

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        if (!lightbox) return;

        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function goToNext() {
        const nextIndex = getSafeIndex(currentIndex + 1);
        updateLightboxImage(nextIndex);
        updateMainImage(nextIndex);
    }

    function goToPrev() {
        const prevIndex = getSafeIndex(currentIndex - 1);
        updateLightboxImage(prevIndex);
        updateMainImage(prevIndex);
    }

    function highlightActiveThumbnail() {
        if (!thumbnailContainer) return;

        const thumbs = thumbnailContainer.querySelectorAll(".thumb-item");
        thumbs.forEach((thumb, index) => {
            if (index === currentIndex) {
                thumb.classList.add("is-active");
                thumb.setAttribute("aria-current", "true");
            } else {
                thumb.classList.remove("is-active");
                thumb.removeAttribute("aria-current");
            }
        });
    }

    function createThumbnail(fileName, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "thumb-item";
        button.setAttribute("aria-label", `Ver imagen ${index + 1} de la propiedad`);

        const img = document.createElement("img");
        img.src = fileName;
        img.alt = getAltText(fileName);
        img.loading = index < 6 ? "eager" : "lazy";
        img.decoding = "async";

        img.onerror = () => {
            img.style.visibility = "hidden";
            button.style.display = "none";
        };

        button.appendChild(img);

        button.addEventListener("click", () => {
            updateMainImage(index);
            openLightbox(index);
        });

        return button;
    }

    function renderThumbnails() {
        if (!thumbnailContainer) return;

        thumbnailContainer.innerHTML = "";

        imageList.forEach((fileName, index) => {
            const thumb = createThumbnail(fileName, index);
            thumbnailContainer.appendChild(thumb);
        });

        highlightActiveThumbnail();
    }

    /**
     * ------------------------------------------------------------
     * 5) HERO IMAGE INIT
     * ------------------------------------------------------------
     */
    function initializeHeroImage() {
        if (!mainImage || imageList.length === 0) return;

        mainImage.src = imageList[0];
        mainImage.alt = getAltText(imageList[0]);
        mainImage.setAttribute("data-current-index", "0");

        mainImage.addEventListener("click", () => {
            openLightbox(currentIndex);
        });

        mainImage.onerror = () => {
            // fallback silencioso: si falla la hero, intenta con la siguiente disponible
            for (let i = 1; i < imageList.length; i++) {
                const testImage = new Image();
                testImage.src = imageList[i];
                testImage.onload = () => {
                    updateMainImage(i);
                };
            }
        };
    }

    /**
     * ------------------------------------------------------------
     * 6) LIGHTBOX EVENTS
     * ------------------------------------------------------------
     */
    function bindLightboxEvents() {
        if (openLightboxBtn) {
            openLightboxBtn.addEventListener("click", () => {
                openLightbox(currentIndex);
            });
        }

        if (closeLightboxBtn) {
            closeLightboxBtn.addEventListener("click", closeLightbox);
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", goToPrev);
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", goToNext);
        }

        if (lightbox) {
            lightbox.addEventListener("click", (event) => {
                const clickedOnBackdrop = event.target === lightbox;
                if (clickedOnBackdrop) {
                    closeLightbox();
                }
            });
        }

        document.addEventListener("keydown", (event) => {
            const isLightboxOpen = lightbox && lightbox.classList.contains("is-open");

            if (!isLightboxOpen) return;

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                goToNext();
            }

            if (event.key === "ArrowLeft") {
                goToPrev();
            }
        });
    }

    /**
     * ------------------------------------------------------------
     * 7) OPTIONAL TOUCH SUPPORT (simple swipe)
     * ------------------------------------------------------------
     * Muy útil en móvil para la lightbox.
     */
    function bindTouchSupport() {
        if (!lightboxImage) return;

        let touchStartX = 0;
        let touchEndX = 0;

        const minSwipeDistance = 40;

        lightboxImage.addEventListener(
            "touchstart",
            (event) => {
                if (!event.changedTouches || !event.changedTouches.length) return;
                touchStartX = event.changedTouches[0].clientX;
            },
            { passive: true }
        );

        lightboxImage.addEventListener(
            "touchend",
            (event) => {
                if (!event.changedTouches || !event.changedTouches.length) return;
                touchEndX = event.changedTouches[0].clientX;

                const distance = touchEndX - touchStartX;

                if (Math.abs(distance) < minSwipeDistance) return;

                if (distance < 0) {
                    goToNext();
                } else {
                    goToPrev();
                }
            },
            { passive: true }
        );
    }

    /**
     * ------------------------------------------------------------
     * 8) THUMB ACTIVE STYLE INJECTION
     * ------------------------------------------------------------
     * Como refuerzo visual, si el CSS no tiene .thumb-item.is-active
     * este bloque lo inyecta sin romper tu styles.css.
     */
    function injectThumbActiveStyle() {
        const styleId = "metri-thumb-active-style";
        if (document.getElementById(styleId)) return;

        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
            .thumb-item.is-active {
                outline: 2px solid rgba(212, 175, 55, 0.95);
                outline-offset: 0;
                transform: translateY(-2px);
                box-shadow:
                    0 16px 32px rgba(0,0,0,0.24),
                    0 0 0 1px rgba(212, 175, 55, 0.35) inset;
            }

            .thumb-item.is-active img {
                filter: saturate(1.02) contrast(1.02);
            }

            #mainImage {
                cursor: zoom-in;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * ------------------------------------------------------------
     * 9) PRELOAD FIRST IMAGES
     * ------------------------------------------------------------
     * Mejora la percepción de velocidad en móvil.
     */
    function preloadPriorityImages() {
        const priorityImages = imageList.slice(0, 4);

        priorityImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }

    /**
     * ------------------------------------------------------------
     * 10) INIT
     * ------------------------------------------------------------
     */
    function init() {
        if (!imageList.length) return;

        injectThumbActiveStyle();
        initializeHeroImage();
        renderThumbnails();
        bindLightboxEvents();
        bindTouchSupport();
        preloadPriorityImages();

        // Seguridad: sincroniza hero con estado inicial
        updateMainImage(0);
    }

    init();
});