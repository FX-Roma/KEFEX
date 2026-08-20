// ============================================================
// KEFEX - TABLERO / FAVORITOS
// JAVASCRIPT ANDRÉS
//
// Esta página recupera las publicaciones que fueron guardadas
// previamente desde Explorer.
//
// Explorer utiliza la misma clave:
//
// kefexSavedExplorePosts
//
// ============================================================


document.addEventListener("DOMContentLoaded", function () {


    // ========================================================
    // 01. SIDEBAR
    // ========================================================

    const openButton =
        document.getElementById("toggle-sidebar-btn");


    const closeButton =
        document.getElementById("close-sidebar-btn");


    const sidebar =
        document.getElementById("sidebar-drawer");


    const overlay =
        document.getElementById("sidebar-overlay");



    function openSidebar() {

        sidebar.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

    }



    function closeSidebar() {

        sidebar.classList.remove("active");

        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }



    if (openButton) {

        openButton.addEventListener(
            "click",
            openSidebar
        );

    }



    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeSidebar
        );

    }



    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }



    // ========================================================
    // 02. MODO CLARO / OSCURO
    // ========================================================

    const themeButton =
        document.querySelector(".theme-toggle");


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            function () {


                document.body.classList.toggle(
                    "light-mode"
                );


                if (
                    document.body.classList.contains(
                        "light-mode"
                    )
                ) {

                    themeButton.textContent =
                        "Dark mode 🌙";

                } else {

                    themeButton.textContent =
                        "Light mode ☀️";

                }

            }
        );

    }



    // ========================================================
    // 03. CLAVE COMPARTIDA CON EXPLORER
    //
    // MUY IMPORTANTE:
    // Debe tener exactamente el mismo nombre que en app.js
    // de Explorer.
    // ========================================================

    const STORAGE_KEY =
        "kefexSavedExplorePosts";



    // ========================================================
    // 04. CATÁLOGO DE PUBLICACIONES
    //
    // Como Explorer guarda IDs, aquí relacionamos cada ID
    // con la información necesaria para reconstruir el post.
    //
    // Cuando agreguemos nuevos posts a Explorer simplemente
    // agregaremos otra entrada aquí.
    // ========================================================

    const postCatalog = {


        "post-para-ti-1": {

            category: "para-ti",

            categoryName: "Para ti",

            author: "Andrés Cortés",

            username: "@Andresitomuchoflow",

            image:
                "../KEFEX Rama Andrés -explorar/Imagen/Kefex-ph.png",

            description:
                "Descubre KEFEX, una nueva forma de encontrar productos según tus gustos e intereses.",

            video:
                "../KEFEX Rama Andrés -explorar/Video/WhatsApp Video 2026-08-15 at 3.11.09 PM.mp4"

        },



        "post-tecnologia-1": {

            category: "tecnologia",

            categoryName: "Tecnología",

            author: "KEFEX Tecnología",

            username: "@kefextech",

            image:
                "../KEFEX Rama Andrés -explorar/Imagen/Kefex-ph.png",

            description:
                "Descubre productos tecnológicos, accesorios y dispositivos recomendados para mejorar tu experiencia digital.",

            video:
                "../KEFEX Rama Andrés -explorar/Video/WhatsApp Video 2026-08-15 at 3.11.09 PM.mp4"

        },



        "post-moda-1": {

            category: "moda",

            categoryName: "Moda",

            author: "KEFEX Moda",

            username: "@kefexfashion",

            image:
                "../KEFEX Rama Andrés -explorar/Imagen/Kefex-ph.png",

            description:
                "Tendencias, prendas, accesorios y recomendaciones de moda seleccionadas según tus intereses.",

            video:
                "../KEFEX Rama Andrés -explorar/Video/WhatsApp Video 2026-08-15 at 3.11.09 PM.mp4"

        },



        "post-gaming-1": {

            category: "gaming",

            categoryName: "Gaming",

            author: "KEFEX Gaming",

            username: "@kefexgaming",

            image:
                "../KEFEX Rama Andrés -explorar/Imagen/Kefex-ph.png",

            description:
                "Consolas, videojuegos, periféricos y setups seleccionados para gamers.",

            video:
                "../KEFEX Rama Andrés -explorar/Video/WhatsApp Video 2026-08-15 at 3.11.09 PM.mp4"

        },



        "post-hogar-1": {

            category: "hogar",

            categoryName: "Hogar",

            author: "KEFEX Hogar",

            username: "@kefexhome",

            image:
                "../KEFEX Rama Andrés -explorar/Imagen/Kefex-ph.png",

            description:
                "Productos, decoración y tecnología para crear espacios más cómodos y funcionales.",

            video:
                "../KEFEX Rama Andrés -explorar/Video/WhatsApp Video 2026-08-15 at 3.11.09 PM.mp4"

        }

    };



    // ========================================================
    // 05. ELEMENTOS DEL HTML
    // ========================================================

    const savedPostsContainer =
        document.getElementById(
            "saved-posts-container"
        );


    const emptyBoard =
        document.getElementById(
            "empty-board"
        );


    const noResults =
        document.getElementById(
            "no-board-results"
        );


    const savedCount =
        document.getElementById(
            "saved-count"
        );


    const categoryCount =
        document.getElementById(
            "category-count"
        );


    const searchInput =
        document.getElementById(
            "board-search"
        );


    const searchForm =
        document.getElementById(
            "board-search-form"
        );


    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );



    let currentFilter = "todos";



    // ========================================================
    // 06. OBTENER PUBLICACIONES GUARDADAS
    // ========================================================

    function getSavedPostIds() {


        try {


            const savedData =
                localStorage.getItem(
                    STORAGE_KEY
                );


            if (!savedData) {

                return [];

            }


            return JSON.parse(
                savedData
            );


        } catch (error) {


            console.error(
                "Error leyendo publicaciones guardadas:",
                error
            );


            return [];

        }

    }



    // ========================================================
    // 07. GUARDAR NUEVA LISTA
    // ========================================================

    function savePostIds(postIds) {


        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(
                postIds
            )

        );

    }



    // ========================================================
    // 08. ELIMINAR DEL TABLERO
    // ========================================================

    function removeSavedPost(postId) {


        let savedPostIds =
            getSavedPostIds();


        savedPostIds =
            savedPostIds.filter(
                function (savedId) {

                    return savedId !== postId;

                }
            );


        savePostIds(
            savedPostIds
        );


        renderBoard();

    }



    // ========================================================
    // 09. CREAR HTML DEL POST
    // ========================================================

    function createPostElement(
        postId,
        postData
    ) {


        const article =
            document.createElement(
                "article"
            );


        article.className =
            "saved-post";


        article.dataset.category =
            postData.category;


        article.dataset.postId =
            postId;



        article.innerHTML = `

            <div class="author-information">

                <img
                    src="${postData.image}"
                    alt="${postData.author}"
                >

                <div class="user-info">

                    <h3>
                        ${postData.author}
                    </h3>

                    <p>
                        ${postData.username}
                    </p>

                </div>

            </div>


            <div class="caption">

                <p>
                    ${postData.description}
                </p>

                <video
                    controls
                    preload="metadata"
                >

                    <source
                        src="${postData.video}"
                        type="video/mp4"
                    >

                </video>

            </div>


            <span class="category-label">

                ${postData.categoryName}

            </span>


            <div class="saved-actions">

                <button
                    type="button"
                    class="remove-button"
                    data-remove-id="${postId}"
                >

                    <i class="fa-solid fa-trash"></i>

                    Quitar del tablero

                </button>

            </div>

        `;


        return article;

    }



    // ========================================================
    // 10. RENDERIZAR TABLERO
    // ========================================================

    function renderBoard() {


        const savedPostIds =
            getSavedPostIds();


        const searchText =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        savedPostsContainer.innerHTML =
            "";



        // ====================================================
        // TABLERO TOTALMENTE VACÍO
        // ====================================================

        if (savedPostIds.length === 0) {


            emptyBoard.hidden =
                false;


            noResults.hidden =
                true;


            savedCount.textContent =
                "0";


            categoryCount.textContent =
                "0";


            return;

        }



        emptyBoard.hidden =
            true;



        let visiblePosts = 0;


        const categories =
            new Set();



        savedPostIds.forEach(
            function (postId) {


                const postData =
                    postCatalog[
                        postId
                    ];



                // Si por alguna razón el ID no existe
                // en nuestro catálogo, simplemente lo ignoramos.

                if (!postData) {

                    return;

                }



                categories.add(
                    postData.category
                );



                // =================================================
                // FILTRO DE CATEGORÍA
                // =================================================

                const matchesCategory =

                    currentFilter ===
                    "todos"

                    ||

                    postData.category ===
                    currentFilter;



                // =================================================
                // BÚSQUEDA
                // =================================================

                const searchableText =

                    (
                        postData.author +
                        " " +
                        postData.username +
                        " " +
                        postData.description +
                        " " +
                        postData.categoryName
                    )
                    .toLowerCase();



                const matchesSearch =

                    searchableText.includes(
                        searchText
                    );



                if (
                    matchesCategory &&
                    matchesSearch
                ) {


                    const postElement =
                        createPostElement(
                            postId,
                            postData
                        );


                    savedPostsContainer.appendChild(
                        postElement
                    );


                    visiblePosts++;

                }

            }
        );



        // ====================================================
        // CONTADORES
        // ====================================================

        savedCount.textContent =
            savedPostIds.length;


        categoryCount.textContent =
            categories.size;



        // ====================================================
        // SIN RESULTADOS DE FILTRO / BÚSQUEDA
        // ====================================================

        noResults.hidden =
            visiblePosts !== 0;

    }



    // ========================================================
    // 11. FILTROS POR CATEGORÍA
    // ========================================================

    filterButtons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    filterButtons.forEach(
                        function (
                            filterButton
                        ) {


                            filterButton
                                .classList
                                .remove(
                                    "active-filter"
                                );

                        }
                    );



                    button.classList.add(
                        "active-filter"
                    );


                    currentFilter =
                        button.dataset.filter;


                    // Pausamos videos anteriores.

                    document
                        .querySelectorAll(
                            "video"
                        )
                        .forEach(
                            function (video) {

                                video.pause();

                            }
                        );


                    renderBoard();

                }
            );

        }
    );



    // ========================================================
    // 12. BUSCADOR
    // ========================================================

    if (searchInput) {


        searchInput.addEventListener(
            "input",
            function () {

                renderBoard();

            }
        );

    }



    if (searchForm) {


        searchForm.addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                renderBoard();

            }
        );

    }



    // ========================================================
    // 13. BOTÓN ELIMINAR
    // ========================================================

    savedPostsContainer.addEventListener(
        "click",
        function (event) {


            const removeButton =
                event.target.closest(
                    ".remove-button"
                );


            if (!removeButton) {

                return;

            }


            const postId =
                removeButton.dataset.removeId;


            removeSavedPost(
                postId
            );

        }
    );



    // ========================================================
    // 14. INICIALIZAR TABLERO
    // ========================================================

    renderBoard();


});