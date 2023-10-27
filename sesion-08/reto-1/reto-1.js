const balloon = document.querySelector("#balloon");
let balloonSize = 20;

function setBalloonSize(size) {
  if (size === 80) {
    balloon.textContent = "💥";
    window.removeEventListener("keydown", handleKeydown);
  }
  balloon.style.fontSize = size + "px";
}

function setInitialBalloonSize() {
  setBalloonSize(balloonSize);
}

function increaseBalloonSize() {
  setBalloonSize(++balloonSize);
}

function decreaseBalloonSize() {
  setBalloonSize(--balloonSize);
}

function handleKeydown(event) {
  if (!["ArrowUp", "ArrowDown"].includes(event.key)) {
    return;
  }

  event.preventDefault(); // Avoid scroll

  if (event.key === "ArrowUp") {
    increaseBalloonSize();
  }

  if (event.key === "ArrowDown") {
    decreaseBalloonSize();
  }
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("DOMContentLoaded", setInitialBalloonSize);
