/*El addEventListener nos permite llamar a la funcion generarCuadricula 
al cargar el documento*/
document.addEventListener("DOMContentLoaded", () => {
    generarCuadricula();
});
function generarCuadricula() {
    //Crea la variable contenedor que recibe el div con id grid del index.html y lo vacia
    const contenedor = document.getElementById("grid");
    contenedor.innerHTML = "";
    //Recibe los personajes y los mezcla de forma aleatoria mediante un sort 
    const personajesMezclados = [...personajes].sort(() => Math.random() - 0.5);
    //Recorre el array de personajesMezclados
    personajesMezclados.forEach(personaje => {
        //Crea una variable div que crea un elemnto div y se le añade la clase card
        const div = document.createElement("div");
        div.classList.add("card");
        /*Crea una variable img que crea un elemnto img y se le añade un valor a su src 
        y se guardan datos para alternar la imagen*/
        const img = document.createElement("img");
        img.src = personaje.imagen;
        img.dataset.original = personaje.imagen;
        img.dataset.estado = "original";
        /*Se le añade un Listener a la img en la que si se clicka 
        esta cambiara entre la imagen original y la de miyazaki*/
        img.addEventListener("click", () => {

            if (img.dataset.estado === "original") {
                img.src = "../imagenes/miyazaki.jpeg";
                img.dataset.estado = "miyazaki";
            } else {
                img.src = img.dataset.original;
                img.dataset.estado = "original";
            }

        });
        /*Crea una variable nombre que crea un elemnto p y 
        se le añade como contenido de texto el nombre del personaje*/
        const nombre = document.createElement("p");
        nombre.textContent = personaje.nombre;

        div.appendChild(img);
        div.appendChild(nombre);
        contenedor.appendChild(div);
    });
}