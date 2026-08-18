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


const ejecutarBusquedaIA = (criterio) => {
        const productos = document.querySelectorAll('.producto');
        let coincidencias = 0;

        productos.forEach((producto) => {
            // Obtener el h3 dentro del producto
            const tituloElemento = producto.querySelector('h3');
            
            if (tituloElemento) {
                const tituloTexto = tituloElemento.textContent.toLowerCase();

                // 2. Comprobar si el título contiene el término buscado
                if (termino === '' || tituloTexto.includes(termino)) { /* el includes(x) es el que muestra si esta o no ya escrita en la constante de h3 */
                    producto.style.display = ''; // Muestra el producto
                    producto.style.opacity = '1';
                    coincidencias++;
                } else {
                    producto.style.display = 'none'; // Oculta el producto
                    producto.style.opacity = '0';
                }
            }
        });

        console.log(`[KEFEX AI Search]: "${criterio}" -> ${coincidencias} productos encontrados.`);
    };

    // Evento al enviar el formulario (Enter o Clic en Lupa)
    if (globalSearchForm) {
        globalSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput ? searchInput.value : ''; /* ? adquiere el valor true/false */
            ejecutarBusquedaIA(query);
        });
    }

    // Evento opcional en tiempo real mientras el usuario escribe (Input event)
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            ejecutarBusquedaIA(e.target.value);
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
/* Forum */

/*KEFEX FORUM — INTERACTION ENGINE*/
document.addEventListener('DOMContentLoaded', () => {
    const forumRoot = document.getElementById('main-forum');
    if (!forumRoot) return;

    /*    1. Utilidades*/
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateCounter = (element, targetText, duration = 700) => {
        if (!element) return;
        if (prefersReducedMotion) {
            element.textContent = targetText;
            return;
        }

        const numeric = Number(String(targetText).replace(/[^0-9.]/g, ''));
        if (!Number.isFinite(numeric)) return;

        const suffix = String(targetText).replace(/[0-9.]/g, '');
        const startedAt = performance.now();

        const tick = now => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = numeric * eased;
            element.textContent = `${Math.round(value).toLocaleString('es-CO')}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    };

    /*    2. Reveal progresivo al entrar en viewport*/
    const revealItems = forumRoot.querySelectorAll(
        '.forum-sidebar-left .sidebar-section, .forum-main-content > *, .forum-sidebar-right > *'
    );

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('forum-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

        revealItems.forEach(item => {
            item.classList.add('forum-reveal-ready');
            revealObserver.observe(item);
        });
    }

    /*    3. Métricas animadas*/
    forumRoot.querySelectorAll('.metric-value').forEach(metric => {
        const original = metric.textContent.trim();
        metric.dataset.value = original;
    });

    const metricObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const metric = entry.target;
            animateCounter(metric, metric.dataset.value);
            metricObserver.unobserve(metric);
        });
    }, { threshold: 0.8 });

    forumRoot.querySelectorAll('.metric-value').forEach(metric => metricObserver.observe(metric));

    /*    4. Tabs del foro — filtrado semántico*/
    const tabs = [...forumRoot.querySelectorAll('.tab-btn')];
    const posts = [...forumRoot.querySelectorAll('.post-item-card')];

    const postMeta = posts.map((post, index) => ({
        post,
        index,
        score: Number(post.querySelector('.vote-count')?.textContent || 0),
        rating: Number(post.querySelector('.score-number')?.textContent || 0),
        comments: Number((post.querySelector('.action-btn')?.textContent || '').replace(/[^0-9]/g, '')) || 0,
        excerpt: post.textContent.toLowerCase()
    }));

    const applyTab = label => {
        let ordered = [...postMeta];

        if (label.includes('valorados')) {
            ordered.sort((a, b) => b.rating - a.rating);
        } else if (label.includes('discutidos')) {
            ordered.sort((a, b) => b.comments - a.comments);
        } else if (label.includes('responder')) {
            ordered = ordered.filter(item => item.comments === 0);
        } else {
            ordered.sort((a, b) => a.index - b.index);
        }

        const fragment = document.createDocumentFragment();
        ordered.forEach(item => fragment.appendChild(item.post));
        const container = forumRoot.querySelector('#posts-container');
        if (container) container.appendChild(fragment);

        posts.forEach(post => {
            post.animate(
                [{ opacity: .35, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }],
                { duration: prefersReducedMotion ? 0 : 260, easing: 'ease-out' }
            );
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            applyTab(tab.textContent.trim().toLowerCase());
        });
    });

    /*    5. Categorías — estado visual + filtrado de publicaciones*/
    const categoryButtons = [...forumRoot.querySelectorAll('.category-item')];

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(item => item.classList.remove('active'));
            button.classList.add('active');

            const categoryText = button.textContent.trim().toLowerCase();
            if (categoryText.includes('e-commerce')) {
                posts.forEach(post => post.hidden = false);
            } else {
                posts.forEach(post => {
                    post.hidden = !post.textContent.toLowerCase().includes(categoryText);
                });
            }
        });
    });

    /*    6. Votos — upvote/downvote con estado exclusivo*/
    posts.forEach(post => {
        const voteBox = post.querySelector('.vote-control');
        const countElement = post.querySelector('.vote-count');
        const up = post.querySelector('.vote-up');
        const down = post.querySelector('.vote-down');
        if (!voteBox || !countElement || !up || !down) return;

        let count = Number(countElement.textContent) || 0;
        let state = 0; // -1 down, 0 neutral, 1 up

        const syncVote = nextState => {
            count += nextState - state;
            state = nextState;
            countElement.textContent = count;
            voteBox.classList.toggle('is-upvoted', state === 1);
            voteBox.classList.toggle('is-downvoted', state === -1);
            up.style.color = state === 1 ? '#34d399' : '';
            down.style.color = state === -1 ? '#fb7185' : '';
            countElement.animate(
                [{ transform: 'scale(.86)', opacity: .55 }, { transform: 'scale(1)', opacity: 1 }],
                { duration: prefersReducedMotion ? 0 : 180, easing: 'ease-out' }
            );
        };

        up.addEventListener('click', event => {
            event.preventDefault();
            syncVote(state === 1 ? 0 : 1);
        });

        down.addEventListener('click', event => {
            event.preventDefault();
            syncVote(state === -1 ? 0 : -1);
        });
    });

    /*    7. Guardados — estado persistente local*/
    forumRoot.querySelectorAll('.action-btn').forEach(button => {
        if (!button.textContent.toLowerCase().includes('guardar')) return;

        button.addEventListener('click', event => {
            event.preventDefault();
            button.classList.toggle('is-saved');
            const icon = button.querySelector('i');
            const saved = button.classList.contains('is-saved');

            if (icon) {
                icon.className = saved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
            }

            const originalText = button.textContent.replace(/^\s*(Guardar|Guardado)/i, '').trim();
            button.lastChild.textContent = saved ? ' Guardado' : ' Guardar';

            button.animate(
                [{ transform: 'scale(.96)' }, { transform: 'scale(1)' }],
                { duration: prefersReducedMotion ? 0 : 180, easing: 'ease-out' }
            );
        });
    });

    /*    8. Nueva publicación — modal generado desde JS*/
    const createPostBtn = document.getElementById('btn-create-post');

    const buildPostDialog = () => {
        if (document.getElementById('kefex-post-dialog')) return document.getElementById('kefex-post-dialog');

        const dialog = document.createElement('dialog');
        dialog.id = 'kefex-post-dialog';
        dialog.className = 'kefex-post-dialog';
        dialog.innerHTML = `
            <form method="dialog" class="kefex-post-form">
                <div class="kefex-dialog-head">
                    <div>
                        <span class="dialog-kicker">COMUNIDAD KEFEX</span>
                        <h2>Nueva publicación</h2>
                    </div>
                    <button class="dialog-close" value="cancel" aria-label="Cerrar">×</button>
                </div>
                <label>
                    Título
                    <input id="new-post-title" type="text" maxlength="90" placeholder="¿Qué experiencia quieres compartir?" required>
                </label>
                <label>
                    Categoría
                    <select id="new-post-category">
                        <option>E-commerce</option>
                        <option>Tecnología</option>
                        <option>Moda</option>
                        <option>Gaming</option>
                        <option>Marketplace</option>
                    </select>
                </label>
                <label>
                    Tu experiencia
                    <textarea id="new-post-body" rows="5" maxlength="500" placeholder="Cuenta tu experiencia, opinión o análisis..." required></textarea>
                </label>
                <div class="kefex-form-actions">
                    <button value="cancel" class="dialog-secondary">Cancelar</button>
                    <button id="publish-forum-post" value="default" class="dialog-primary">Publicar</button>
                </div>
            </form>
        `;

        document.body.appendChild(dialog);
        return dialog;
    };

    createPostBtn?.addEventListener('click', () => {
        const dialog = buildPostDialog();
        dialog.showModal();
    });

    document.addEventListener('click', event => {
        if (event.target?.id !== 'publish-forum-post') return;

        const title = document.getElementById('new-post-title')?.value.trim();
        const category = document.getElementById('new-post-category')?.value;
        const body = document.getElementById('new-post-body')?.value.trim();
        if (!title || !body) return;

        const post = document.createElement('article');
        post.className = 'post-item-card forum-new-post-enter';
        post.innerHTML = `
            <div class="vote-control">
                <button class="btn-vote vote-up" aria-label="Votar a favor"><i class="fa-solid fa-chevron-up"></i></button>
                <span class="vote-count">1</span>
                <button class="btn-vote vote-down" aria-label="Votar en contra"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div class="post-body">
                <div class="post-author-row">
                    <span class="author-name">Tú</span>
                    <span class="post-time">ahora</span>
                    <span class="badge-verified"><i class="fa-solid fa-circle-check"></i> Publicado</span>
                </div>
                <h3 class="post-title"></h3>
                <p class="post-excerpt"></p>
                <div class="post-tags-row"><span class="tag tag-tech"></span></div>
                <div class="post-actions-row">
                    <button class="action-btn"><i class="fa-regular fa-comment"></i> 0 comentarios</button>
                    <button class="action-btn"><i class="fa-regular fa-bookmark"></i> Guardar</button>
                </div>
            </div>
            <div class="post-score-box">
                <span class="score-number">0.0</span>
                <div class="score-stars">☆☆☆☆☆</div>
            </div>
        `;

        post.querySelector('.post-title').textContent = title;
        post.querySelector('.post-excerpt').textContent = body;
        post.querySelector('.tag').textContent = category;

        const container = forumRoot.querySelector('#posts-container');
        if (container) container.prepend(post);

        /* Registrar interacciones del nuevo post usando los mismos patrones. */
        post.querySelector('.vote-up')?.addEventListener('click', () => {
            const count = post.querySelector('.vote-count');
            count.textContent = String(Number(count.textContent) + 1);
        });

        post.querySelector('.vote-down')?.addEventListener('click', () => {
            const count = post.querySelector('.vote-count');
            count.textContent = String(Math.max(0, Number(count.textContent) - 1));
        });

        post.querySelector('.action-btn:last-child')?.addEventListener('click', event => {
            event.currentTarget.classList.toggle('is-saved');
        });

        setTimeout(() => document.getElementById('kefex-post-dialog')?.close(), 0);
    });

    /*    9. Filtros — pequeño drawer/feedback sin markup extra*/
    const filterBtn = forumRoot.querySelector('.btn-filter-settings');
    filterBtn?.addEventListener('click', () => {
        forumRoot.classList.toggle('filters-focus-mode');
        filterBtn.innerHTML = forumRoot.classList.contains('filters-focus-mode')
            ? '<i class="fa-solid fa-xmark"></i> Cerrar'
            : '<i class="fa-solid fa-sliders"></i> Filtros';

        posts.forEach(post => {
            post.style.outline = forumRoot.classList.contains('filters-focus-mode')
                ? '1px solid rgba(99,102,241,.18)'
                : '';
        });
    });

    /*    10. Mini AI Assistant — comportamiento local de demostración*/
    const aiForm = document.getElementById('forum-ai-form');
    const aiInput = aiForm?.querySelector('input');

    aiForm?.addEventListener('submit', event => {
        event.preventDefault();
        const question = aiInput?.value.trim();
        if (!question) return;

        const answer = /amazon/i.test(question)
            ? 'Puedo ayudarte a comparar envíos, devoluciones, reputación y opiniones de la comunidad sobre Amazon.'
            : /precio|barato|presupuesto/i.test(question)
                ? 'Puedo ayudarte a encontrar conversaciones y análisis relacionados con precio, ofertas y relación calidad-precio.'
                : 'Puedo orientarte por reputación, precio, envíos, devoluciones, soporte y experiencias de otros usuarios.';

        const panel = document.createElement('div');
        panel.className = 'forum-ai-toast';
        panel.innerHTML = `
            <strong>KEFEX AI</strong>
            <span>${answer}</span>
        `;
        document.body.appendChild(panel);

        aiInput.value = '';
        requestAnimationFrame(() => panel.classList.add('visible'));
        setTimeout(() => {
            panel.classList.remove('visible');
            setTimeout(() => panel.remove(), 300);
        }, 4200);
    });
});


/* ABRIR DIALOGS DE PRODUCTO */

const dialogo = document.getElementById('dialog-product-sennheiser');
const botonToggleDialog = document.getElementById('btn-card-action');
const botonCerrar = document.getElementById('boton-cerrar');



function abrirProducto() {
  dialogo.showModal(); // Método nativo de HTML5 para abrir modales
}
botonToggleDialog.addEventListener('click', abrirProducto)
botonCerrar.addEventListener('click', () => {
  dialogo.close(); // Método nativo para cerrar sin alterar las secciones de fondo
});