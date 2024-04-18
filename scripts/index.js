document.querySelector(".hero-btn").onclick = function () {
  document.querySelector(".modal-overlay ").classList.toggle("is-open");
};

document.querySelector(".modal-close-btn").onclick = function () {
  document.querySelector(".modal-overlay").classList.toggle("is-open");
};

document.querySelector(".header-btn").onclick = function () {
  document.querySelector(".menu-overlay ").classList.toggle("is-open");
};

document.querySelector(".close-btn").onclick = function () {
  document.querySelector(".menu-overlay").classList.toggle("is-open");
};
