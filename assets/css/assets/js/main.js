// Ninja Talks main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');

  if (!menuToggle) console.log("ERROR: .menu-toggle not found");
  if (!sideMenu) console.log("ERROR: .side-menu not found");

  if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
      console.log("Mobile menu toggled");
    });
  }
});
