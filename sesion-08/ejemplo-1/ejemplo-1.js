const title = document.querySelector("#title");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const blackButton = document.querySelector("#black");

redButton.addEventListener("click", () => {
  title.style.color = "red";
});
blueButton.addEventListener("click", () => {
  title.style.color = "blue";
});
blackButton.addEventListener("click", () => {
  title.style.color = "black";
});
