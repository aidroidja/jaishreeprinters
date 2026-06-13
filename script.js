const services = [
  {
    title: "Woven Labels & Tags",
    description:
      "Durable and premium-quality labels and tags for garments and products."
  },
  {
    title: "Brand Logo Printing",
    description:
      "Custom logo printing solutions that boost visual identity and brand recall."
  },
  {
    title: "Banners & Digital Banners",
    description:
      "High-impact banner printing for indoor, outdoor, retail, and event promotions."
  },
  {
    title: "T-Shirt Printing",
    description:
      "Stylish and long-lasting apparel prints for uniforms, events, and campaigns."
  },
  {
    title: "Tape & Label Print",
    description:
      "Clear, consistent, and application-ready tape and label printing options."
  },
  {
    title: "Book Printing",
    description:
      "Professional book and booklet printing with sharp pages and quality binding."
  }
];

const serviceGrid = document.getElementById("service-grid");
const yearNode = document.getElementById("year");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const workImages = document.querySelectorAll(".work-image");
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

if (serviceGrid) {
  services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "service-card";
    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    serviceGrid.appendChild(card);
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("show");
    }
  });
}

if (workImages.length > 0 && lightbox && lightboxImage && lightboxClose) {
  const canHoverPreview = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;
  let previewMode = "click";
  let hoverCloseTimer;

  const openLightbox = (image, mode = "click") => {
    if (hoverCloseTimer) {
      clearTimeout(hoverCloseTimer);
    }
    previewMode = mode;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "Work image preview";
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = mode === "click" ? "hidden" : "";
  };

  const closeLightbox = () => {
    if (hoverCloseTimer) {
      clearTimeout(hoverCloseTimer);
    }
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
    previewMode = "click";
  };

  workImages.forEach((image) => {
    image.addEventListener("click", () => openLightbox(image, "click"));

    if (canHoverPreview) {
      image.addEventListener("mouseenter", () => {
        openLightbox(image, "hover");
      });

      image.addEventListener("mouseleave", () => {
        if (previewMode === "hover") {
          hoverCloseTimer = window.setTimeout(() => {
            closeLightbox();
          }, 140);
        }
      });
    }
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  if (canHoverPreview) {
    lightbox.addEventListener("mouseenter", () => {
      if (previewMode === "hover" && hoverCloseTimer) {
        clearTimeout(hoverCloseTimer);
      }
    });

    lightbox.addEventListener("mouseleave", () => {
      if (previewMode === "hover") {
        closeLightbox();
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("show")) {
      closeLightbox();
    }
  });
}
