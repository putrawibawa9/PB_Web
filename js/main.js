// TOGGLE class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika humberger dikil
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk ngilangin nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// MODAL BOX
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailBottons = document.querySelectorAll(".item-detail-botton");

itemDetailBottons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
})

// click tombol close modal box
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
