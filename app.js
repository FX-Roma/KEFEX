document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos del DOM
    const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarDrawer = document.getElementById('sidebar-drawer');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const globalSearchForm = document.getElementById('global-search-form');
    const searchInput = document.getElementById('search-products-btn');

    // 2. Control de Apertura / Cierre de Sidebar
    const openSidebar = () => {
        sidebarDrawer.classList.add('active');
        sidebarOverlay.classList.add('active');
    };

    const closeSidebar = () => {
        sidebarDrawer.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    };

    // Eventos para el menú
    if (toggleSidebarBtn) toggleSidebarBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // 3. Simulación de Buscador Inteligente
    if (globalSearchForm) {
        globalSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                console.log(`[KEFEX AI Search] Procesando consulta: "${query}"`);
                alert(`Buscador Inteligente KEFEX:\nAnalizando intención para: "${query}"`);
            }
        });
    }

    console.log("⚡ KEFEX Core Engine v1.0 Inicializado con éxito.");
});