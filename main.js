import { mostrarMensaje } from "./ejercicios/ejercicio1.js";
import { doble } from "./ejercicios/ejercicio2.js";
import { promesa1 , promesa2 } from "./ejercicios/ejercicio3.js";
import { realizarSolicitud } from "./ejercicios/ejercicio4.js";
import { sumaNumeros } from "./ejercicios/ejercicio5.js";
import { aEjecutar } from "./ejercicios/ejercicio6.js";

/*
//Ejercicio1
mostrarMensaje.then((mensaje) => {
    console.log(mensaje);
});

//Ejercicio2
console.log(doble(8).then((mensaje) => {
    console.log(mensaje);
})); 

//Ejercicio3
Promise.all([promesa1,promesa2])
    .then((resultados) => {
        console.log(resultados);
    });
*/

//Ejericio4
realizarSolicitud();

//Ejercicio5
/*
const suma = sumaNumeros([1,2])
    .then(suma => { console.log(suma) })
    .catch(error => { console.error(error.message) });


async function calcularSuma() {
    try {
        const suma = await sumaNumeros([4,5,6]);
        console.log(suma);
    } catch (error) {
        console.error(error.message);
    }
}

calcularSuma();*/

const urlApi = 'https://pokeapi.co/api/v2/pokemon/vileplume';
aEjecutar(urlApi);