function replaceImages() {
  const images = [...document.getElementsByTagName("img")];
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const node = document.createElement("p");
    const textNode = document.createTextNode(image.alt);
    node.appendChild(textNode);
    image.parentNode.replaceChild(node, image);
  }
}

setTimeout(() => {
  replaceImages();
}, 2000);
