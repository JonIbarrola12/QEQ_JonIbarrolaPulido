/*El addEventListener nos permite llamar a la funcion generarPersonajeAdivinar 
al cargar el documento*/
document.addEventListener("DOMContentLoaded", () => {
    generarPersonajeAdivinar();
});
//Definicion de la variable que guarda el persoanjeSecreto
let personajeSecreto = null;
//funcion que genera el Personaje a adivinar de forma aleatoria
function generarPersonajeAdivinar() {
    //genera un indice aleatorio menor o igual a la de la longitud del array
    const indice = Math.floor(Math.random() * personajes.length);
    //Guarda en la varible personaje secreto el registro de personaje con el indice calculado anteriormente
    personajeSecreto = personajes[indice];
    //Crea una variable contenedor donde almacena el div con el id adivinar del index.html
    const contenedor = document.getElementById("adivinar");
    //Le añade a la variable contenedor el siguiente codigo html
    contenedor.innerHTML = `
        <h3>Personaje a adivinar</h3>
        <img src="${personajeSecreto.imagen}" width="150">
        <p>${personajeSecreto.nombre}</p>
    `;
}