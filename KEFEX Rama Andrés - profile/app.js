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
// PERFIL - PESTAÑAS
// ============================================================
// Por ahora las tres pestañas comparten el mismo grid de ejemplo.
// La clase .active ya queda lista para conectar filtros/datos después.
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".profile-tabs button");

    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            tabButtons.forEach(function (item) {
                item.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
});
