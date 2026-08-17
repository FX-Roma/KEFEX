//Defaul header y menu lateral EXLEYDER
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

// APARTADO HOME EXLEYDER

// KEFEX MAIN DASHBOARD INTERACTION ENGINE

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


/* COUNTER */

// 1. Referencias al DOM (Contador en el Header y todos los botones de añadir)
const cartCounterBadge = document.getElementById('counter-badge');
const addToCartButtons = document.querySelectorAll('.btn-card-action, .btn-add-cart');

// 2. Obtener el valor inicial desde el HTML (por defecto 2)
let cartCount = cartCounterBadge ? parseInt(cartCounterBadge.textContent) || 0 : 0;

// 3. Función pura para actualizar el contador en la interfaz
function handleAddToCart(event) {
    if (event) event.preventDefault();

    // Incrementamos el contador global
    cartCount++;

    if (cartCounterBadge) {
        // Actualizamos el número en la badge del Header
        cartCounterBadge.textContent = cartCount;

        // Feedback visual: Animación Glow de Microinteracción (estándar KEFEX)
        cartCounterBadge.style.transform = 'scale(1.3)';
        cartCounterBadge.style.transition = 'transform 0.2s ease';

        setTimeout(() => {
            cartCounterBadge.style.transform = 'scale(1)';
        }, 200);
    }

    console.log(`[KEFEX Cart]: Producto añadido. Total en carrito: ${cartCount}`);
}


if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
} else {
    console.warn('[KEFEX Cart]: No se encontraron botones de compra en el DOM.');
}

//chatbox

(function(d, t) {
    var v = d.createElement(t), 
        s = d.getElementsByTagName(t)[0];

    v.onload = function() {
        // 1. Inicialización del widget de Voiceflow
        window.voiceflow.chat.load({
            verify: { projectID: '6a7f4d15fc966ec35a20683b' },
            url: 'https://general-runtime.voiceflow.com',
            voice: {
                url: "https://runtime-api.voiceflow.com"
            }
        }).then(() => {
            // 2. Escuchar el evento click en btn-product-primary
            const btnProductPrimary = document.getElementById('btn-product-secondary');
            
            if (btnProductPrimary) {
                btnProductPrimary.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.voiceflow.chat.open(); 
                });
            } else {
                console.warn('[KEFEX Voiceflow]: No se encontró el elemento con ID "btn-product-primary" en el DOM.');
            }
        });
    };

    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
    v.type = "text/javascript"; 
    s.parentNode.insertBefore(v, s);

})(document, 'script');

/* Forum */
