//Ejercicio 5: Crea una función que acepte un arreglo de números y devuelva una Promise que se
//resuelva con la suma de los números después de 1 segundo. (Usar reduce)

export function sumaNumeros(array) {
    return new Promise((resolve,reject) => {
        if (!Array.isArray(array)) {
            return reject(new Error("El parámetro debe ser un arreglo de números"));
        }
        
        setTimeout( () => {
            var suma = array.reduce((acc, element) => acc + element, 0);
            resolve(suma);
        },1000);
    });
}