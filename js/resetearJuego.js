//Funcion para resetar el juego
function resetearJuego() {
    /*Muestra un alert con el texto ¿Seguro que quieres resetear el juego? y 
    y las opciones Aceptar y Cancelar y guarda true o false dependiendo de la respuesta*/
    const confirmar = confirm("¿Seguro que quieres resetear el juego?");
    //Si se le da ha aceptar ejecuta las funciones generarCuadricula y generarPersoanjeAdivinar
    if (confirmar) {
        generarCuadricula();
        generarPersonajeAdivinar();
    }
}