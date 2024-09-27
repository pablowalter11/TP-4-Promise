//Ejercicio 2: Crea una función que acepte un número y devuelva una Promise que se resuelva
//con el doble del número después de 1 segundo.

export function doble(numero) {
    return new Promise(resolve => {
        resolve(numero*2);
    });
}