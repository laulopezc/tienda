document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensajeValidacion = document.getElementById("mensaje-validacion");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const mail = document.getElementById("mail").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || mail === "" || mensaje === "") {
            mensajeValidacion.textContent = "Todos los campos son obligatorios.";
            mensajeValidacion.style.color = "red";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            mensajeValidacion.textContent = "Correo electrónico no válido.";
            mensajeValidacion.style.color = "red";
            return;
        }

        mensajeValidacion.textContent = "Formulario enviado correctamente.";
        mensajeValidacion.style.color = "lightgreen";

        formulario.reset();
    });
});
