"use strict"

const formulario = document.querySelector("#formularioContacto");
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

function mostrarError(campo, texto){
    campo.classList.add("invalido");
    const idCapitalizado = campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
    const error = document.querySelector(`#error${idCapitalizado}`);

    error.textContent = texto;
}

function limpiarError(campo){
    campo.classList.remove("invalido")
    const idCapitalizado = campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
    const error = document.querySelector(`#error${idCapitalizado}`);

    error.textContent = "";
}

formulario.addEventListener("submit", function(evento){
    const nombreValor = nombre.value.trim();

    const mensajeValor = mensaje.value.trim();

    let formularioValido = true;

    if(nombreValor.length < 3){
        mostrarError(nombre, "El nombre debe tener minimo tres caracteres o más.");
        formularioValido = false;
    }else{
        limpiarError(nombre)
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
    resultado.textContent = "Formulario válido. Enviado mensaje...";
    resultado.classList.add("visible")
});