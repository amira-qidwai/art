
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".navbar nav");
  const logo = document.querySelector(".logo a");

  const toggleMenu = () => {
    navMenu.classList.toggle("active");
  };

  hamburgerMenu.addEventListener("click", toggleMenu);
  logo.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});

window.addEventListener("load", () => {
  const gallery = document.querySelector(".gallery");
  const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue("grid-auto-rows"));
  const rowGap = parseInt(window.getComputedStyle(gallery).getPropertyValue("gap"));

  gallery.querySelectorAll("img").forEach(img => {
    img.addEventListener("load", () => {
      const rowSpan = Math.ceil((img.offsetHeight + rowGap) / (rowHeight + rowGap));
      img.style.gridRowEnd = `span ${rowSpan}`;
    });
  });
});

function changeImage(src) {
  document.getElementById('currentImage').src = src;
}


function closeBanner() {
  const banner = document.getElementById('announcement-banner');
  if (banner) {
    banner.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const claimButton = document.getElementById("claimButton");
  const modal = document.getElementById("claimModal");
  const closeButton = document.querySelector(".close-button");

  claimButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
