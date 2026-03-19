// Ninja Talks main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');

  // Ensure elements exist before attaching events
  if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
    });
  }

  console.log("Ninja Talks site loaded and mobile menu activated");
});
