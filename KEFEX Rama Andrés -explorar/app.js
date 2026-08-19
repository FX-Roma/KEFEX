// ============================================================
// KEFEX - CONTROL DEL MENÚ GLOBAL EN LAS PÁGINAS DE ANDRÉS
// ============================================================
// REVISIÓN:
// El HTML del menú ya existía en algunas páginas, pero sin este código
// el botón hamburguesa no podía abrir/cerrar el sidebar.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. Guardamos los elementos que necesitamos controlar.
    const openButton = document.getElementById("toggle-sidebar-btn");
    const closeButton = document.getElementById("close-sidebar-btn");
    const sidebar = document.getElementById("sidebar-drawer");
    const overlay = document.getElementById("sidebar-overlay");

    // 2. Estas funciones solo cambian una clase. El movimiento real lo hace CSS.
    function openSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.add("active");
        overlay.classList.add("active");
    }

    function closeSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }

    // 3. Eventos del menú.
    if (openButton) openButton.addEventListener("click", openSidebar);
    if (closeButton) closeButton.addEventListener("click", closeSidebar);
    if (overlay) overlay.addEventListener("click", closeSidebar);

    // 4. Escape también cierra el menú. Es una mejora de accesibilidad/UX.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeSidebar();
    });
});


// ============================================================
// EXPLORAR - INTERACCIONES PROPIAS
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.querySelector(".theme-toggle");

    // Modo claro/oscuro. La apariencia se resuelve en CSS mediante body.light-mode.
    if (themeButton) {
        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
            themeButton.textContent = document.body.classList.contains("light-mode")
                ? "dark mode 🌙"
                : "light mode ☀️";
        });
    }

    // Botones de recomendar.
    document.querySelectorAll(".recommend-button").forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("recommended");
            button.textContent = button.classList.contains("recommended")
                ? "Recomendado ✓"
                : "Recomendar";
        });
    });

    // Botones para guardar en tablero.
    document.querySelectorAll(".board-button").forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("saved");
            button.textContent = button.classList.contains("saved")
                ? "Guardado ✓"
                : "Tablero";
        });
    });

    // Comentarios: se crea/cierra un textarea debajo del post correspondiente.
    document.querySelectorAll(".comment-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const post = button.closest(".post");
            if (!post) return;

            const existingBox = post.querySelector(".comment-box");
            if (existingBox) {
                existingBox.remove();
                return;
            }

            const box = document.createElement("div");
            box.className = "comment-box";
            box.innerHTML = `
                <textarea placeholder="Escribe tu comentario..."></textarea>
                <button class="publish-comment" type="button">Publicar</button>
            `;
            post.appendChild(box);
        });
    });
});
