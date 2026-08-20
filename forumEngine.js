import { FORUM_DATABASE_40 } from './forumData.js';
import { BookmarkManager } from './BookmarkManager.js';

/**
 * KEFEX Senior Forum & Product Engine v2.5
 */
class KefexForumEngine {
    constructor() {
        this.activeNavView = 'all'; 
        this.activeCategory = 'all'; 
        this.activeTopFilter = 'todos'; 
        
        this.container = document.getElementById('posts-container');
        this.banner = document.querySelector('.forum-banner');
        this.navLinks = document.querySelectorAll('.forum-nav a[data-nav]');
        this.categoryButtons = document.querySelectorAll('.category-item');
        this.topFilterButtons = document.querySelectorAll('.tab-btn');
        
        this.initOverlayAndDrawers();
        this.bindEvents();
        this.render();
    }

    initOverlayAndDrawers() {
        if (document.querySelector('.kefex-drawer-overlay')) return;

        this.overlay = document.createElement('div');
        this.overlay.className = 'kefex-drawer-overlay';

        this.detailDrawer = document.createElement('aside');
        this.detailDrawer.className = 'kefex-drawer detail-drawer';
        this.detailDrawer.innerHTML = `
            <div class="drawer-header">
                <span class="drawer-title"><i class="fa-solid fa-comments"></i> Detalle de Foro</span>
                <button class="btn-drawer-close" id="close-detail-drawer">&times;</button>
            </div>
            <div class="drawer-body" id="detail-drawer-body"></div>
        `;

        this.previewDrawer = document.createElement('aside');
        this.previewDrawer.className = 'kefex-drawer preview-drawer';
        this.previewDrawer.innerHTML = `
            <div class="drawer-header">
                <span class="drawer-title"><i class="fa-solid fa-eye"></i> Vista Previa Producto</span>
                <button class="btn-drawer-close" id="close-preview-drawer">&times;</button>
            </div>
            <div class="drawer-body" id="preview-drawer-body"></div>
        `;

        document.body.appendChild(this.overlay);
        document.body.appendChild(this.detailDrawer);
        document.body.appendChild(this.previewDrawer);
    }

    bindEvents() {
        // 1. Navegación Lateral Superior (Ver todos, Guardados, etc.)
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                const navView = link.getAttribute('data-nav') || 'all';
                this.switchNavView(navView);
            });
        });

        // 2. Filtro por Categorías
        this.categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const rawText = btn.querySelector('span')?.textContent?.trim().toLowerCase() || '';
                
                if (rawText.includes('e-commerce')) this.activeCategory = 'ecommerce';
                else if (rawText.includes('tecnología')) this.activeCategory = 'tecnologia';
                else if (rawText.includes('moda')) this.activeCategory = 'moda';
                else if (rawText.includes('hogar')) this.activeCategory = 'hogar';
                else if (rawText.includes('gaming')) this.activeCategory = 'gaming';
                else if (rawText.includes('belleza')) this.activeCategory = 'belleza';
                else if (rawText.includes('supermercado')) this.activeCategory = 'supermercado';
                else if (rawText.includes('marketplace')) this.activeCategory = 'marketplace';
                else this.activeCategory = 'all';

                this.categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.render();
            });
        });

        // 3. Pestañas Superiores
        this.topFilterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.activeTopFilter = btn.getAttribute('data-filter') || 'todos';
                this.topFilterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.render();
            });
        });

        // 4. Delegación de Eventos en las Publicaciones
        if (this.container) {
            this.container.addEventListener('click', (e) => {
                const postCard = e.target.closest('.post-item-card');
                if (!postCard) return;

                const postId = postCard.dataset.id;

                // Clic en Guardar
                const saveBtn = e.target.closest('.btn-save-action');
                if (saveBtn) {
                    e.preventDefault();
                    e.stopPropagation();

                    const isNowSaved = BookmarkManager.toggleSave(postId);
                    
                    if (this.activeNavView === 'saved') {
                        this.render(); // Re-renderizar para remover si estamos en la vista de Guardados
                    } else {
                        saveBtn.classList.toggle('is-saved', isNowSaved);
                        const icon = saveBtn.querySelector('i');
                        const label = saveBtn.querySelector('span');
                        if (icon) icon.className = isNowSaved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
                        if (label) label.textContent = isNowSaved ? ' Guardado' : ' Guardar';
                    }
                    return;
                }

                // Clic en Vista Previa de Producto (👁️)
                if (e.target.closest('.btn-quick-view')) {
                    e.stopPropagation();
                    this.openProductPreview(postId);
                    return;
                }

                // Votos
                if (e.target.closest('.btn-vote')) {
                    e.stopPropagation();
                    this.handleVote(e.target.closest('.btn-vote'), postCard);
                    return;
                }

                // Detalle del Post
                if (e.target.closest('.post-title') || e.target.closest('.post-excerpt')) {
                    this.openPostDetail(postId);
                }
            });
        }

        // Drawers
        this.overlay?.addEventListener('click', () => this.closeAllDrawers());
        document.getElementById('close-detail-drawer')?.addEventListener('click', () => this.closeAllDrawers());
        document.getElementById('close-preview-drawer')?.addEventListener('click', () => this.closeAllDrawers());
        
        window.addEventListener('storage', () => this.render());
    }

    switchNavView(view) {
        this.activeNavView = view;

        // Ocultar la sección Hero Banner al cambiar de vista
        if (this.banner) {
            this.banner.style.display = (view === 'all') ? 'block' : 'none';
        }

        this.render();
    }

    getFilteredDataset() {
        let dataset = FORUM_DATABASE_40;

        // 1. Filtro de Navegación (Sidebar)
        if (this.activeNavView === 'saved') {
            const savedIds = BookmarkManager.getSavedIds();
            dataset = dataset.filter(item => savedIds.includes(item.id));
        } else if (this.activeNavView === 'my-posts') {
            dataset = dataset.filter(item => item.author.name === 'Tú' || item.isUserPost);
        } else if (this.activeNavView === 'mentions') {
            dataset = dataset.filter(item => item.commentsCount > 30); // Criterio de demostración
        } else if (this.activeNavView === 'history') {
            dataset = dataset.slice(0, 5); // 5 publicaciones recientes
        }

        // 2. Filtro de Categoría
        if (this.activeCategory !== 'all') {
            dataset = dataset.filter(item => item.category === this.activeCategory);
        }

        // 3. Filtro de Pestañas
        if (this.activeTopFilter === 'valorados') {
            dataset = [...dataset].sort((a, b) => b.score - a.score);
        } else if (this.activeTopFilter === 'discutidos') {
            dataset = [...dataset].sort((a, b) => b.commentsCount - a.commentsCount);
        } else if (this.activeTopFilter === 'sin-responder') {
            dataset = dataset.filter(item => item.commentsCount === 0);
        }

        return dataset;
    }

    render() {
        const dataset = this.getFilteredDataset();
        const savedPostIds = BookmarkManager.getSavedIds();
        
        this.container.innerHTML = '';

        if (dataset.length === 0) {
            this.container.innerHTML = `
                <div class="post-item-card" style="grid-template-columns: 1fr; text-align: center; padding: 3rem;">
                    <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: #6366f1; margin-bottom: 1rem;"></i>
                    <h3 style="color: #f8fafc;">No hay publicaciones disponibles</h3>
                    <p style="color: #94a3b8; font-size: 0.85rem;">No se encontraron elementos para la vista "${this.activeNavView}".</p>
                </div>
            `;
            return;
        }

        const fragment = document.createDocumentFragment();

        dataset.forEach(post => {
            const isSaved = savedPostIds.includes(post.id);
            const article = document.createElement('article');
            article.className = 'post-item-card';
            article.dataset.id = post.id;

            article.innerHTML = `
                <div class="vote-control">
                    <button class="btn-vote vote-up" aria-label="Votar a favor"><i class="fa-solid fa-chevron-up"></i></button>
                    <span class="vote-count" style="font-family: monospace; font-weight: bold;">${post.votes}</span>
                    <button class="btn-vote vote-down" aria-label="Votar en contra"><i class="fa-solid fa-chevron-down"></i></button>
                </div>

                <div class="post-body">
                    <div class="post-author-row" style="display:flex; align-items:center; gap:8px; font-size:0.75rem;">
                        <span class="author-name" style="font-weight:700; color:#f8fafc;">${post.author.name}</span>
                        <span class="post-time" style="color:#94a3b8;">${post.date}</span>
                    </div>
                    
                    <h3 class="post-title" style="font-size:1rem; font-weight:700; color:#f8fafc; cursor:pointer;">${post.title}</h3>
                    <p class="post-excerpt" style="font-size:0.8rem; color:#94a3b8; line-height:1.5;">${post.excerpt}</p>
                    
                    <div class="post-tags-row" style="display:flex; gap:8px; margin: 8px 0;">
                        <span class="tag" style="font-size:0.68rem; background:rgba(99,102,241,0.15); color:#818cf8; padding:2px 8px; border-radius:4px;">${post.categoryLabel}</span>
                        <button class="btn-quick-view" style="background:rgba(6,182,212,0.12); border:1px solid rgba(6,182,212,0.3); color:#38d5ff; padding:4px 8px; border-radius:6px; font-size:0.72rem; cursor:pointer;">
                            <i class="fa-solid fa-eye"></i> Product View (${post.product.brand})
                        </button>
                    </div>

                    <div class="post-actions-row" style="display:flex; gap:16px; font-size:0.75rem; color:#94a3b8;">
                        <button class="action-btn" style="background:none; border:none; color:inherit; cursor:pointer;"><i class="fa-regular fa-comment"></i> ${post.commentsCount} comentarios</button>
                        
                        <button class="action-btn btn-save-action ${isSaved ? 'is-saved' : ''}" style="background:none; border:none; color:${isSaved ? '#818cf8' : 'inherit'}; cursor:pointer;">
                            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                            <span>${isSaved ? ' Guardado' : ' Guardar'}</span>
                        </button>
                    </div>
                </div>

                <div class="post-score-box" style="display:flex; flex-direction:column; align-items:flex-end; justify-content:center; border-left:1px solid rgba(148,163,184,0.1); padding-left:12px;">
                    <span class="score-number" style="font-family:monospace; font-weight:800; font-size:1.4rem; color:#f8fafc;">${post.score.toFixed(1)}</span>
                </div>
            `;

            fragment.appendChild(article);
        });

        this.container.appendChild(fragment);
    }

    findPostById(id) {
        return FORUM_DATABASE_40.find(p => p.id === id) || null;
    }

    handleVote(btnElement, postCard) {
        const countElement = postCard.querySelector('.vote-count');
        let votes = parseInt(countElement.textContent, 10);
        if (btnElement.classList.contains('vote-up')) votes += 1;
        if (btnElement.classList.contains('vote-down')) votes = Math.max(0, votes - 1);
        countElement.textContent = votes;
    }

    openPostDetail(postId) {
        const post = this.findPostById(postId);
        if (!post) return;
        const detailBody = document.getElementById('detail-drawer-body');
        detailBody.innerHTML = `
            <div style="padding:1rem;">
                <h2 style="color:#f8fafc; font-size:1.2rem; margin-bottom:0.5rem;">${post.title}</h2>
                <span style="color:#818cf8; font-size:0.75rem;">${post.author.name} • ${post.date}</span>
                <p style="color:#94a3b8; font-size:0.85rem; margin-top:1rem; line-height:1.6;">${post.excerpt}</p>
            </div>
        `;
        this.openDrawer(this.detailDrawer);
    }

/**
     * Renderiza la vista previa del producto en el Drawer utilizando el catálogo de datos.
     * @param {string} postId - ID de la publicación activa
     */
    openProductPreview(postId) {
        const post = this.findPostById(postId);
        if (!post || !post.product) return;

        const previewBody = document.getElementById('preview-drawer-body');
        if (!previewBody) return;

        const prod = post.product;
        // Imagen directa del producto con fallback resiliene
        const productImage = prod.image || 'Imagen/Kefex-ph.png';

        previewBody.innerHTML = `
            <!-- Tarjeta de Presentación Premium -->
            <div class="product-preview-card">
                <div style="position: relative; overflow: hidden; border-radius: 8px;">
                    <img src="${productImage}" 
                        alt="${prod.name}" 
                        onerror="this.src='${productImage}'" 
                        loading="lazy" 
                        style="width:100%; height:200px; object-fit:cover; display:block;">
                    
                    <span style="position: absolute; top: 10px; right: 10px; background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.4); color: #10b981; font-size: 0.65rem; font-weight: 700; padding: 4px 8px; border-radius: 6px; backdrop-filter: blur(4px);">
                        <i class="fa-solid fa-circle-check"></i> Verificado KEFEX
                    </span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 8px;">
                    <span style="font-size: 0.75rem; color: #06b6d4; font-weight: 700; font-family: var(--font-mono, monospace); text-transform: uppercase;">
                        ${prod.brand}
                    </span>
                    <h3 style="color: #f8fafc; font-size: 1.15rem; font-weight: 700; line-height: 1.3; margin: 0;">
                        ${prod.name}
                    </h3>
                </div>

                <div style="display: flex; align-items: baseline; gap: 8px; margin-top: 4px;">
                    <span style="font-family: var(--font-mono, monospace); color: #10b981; font-size: 1.4rem; font-weight: 800;">
                        ${prod.price}
                    </span>
                    <span style="font-size: 0.75rem; color: #94a3b8;">(Precio oficial)</span>
                </div>

                <a href="${prod.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-visit-store">
                    <h3>Ver Sitio Oficial</h3>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            <!-- Métricas del Foro -->
            <div style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 1rem; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <span style="display: block; font-size: 0.7rem; color: #94a3b8; font-family: var(--font-mono, monospace);">VALORACIÓN COMUNIDAD</span>
                    <strong style="color: #f8fafc; font-size: 1.1rem;">${post.score.toFixed(1)} / 5.0</strong>
                </div>
                <div style="color: #f59e0b; font-size: 0.85rem;">
                    ⭐⭐⭐⭐⭐
                </div>
            </div>

            <!-- Marco Informativo KEFEX -->
            <div class="iframe-fallback-notice">
                <i class="fa-solid fa-shield-halved" style="font-size: 1.2rem; margin-bottom: 6px; display: block;"></i>
                <span>Inspección directa de tienda protegida. Haz clic en "Ver Sitio Oficial" para ir a la plataforma autorizada.</span>
            </div>
        `;

        this.openDrawer(this.previewDrawer);
    }

    openDrawer(drawerElement) {
        this.closeAllDrawers(false);
        this.overlay.classList.add('active');
        drawerElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeAllDrawers(hideOverlay = true) {
        this.detailDrawer?.classList.remove('active');
        this.previewDrawer?.classList.remove('active');
        if (hideOverlay && this.overlay) {
            this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.kefexForum = new KefexForumEngine();
});