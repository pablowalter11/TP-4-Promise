//Ejercicio 6: Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección
//utilizando la función fetch y devuelva el resultado en formato JSON. Maneja los errores
//posibles.

async function solicidadHTTP(url) {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error en la solicitud: ", error.message);
        throw error;
    }
}

export async function aEjecutar(url) {
    try {
        const datos = await solicidadHTTP(url);
        console.log(datos);
    } catch (error) {
        console.error("Error final:", error.message);
    }
}