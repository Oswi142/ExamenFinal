import contar from "./contador";

const first = document.querySelector("#primera-frase");
const form = document.querySelector("#contar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstFrase = Text.parseInt(first.value);

  div.innerHTML = "<p>" + contar(firstFrase) + "</p>";
});
