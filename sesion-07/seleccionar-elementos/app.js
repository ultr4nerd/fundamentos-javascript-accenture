const paragraph = document.getElementById("my-text");
const listItems = document.getElementsByClassName("my-item");

const paragraph2 = document.querySelector("#my-text");
const listItems2 = document.querySelectorAll(".my-item");

setTimeout(() => {
  paragraph2.innerText = "Enviado desde JavaScript :)";
  for (let i = 0; i < listItems2.length; i++) {
    const element = listItems2[i];
    const text = element.innerText;
    element.innerText = text.toUpperCase();
  }
}, 3000);
