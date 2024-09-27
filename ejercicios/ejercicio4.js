//Ejercicio 4: Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y
//devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos.

function simulacionSolicitudHTTP() {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const respuesta = {
                mensaje: "Solicitud Completada",
                datos: {
                    id: 1,
                    nombre: "Ejemplo",
                }
            };
            resolve(respuesta);
        },2000);
    });
}

export async function realizarSolicitud() {
    try {
        const respuesta = await simulacionSolicitudHTTP();
        console.log(respuesta);
    } catch (error) {
        console.error(error.message);
    }
}