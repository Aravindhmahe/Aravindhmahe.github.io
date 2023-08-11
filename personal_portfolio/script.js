const closeBtnId = document.getElementById("close-btn");
const toggleBtnId = document.getElementById("toggle-btn");
const navBarId = document.getElementById("nav-menu");

toggleBtnId.addEventListener("click", () => {
  navBarId.classList.add("show");
});

closeBtnId.addEventListener("click", () => {
  navBarId.classList.remove("show");
});
