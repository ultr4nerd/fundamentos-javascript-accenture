const title = document.querySelector("#title");
const input = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const newText = event.target.value;
  if (!newText) {
    title.textContent = "Hello World!";
  } else {
    title.textContent = event.target.value;
  }
});
