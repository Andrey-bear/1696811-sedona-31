const link = document.querySelector(".best-deals-button");
const searchForm = document.querySelector(".search");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.add("modal-show");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.remove("modal");
});
