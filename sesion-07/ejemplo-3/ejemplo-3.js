function createNewItem(text) {
  const node = document.createElement("li");
  node.classList.add("my-item");
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  return node;
}

function addNewItem(text) {
  const list = document.querySelector("#my-list");
  const newNode = createNewItem(text);
  list.appendChild(newNode);
}

function addNewItemAtBeginning(text) {
  const list = document.querySelector("#my-list");
  const newNode = createNewItem(text);
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
