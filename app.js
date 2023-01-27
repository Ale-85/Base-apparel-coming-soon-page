const button = document.querySelector("button");
const input = document.querySelector("input");
const warning = document.querySelector(".warning");

function inputStyle() {
  input.style.border = "2px solid hsl(0, 93%, 68%)";
  input.style.marginBottom = "0";
  input.style.backgroundImage = "url(images/icon-error.svg)";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundPosition = "16rem";
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.style.background =
    "linear-gradient(0.25turn, hsl(0, 86%, 94%), hsl(0, 80%, 86%))";
  let email = input.value;
  let validEmail = email.includes("@");
  if (validEmail === false) {
    warning.style.display = "block";
    button.style.border = "2px solid hsl(0, 86%, 90%)";
    inputStyle();
  }
});
