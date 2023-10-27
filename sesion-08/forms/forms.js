const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-input").value;
  const password = document.querySelector("#password-input").value;

  if (email === "mauricio@gmail.com" && password === "password") {
    alert("Acceso correcto");
    window.location.href = "https://google.com";
  } else {
    alert("Acceso denegado");
  }
});
