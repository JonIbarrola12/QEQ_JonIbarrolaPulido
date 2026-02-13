const username = "JonIbarrola12"; 
document.addEventListener("DOMContentLoaded", () => {
    obtenerDatosGithub(username);
});
function obtenerDatosGithub(user) {

    fetch(`https://api.github.com/users/${user}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos del usuario");
            }
            return response.json();
        })
        .then(data => {
            const perfil = {
                nombre: data.login,
                avatar: data.avatar_url,
                repositorios: data.public_repos,
                perfilUrl: data.html_url
            };

            mostrarDatos(perfil);
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("github-footer").innerHTML =
                "<p>No se pudieron cargar los datos de GitHub</p>";
        });
}

function mostrarDatos(perfil) {

    const contenedor = document.getElementById("github-footer");

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