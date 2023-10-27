const openButton = document.querySelector("button");
const closeButton = document.querySelector(".close");
const modal = document.querySelector("#modal");
const image = document.querySelector("#modal-image");

openButton.addEventListener("click", () => {
  modal.style.display = "block";
  image.src = "https://picsum.photos/300/200";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
