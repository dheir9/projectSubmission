// toggle
let isSpread = false;

function toggleCards() {
  const cards = document.querySelectorAll(".card");
  const angle = 15;

  if (!isSpread) {
    // Spreid kaarten
    cards.forEach((card, index) => {
      const rotation = (-angle * (cards.length - 1)) / 2 + angle * index;
      card.style.transform = `rotate(${rotation}deg)`;
      card.style.left = `${index * 50}px`;
      card.style.top = `${Math.abs(index - (cards.length - 1) / 2) * 10}px`;
    });
  } else {
    // Reset naar overlappende positie
    cards.forEach((card, index) => {
      card.style.transform = "rotate(0deg)";
      card.style.left = `${index * 40}px`;
      card.style.top = "0px";
    });
  }

  isSpread = !isSpread;
}

function showLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.src = imageSrc;
  lightbox.style.display = "flex";
}

function hideLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Voeg event listeners toe
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function (event) {
    // Controleer of de kaart de hoogste z-index heeft
    if (window.getComputedStyle(card).zIndex === "10") {
      const imageSrc = card.querySelector("img").src;
      showLightbox(imageSrc);
    }
  });
});
