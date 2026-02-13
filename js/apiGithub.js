//Crear variable username para guardar el nombre de mi usuario de github
const username = "JonIbarrola12"; 
/*El addEventListener nos permite llamar a la funcion obtenerDatosGithub 
al cargar el documento*/
document.addEventListener("DOMContentLoaded", () => {
    obtenerDatosGithub(username);
});
//Funcion para obtener los datos de github
function obtenerDatosGithub(user) {
    //la funcion fetch hace la llamada a la api
    fetch(`https://api.github.com/users/${user}`)
        //Si la respuesta es diferente a 20X mostrara el siguiente error
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos del usuario");
            }
            return response.json();
        })
        /*Si la respuesta es parecida a 20X guardara los datos en la variable perfil y 
        llamara a la funcion mostrardatos pasandole como parametro la variable perfil*/
        .then(data => {
            const perfil = {
                nombre: data.login,
                avatar: data.avatar_url,
                repositorios: data.public_repos,
                perfilUrl: data.html_url
            };
            
            mostrarDatos(perfil);
        })
        /*Si da error Mostrara el error en consola y mostrara en el footer el texto 
        No se pudieron cargar los datos de GitHub*/
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("github-footer").innerHTML =
                "<p>No se pudieron cargar los datos de GitHub</p>";
        });
}
//Funcion para mostrar los datos del perfil
function mostrarDatos(perfil) {
    //Crea la variable que recibe el div con el id github-footer
    const contenedor = document.getElementById("github-footer");
    //Se le añade el siguiente contenido al div de contenedor
    contenedor.innerHTML = `
        <div class="github-info">
            <a href="${perfil.perfilUrl}" target="_blank">
                <img src="${perfil.avatar}" alt="Avatar GitHub" class="github-avatar">
            </a>
            <p>
                <strong>${perfil.nombre}</strong><br>
                Repositorios públicos: ${perfil.repositorios}
            </p>
        </div>
    `;
}