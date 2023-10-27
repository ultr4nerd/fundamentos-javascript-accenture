window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.style.background = "lightblue";
  }

  if (event.key === "Enter" && event.ctrlKey) {
    document.body.style.background = "orange";
  }
});

window.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    document.body.style.background = "";
  }
});
