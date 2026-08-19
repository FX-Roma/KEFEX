// ==========================================
// KEFEX - TIENDA
// CARRITO Y FAVORITOS
// ==========================================


// ==========================================
// DATOS GUARDADOS
// ==========================================

let carrito =
    JSON.parse(localStorage.getItem("carritoKEFEX")) || [];

let favoritos =
    JSON.parse(localStorage.getItem("favoritosKEFEX")) || [];


// ==========================================
// CONTADORES
// ==========================================

const contadorCarrito =
    document.getElementById("contadorCarrito");

const contadorFavoritos =
    document.getElementById("contadorFavoritos");


// ==========================================
// BOTONES DE LA TIENDA
// ==========================================

const botonesAgregar =
    document.querySelectorAll(".agregar");

const botonesFavoritos =
    document.querySelectorAll(".favorito");


// ==========================================
// OBTENER INFORMACIÓN DEL PRODUCTO
// ==========================================

function obtenerProducto(tarjeta) {

    let nombre =
        tarjeta.querySelector("h2").textContent.trim();

    let categoria =
        tarjeta
        .querySelector(".producto-categoria")
        .textContent.trim();

    let precioTexto =
        tarjeta
        .querySelector(".producto-abajo strong")
        .textContent;

    let precio =
        Number(
            precioTexto
                .replace("$", "")
                .replace(/\./g, "")
                .trim()
        );

    let imagen =
        tarjeta
        .querySelector("img")
        .getAttribute("src");


    return {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        imagen: imagen,
        cantidad: 1
    };

}


// ==========================================
// AGREGAR AL CARRITO
// ==========================================

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let tarjeta =
            boton.closest(".producto");


        let producto =
            obtenerProducto(tarjeta);


        let productoExistente =
            carrito.find(function(item) {

                return item.nombre === producto.nombre;

            });


        if (productoExistente) {

            productoExistente.cantidad++;

        } else {

            carrito.push(producto);

        }


        // Guardar

        localStorage.setItem(
            "carritoKEFEX",
            JSON.stringify(carrito)
        );


        // Actualizar contador

        actualizarContadorCarrito();


        // Cambiar botón

        boton.textContent = "✓ Agregado";


        setTimeout(function() {

            boton.textContent = "+ Carrito";

        }, 1000);

    });

});


// ==========================================
// CONTADOR CARRITO
// ==========================================

function actualizarContadorCarrito() {

    let cantidad = 0;


    carrito.forEach(function(producto) {

        cantidad =
            cantidad + producto.cantidad;

    });


    contadorCarrito.textContent =
        cantidad;

}


// ==========================================
// FAVORITOS
// ==========================================

botonesFavoritos.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let tarjeta =
            boton.closest(".producto");


        let producto =
            obtenerProducto(tarjeta);


        let existe =
            favoritos.find(function(item) {

                return item.nombre === producto.nombre;

            });


        if (existe) {

            // Quitar de favoritos

            favoritos =
                favoritos.filter(function(item) {

                    return item.nombre !== producto.nombre;

                });


            boton.textContent = "♡";

            boton.classList.remove("activo");

        } else {

            // Agregar a favoritos

            favoritos.push(producto);

            boton.textContent = "♥";

            boton.classList.add("activo");

        }


        // Guardar

        localStorage.setItem(
            "favoritosKEFEX",
            JSON.stringify(favoritos)
        );


        // Actualizar contador

        actualizarContadorFavoritos();

    });

});


// ==========================================
// CONTADOR FAVORITOS
// ==========================================

function actualizarContadorFavoritos() {

    contadorFavoritos.textContent =
        favoritos.length;

}


// ==========================================
// MARCAR FAVORITOS GUARDADOS
// ==========================================

function marcarFavoritos() {

    botonesFavoritos.forEach(function(boton) {

        let tarjeta =
            boton.closest(".producto");


        let nombre =
            tarjeta
            .querySelector("h2")
            .textContent
            .trim();


        let existe =
            favoritos.some(function(producto) {

                return producto.nombre === nombre;

            });


        if (existe) {

            boton.textContent = "♥";

            boton.classList.add("activo");

        }

    });

}


// ==========================================
// INICIAR
// ==========================================

actualizarContadorCarrito();

actualizarContadorFavoritos();

marcarFavoritos();

// ==========================================
// FILTRO DE CATEGORÍAS
// ==========================================

const botonesCategoria = document.querySelectorAll(".categoria");
const productos = document.querySelectorAll(".producto");

botonesCategoria.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Quitar la clase activa de todos los botones
        botonesCategoria.forEach(function(boton) {
            boton.classList.remove("activa");
        });

        // Activar el botón seleccionado
        boton.classList.add("activa");

        // Obtener el nombre de la categoría
        let categoriaSeleccionada =
            boton.textContent.trim().toUpperCase();

        // Recorrer los productos
        productos.forEach(function(producto) {

            let categoriaProducto =
                producto
                .querySelector(".producto-categoria")
                .textContent
                .trim()
                .toUpperCase();

            // Si seleccionó TODOS
            if (categoriaSeleccionada === "TODOS") {

                producto.style.display = "";

            }

            // Si la categoría coincide
            else if (categoriaProducto === categoriaSeleccionada) {

                producto.style.display = "";

            }

            // Si no coincide
            else {

                producto.style.display = "none";

            }

        });

    });

});