const intereses = document.querySelectorAll(".interes");
const cantidad = document.querySelector("#cantidad");
const continuar = document.querySelector("#continuar");

let interesesSeleccionados = [];

intereses.forEach(interes => {

    interes.addEventListener("click", () => {

        interes.classList.toggle("seleccionado");

        const nombre = interes.dataset.interes;

        if (interes.classList.contains("seleccionado")) {

            interesesSeleccionados.push(nombre);

        } else {

            interesesSeleccionados =
                interesesSeleccionados.filter(
                    item => item !== nombre
                );
        }

        cantidad.textContent =
            interesesSeleccionados.length;

        console.log(interesesSeleccionados);
    });

});


continuar.addEventListener("click", () => {

    if (interesesSeleccionados.length === 0) {

        alert("Selecciona al menos una categoría");

        return;
    }

    localStorage.setItem(
        "interesesNexora",
        JSON.stringify(interesesSeleccionados)
    );

    console.log(
        "Intereses guardados:",
        interesesSeleccionados
    );

    alert("Intereses guardados correctamente");

});





/*iconos */
const btnNotificaciones = document.getElementById("btnNotificaciones");
const btnFavoritos = document.getElementById("btnFavoritos");
const btnCarrito = document.getElementById("btnCarrito");

const menuNotificaciones = document.getElementById("menuNotificaciones");
const menuFavoritos = document.getElementById("menuFavoritos");
const menuCarrito = document.getElementById("menuCarrito");


function cerrarMenus() {

    menuNotificaciones.classList.remove("mostrar");
    menuFavoritos.classList.remove("mostrar");
    menuCarrito.classList.remove("mostrar");

}


// NOTIFICACIONES

btnNotificaciones.addEventListener("click", function(event) {

    event.stopPropagation();

    const abierto = menuNotificaciones.classList.contains("mostrar");

    cerrarMenus();

    if (!abierto) {
        menuNotificaciones.classList.add("mostrar");
    }

});


// FAVORITOS

btnFavoritos.addEventListener("click", function(event) {

    event.stopPropagation();

    const abierto = menuFavoritos.classList.contains("mostrar");

    cerrarMenus();

    if (!abierto) {
        menuFavoritos.classList.add("mostrar");
    }

});


// CARRITO

btnCarrito.addEventListener("click", function(event) {

    event.stopPropagation();

    const abierto = menuCarrito.classList.contains("mostrar");

    cerrarMenus();

    if (!abierto) {
        menuCarrito.classList.add("mostrar");
    }

});


// CERRAR AL HACER CLICK AFUERA

document.addEventListener("click", function() {

    cerrarMenus();

});