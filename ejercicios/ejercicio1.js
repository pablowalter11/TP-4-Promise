//Ejercicio 1: Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje
//cuando se resuelva.

export const mostrarMensaje = new Promise((resolve) => {
    setTimeout( () => {
        resolve("La promesa se ha resuelto después de 2 segundos.");
    },2000);
});