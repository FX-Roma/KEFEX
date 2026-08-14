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

// ==================================================
// KEFEX MAIN DASHBOARD INTERACTION ENGINE
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LÓGICA DEL CARRUSEL TIPO APPLE STORE
    const carouselWrapper = document.getElementById('apple-carousel');
    const carouselNextBtn = document.getElementById('carousel-next-btn');
    const carouselDotsContainer = document.getElementById('carousel-dots');

    if (carouselWrapper && carouselNextBtn && carouselDotsContainer) {
        const cards = carouselWrapper.querySelectorAll('.apple-card');
        const scrollAmount = 280; // Ancho tarjeta + gap

        // Crear puntos indicadores según el número de tarjetas
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            carouselDotsContainer.appendChild(dot);
        });

        const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');

        // Botón Siguiente con scrollBy()
        carouselNextBtn.addEventListener('click', () => {
            const maxScrollLeft = carouselWrapper.scrollWidth - carouselWrapper.clientWidth;
            
            if (carouselWrapper.scrollLeft >= maxScrollLeft - 10) {
                // Volver al inicio si llega al final
                carouselWrapper.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carouselWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });

        // Actualizar punto activo según el scroll manual o asistido
        carouselWrapper.addEventListener('scroll', () => {
            const activeIndex = Math.round(carouselWrapper.scrollLeft / scrollAmount);
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === activeIndex);
            });
        });
    }

    // 2. REVEAL ON SCROLL (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target); // Animación solo una vez
                }
            });
        }, observerOptions);

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback para navegadores antiguos
        revealElements.forEach(el => el.classList.add('visible'));
    }
});