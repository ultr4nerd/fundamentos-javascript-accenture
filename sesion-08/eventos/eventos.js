const button = document.getElementById("my-button");

function once() {
  console.log("Hello world!");
  button.removeEventListener("click", once);
}

button.addEventListener("click", once);
