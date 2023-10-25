function addNewItem(text) {
  const list = document.querySelector("#my-list");
  const newNode = document.createElement("li");
  newNode.innerText = text;
  newNode.classList.add("my-item");
  list.appendChild(newNode);
}

function addNewItemAtBeginning(text) {
  const list = document.querySelector("#my-list");
  const newNode = document.createElement("li");
  newNode.innerText = text;
  newNode.classList.add("my-item");
  list.insertBefore(newNode, list.firstChild);
}

function moveElement(prevIndex, newIndex) {
  const list = document.querySelector("#my-list");
  const items = document.querySelectorAll(".my-item");
  list.insertBefore(items[prevIndex], items[newIndex]);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    addNewItem("Chocolate");
  }, 1000);

  setTimeout(() => {
    addNewItem("Atún");
  }, 2000);

  setTimeout(() => {
    addNewItemAtBeginning("Pastel");
  }, 3000);

  setTimeout(() => {
    moveElement(2, 0);
  }, 4000);
});
