"use strict";

const formulario = document.querySelector("#contact-form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#form-feedback");

function mostrarError(campo, texto) {
    campo.classList.add("invalido");
    const error = document.querySelector(`#err-${campo.id}`);
    if (error) {
        error.textContent = texto;
    }
}

function limpiarError(campo) {
    campo.classList.remove("invalido");
    const error = document.querySelector(`#err-${campo.id}`);
    if (error) {
        error.textContent = "";
    }
}

formulario.addEventListener("submit", function(evento) {
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const mensajeValor = mensaje.value.trim();

    let formularioValido = true;

    if (nombreValor.length < 3) {
        mostrarError(nombre, "El nombre debe tener mínimo tres caracteres.");
        formularioValido = false;
    } else {
        limpiarError(nombre);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValor === "") {
        mostrarError(email, "El correo electrónico es obligatorio.");
        formularioValido = false;
    } else if (!emailRegex.test(emailValor)) {
        mostrarError(email, "Ingresa un correo válido (ej: usuario@correo.com).");
        formularioValido = false;
    } else {
        limpiarError(email);
    }

    if (mensajeValor.length === 0) {
        mostrarError(mensaje, "El mensaje no puede estar vacío.");
        formularioValido = false;
    } else if (mensajeValor.length < 10) {
        mostrarError(mensaje, "Ingrese un mensaje con al menos 10 caracteres o más.");
        formularioValido = false;
    } else {
        limpiarError(mensaje);
    }

    if (!formularioValido) {
        evento.preventDefault();
        resultado.classList.remove("visible");
        return;
    }

    resultado.textContent = "Formulario válido. Enviando mensaje...";
    resultado.classList.add("visible");
});