"use strict";

const formulario = document.querySelector("#contact-form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");   // Asegúrate de usar id="email" en HTML
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#form-feedback");

function mostrarError(campo, texto) {
    campo.classList.add("input-error");
    const error = document.querySelector(`#err-${campo.id}`);
    if (error) {
        error.textContent = texto;
    }
}
function limpiarError(campo) {
    campo.classList.remove("input-error");
    const error = document.querySelector(`#err-${campo.id}`);
    if (error) {
        error.textContent = "";
    }
}

formulario.addEventListener("submit", function (evento) {
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const mensajeValor = mensaje.value.trim();

    let formularioValido = true;

    // --- Validar nombre ---
    if (nombreValor.length < 3) {
        mostrarError(nombre, "Ingresa un nombre con al menos 3 caracteres.");
        formularioValido = false;
    } else {
        limpiarError(nombre);
    }

    // --- Validar email ---
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValor === "") {
        mostrarError(email, "El email es obligatorio.");
        formularioValido = false;
    } else if (!regexEmail.test(emailValor)) {
        mostrarError(email, "Ingresa un email válido (ejemplo@dominio.com).");
        formularioValido = false;
    } else {
        limpiarError(email);
    }
    if (mensajeValor.length < 10) {
        mostrarError(mensaje, "Ingresa un mensaje con al menos 10 caracteres.");
        formularioValido = false;   // <-- Agregado
    } else {
        limpiarError(mensaje);
    }

    // Si hay errores, detenemos el envío
    if (!formularioValido) {
        evento.preventDefault();
        resultado.textContent = "Por favor corrige los errores del formulario.";
        resultado.className = "feedback-msg error";
        resultado.style.display = "block";
        return;
    }

    resultado.textContent = "Formulario válido. Enviando mensaje...";
    resultado.className = "feedback-msg success";
    resultado.style.display = "block";

    // Evita el envío real para pruebas (quita esta línea si deseas enviar)
    evento.preventDefault();
});