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
