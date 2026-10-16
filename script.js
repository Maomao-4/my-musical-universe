const canciones = document.querySelectorAll(".cancion");
const tituloActual = document.getElementById("titulo-actual");
const artistaActual = document.getElementById("artista-actual");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sin-resultados");

// Seleccionar una canción
canciones.forEach(function (cancion) {
    const boton = cancion.querySelector(".seleccionar");
    const favorito = cancion.querySelector(".favorito");

    boton.addEventListener("click", function () {
        tituloActual.textContent = cancion.dataset.titulo;
        artistaActual.textContent = cancion.dataset.artista;
    });

    // Marcar o quitar de favoritos
    favorito.addEventListener("click", function () {
        const activo = favorito.classList.toggle("activo");

        favorito.textContent = activo ? "♥" : "♡";
        favorito.setAttribute("aria-pressed", activo);
    });
});

// Buscar por título o artista
buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase().trim();
    let encontradas = 0;

    canciones.forEach(function (cancion) {
        const titulo = cancion.dataset.titulo.toLowerCase();
        const artista = cancion.dataset.artista.toLowerCase();

        const coincide =
            titulo.includes(texto) || artista.includes(texto);

        cancion.hidden = !coincide;

        if (coincide) {
            encontradas++;
        }
    });

    sinResultados.hidden = encontradas > 0;
});