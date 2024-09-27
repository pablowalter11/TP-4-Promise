//Ejercicio 3: Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina
//ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar Promise.all)

export const promesa1 = new Promise((resolve) => {
    setTimeout( () => {
        resolve("Resultado 1");
    },3000);
});
export const promesa2 = new Promise((resolve) => {
    setTimeout( () => {
        resolve("Resultado 2");
    });
});