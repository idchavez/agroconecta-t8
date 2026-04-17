const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("number");


formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página
    console.log("Formulario enviado");
});