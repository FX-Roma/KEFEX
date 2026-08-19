// ============================================================
// KEFEX - EXPLORAR
// JAVASCRIPT ANDRÉS
//
// FUNCIONALIDADES:
//
// 1. Abrir / cerrar sidebar.
// 2. Modo claro / oscuro.
// 3. Filtrar publicaciones por categoría.
// 4. Buscar publicaciones.
// 5. Guardar publicaciones.
// 6. Recomendar publicaciones.
// 7. Mantener guardados y recomendaciones en localStorage.
// 8. Comentar publicaciones.
// ============================================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ====================================================
        // 01. SIDEBAR
        // ====================================================

        const openButton =
            document.getElementById(
                "toggle-sidebar-btn"
            );


        const closeButton =
            document.getElementById(
                "close-sidebar-btn"
            );


        const sidebar =
            document.getElementById(
                "sidebar-drawer"
            );


        const overlay =
            document.getElementById(
                "sidebar-overlay"
            );



        function openSidebar() {


            if (!sidebar || !overlay) {

                return;

            }


            sidebar.classList.add(
                "active"
            );


            overlay.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }



        function closeSidebar() {


            if (!sidebar || !overlay) {

                return;

            }


            sidebar.classList.remove(
                "active"
            );


            overlay.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";

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



        // ESC también cierra el sidebar.

        document.addEventListener(
            "keydown",
            function (event) {


                if (event.key === "Escape") {

                    closeSidebar();

                }

            }
        );



        // ====================================================
        // 02. MODO CLARO / OSCURO
        // ====================================================

        const themeButton =
            document.querySelector(
                ".theme-toggle"
            );


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



        // ====================================================
        // 03. VARIABLES DEL FEED
        // ====================================================

        const categoryButtons =
            document.querySelectorAll(
                ".category-button"
            );


        const feedTitle =
            document.querySelector(
                ".feed-title"
            );


        const visiblePostCount =
            document.getElementById(
                "visible-post-count"
            );


        const searchInput =
            document.getElementById(
                "explore-search"
            );


        const headerSearchInput =
            document.getElementById(
                "search-products-btn"
            );


        const globalSearchForm =
            document.getElementById(
                "global-search-form"
            );


        const noResultsMessage =
            document.getElementById(
                "no-results-message"
            );



        // ====================================================
        // CATEGORÍA ACTUAL
        // ====================================================

        let currentCategory =
            "para-ti";



        // ====================================================
        // NOMBRES VISUALES
        // ====================================================

        const categoryNames = {


            "para-ti":
                "Para ti",


            tecnologia:
                "Tecnología",


            moda:
                "Moda",


            gaming:
                "Gaming",


            hogar:
                "Hogar"

        };



        // ====================================================
        // 04. FILTRAR PUBLICACIONES
        // ====================================================

        function filterPosts() {


            const posts =
                document.querySelectorAll(
                    "#feed .post"
                );



            const searchText =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";



            let visiblePosts =
                0;



            posts.forEach(
                function (post) {


                    const postCategory =
                        post.dataset.category;


                    const postText =
                        post.textContent
                            .toLowerCase();



                    // Debe coincidir la categoría.

                    const matchesCategory =
                        postCategory ===
                        currentCategory;



                    // También debe coincidir la búsqueda.

                    const matchesSearch =
                        postText.includes(
                            searchText
                        );



                    const shouldShow =
                        matchesCategory &&
                        matchesSearch;



                    post.hidden =
                        !shouldShow;



                    // Si un video deja de ser visible,
                    // lo pausamos.

                    if (!shouldShow) {


                        const video =
                            post.querySelector(
                                "video"
                            );


                        if (
                            video &&
                            !video.paused
                        ) {


                            video.pause();

                        }

                    }



                    if (shouldShow) {


                        visiblePosts++;

                    }

                }
            );



            // =================================================
            // ACTUALIZAR TÍTULO
            // =================================================

            if (feedTitle) {


                feedTitle.textContent =
                    categoryNames[
                        currentCategory
                    ];

            }



            // =================================================
            // ACTUALIZAR CONTADOR
            // =================================================

            if (visiblePostCount) {


                if (
                    visiblePosts ===
                    1
                ) {


                    visiblePostCount.textContent =
                        "1 publicación";


                } else {


                    visiblePostCount.textContent =
                        `${visiblePosts} publicaciones`;

                }

            }



            // =================================================
            // MENSAJE SIN RESULTADOS
            // =================================================

            if (noResultsMessage) {


                noResultsMessage.hidden =
                    visiblePosts !==
                    0;

            }

        }



        // ====================================================
        // 05. CAMBIAR CATEGORÍA
        // ====================================================

        categoryButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const selectedCategory =
                            button.dataset.category;



                        // Quitamos activo de todos.

                        categoryButtons.forEach(
                            function (
                                categoryButton
                            ) {


                                categoryButton
                                    .classList
                                    .remove(
                                        "active-category"
                                    );

                            }
                        );



                        // Activamos el seleccionado.

                        button.classList.add(
                            "active-category"
                        );



                        // Guardamos nueva categoría.

                        currentCategory =
                            selectedCategory;



                        // Aplicamos filtro.

                        filterPosts();

                    }
                );

            }
        );



        // ====================================================
        // 06. BUSCADOR
        // ====================================================

        function synchronizeSearch(
            sourceInput,
            destinationInput
        ) {


            if (!sourceInput) {


                return;

            }



            sourceInput.addEventListener(
                "input",
                function () {


                    // Sincronizamos ambos buscadores.

                    if (
                        destinationInput &&
                        destinationInput.value !==
                        sourceInput.value
                    ) {


                        destinationInput.value =
                            sourceInput.value;

                    }



                    filterPosts();

                }
            );

        }



        synchronizeSearch(
            searchInput,
            headerSearchInput
        );


        synchronizeSearch(
            headerSearchInput,
            searchInput
        );



        // Evita recargar al presionar Enter.

        if (globalSearchForm) {


            globalSearchForm.addEventListener(
                "submit",
                function (event) {


                    event.preventDefault();


                    filterPosts();

                }
            );

        }



        // ====================================================
        // 07. CLAVES DE LOCALSTORAGE
        // ====================================================

        /*
            Guardados:
            utilizados por Explorer, Favoritos y Perfil.
        */

        const SAVED_STORAGE_KEY =
            "kefexSavedExplorePosts";


        /*
            Recomendaciones:
            utilizadas por Explorer y Perfil.
        */

        const RECOMMENDED_STORAGE_KEY =
            "kefexRecommendedExplorePosts";



        // ====================================================
        // 08. FUNCIÓN GENERAL PARA LEER ARRAYS
        // ====================================================

        function getStoredArray(
            storageKey
        ) {


            try {


                const storedData =
                    localStorage.getItem(
                        storageKey
                    );



                if (!storedData) {


                    return [];

                }



                const parsedData =
                    JSON.parse(
                        storedData
                    );



                if (
                    Array.isArray(
                        parsedData
                    )
                ) {


                    return parsedData;

                }



                return [];


            } catch (error) {


                console.error(
                    "Error leyendo localStorage:",
                    error
                );


                return [];

            }

        }



        // ====================================================
        // 09. FUNCIÓN GENERAL PARA GUARDAR ARRAYS
        // ====================================================

        function saveStoredArray(
            storageKey,
            data
        ) {


            try {


                localStorage.setItem(

                    storageKey,

                    JSON.stringify(
                        data
                    )

                );


            } catch (error) {


                console.error(
                    "Error guardando en localStorage:",
                    error
                );

            }

        }



        // ====================================================
        // 10. SISTEMA DE GUARDADOS
        // ====================================================

        function getSavedPostIds() {


            return getStoredArray(
                SAVED_STORAGE_KEY
            );

        }



        function isPostSaved(
            postId
        ) {


            return getSavedPostIds()
                .includes(
                    postId
                );

        }



        // ====================================================
        // ACTUALIZAR BOTONES GUARDAR
        // ====================================================

        function updateSaveButtons() {


            const posts =
                document.querySelectorAll(
                    ".post[data-post-id]"
                );



            posts.forEach(
                function (post) {


                    const postId =
                        post.dataset.postId;


                    const saveButton =
                        post.querySelector(
                            ".save-button"
                        );



                    if (!saveButton) {


                        return;

                    }



                    const saved =
                        isPostSaved(
                            postId
                        );



                    saveButton.classList.toggle(
                        "saved",
                        saved
                    );



                    if (saved) {


                        saveButton.innerHTML =
                            "<span>✅</span> Guardado";


                    } else {


                        saveButton.innerHTML =
                            "<span>📥</span> Guardar";

                    }

                }
            );

        }



        // ====================================================
        // GUARDAR / QUITAR DEL TABLERO
        // ====================================================

        function toggleSavedPost(
            postId
        ) {


            const savedPosts =
                getSavedPostIds();



            const existingIndex =
                savedPosts.indexOf(
                    postId
                );



            if (
                existingIndex >=
                0
            ) {


                // Ya estaba guardado.
                // Lo quitamos.

                savedPosts.splice(
                    existingIndex,
                    1
                );


            } else {


                // No estaba guardado.
                // Lo agregamos.

                savedPosts.push(
                    postId
                );

            }



            saveStoredArray(

                SAVED_STORAGE_KEY,

                savedPosts

            );



            updateSaveButtons();

        }



        // ====================================================
        // 11. SISTEMA DE RECOMENDACIONES
        // ====================================================

        function getRecommendedPostIds() {


            return getStoredArray(
                RECOMMENDED_STORAGE_KEY
            );

        }



        function isPostRecommended(
            postId
        ) {


            return getRecommendedPostIds()
                .includes(
                    postId
                );

        }



        // ====================================================
        // ACTUALIZAR BOTONES RECOMENDAR
        // ====================================================

        function updateRecommendButtons() {


            const posts =
                document.querySelectorAll(
                    ".post[data-post-id]"
                );



            posts.forEach(
                function (post) {


                    const postId =
                        post.dataset.postId;


                    const recommendButton =
                        post.querySelector(
                            ".recommend-button"
                        );



                    if (!recommendButton) {


                        return;

                    }



                    const recommended =
                        isPostRecommended(
                            postId
                        );



                    recommendButton.classList.toggle(
                        "recommended",
                        recommended
                    );



                    if (recommended) {


                        recommendButton.innerHTML =
                            "<span>✅</span> Recomendado";


                    } else {


                        recommendButton.innerHTML =
                            "<span>📣</span> Recomendar";

                    }

                }
            );

        }



        // ====================================================
        // RECOMENDAR / QUITAR RECOMENDACIÓN
        // ====================================================

        function toggleRecommendedPost(
            postId
        ) {


            const recommendedPosts =
                getRecommendedPostIds();



            const existingIndex =
                recommendedPosts.indexOf(
                    postId
                );



            if (
                existingIndex >=
                0
            ) {


                // Ya estaba recomendado.
                // Lo quitamos.

                recommendedPosts.splice(
                    existingIndex,
                    1
                );


            } else {


                // No estaba recomendado.
                // Lo agregamos.

                recommendedPosts.push(
                    postId
                );

            }



            saveStoredArray(

                RECOMMENDED_STORAGE_KEY,

                recommendedPosts

            );



            updateRecommendButtons();

        }



        // ====================================================
        // 12. INTERACCIONES GENERALES DE POSTS
        // ====================================================

        /*
            Utilizamos delegación de eventos.

            Un solo listener controla:

            - Recomendar
            - Guardar
            - Comentar
        */


        document.addEventListener(
            "click",
            function (event) {


                // =================================================
                // RECOMENDAR
                // =================================================

                const recommendButton =
                    event.target.closest(
                        ".recommend-button"
                    );



                if (recommendButton) {


                    const post =
                        recommendButton.closest(
                            ".post"
                        );



                    if (!post) {


                        return;

                    }



                    const postId =
                        post.dataset.postId;



                    if (!postId) {


                        console.error(
                            "El post no tiene data-post-id"
                        );


                        return;

                    }



                    toggleRecommendedPost(
                        postId
                    );


                    return;

                }



                // =================================================
                // GUARDAR
                // =================================================

                const saveButton =
                    event.target.closest(
                        ".save-button"
                    );



                if (saveButton) {


                    const post =
                        saveButton.closest(
                            ".post"
                        );



                    if (!post) {


                        return;

                    }



                    const postId =
                        post.dataset.postId;



                    if (!postId) {


                        console.error(
                            "El post no tiene data-post-id"
                        );


                        return;

                    }



                    toggleSavedPost(
                        postId
                    );


                    return;

                }



                // =================================================
                // COMENTAR
                // =================================================

                const commentButton =
                    event.target.closest(
                        ".comment-button"
                    );



                if (commentButton) {


                    const post =
                        commentButton.closest(
                            ".post"
                        );



                    if (!post) {


                        return;

                    }



                    // Si ya existe cuadro de comentarios,
                    // lo cerramos.

                    const existingBox =
                        post.querySelector(
                            ".comment-box"
                        );



                    if (existingBox) {


                        existingBox.remove();


                        return;

                    }



                    // =================================================
                    // CREAR CUADRO DE COMENTARIO
                    // =================================================

                    const commentBox =
                        document.createElement(
                            "div"
                        );


                    commentBox.className =
                        "comment-box";



                    // INPUT

                    const commentInput =
                        document.createElement(
                            "input"
                        );


                    commentInput.type =
                        "text";


                    commentInput.placeholder =
                        "Escribe un comentario y presiona Enter";



                    // TEXTO DEL COMENTARIO

                    const commentPreview =
                        document.createElement(
                            "p"
                        );


                    commentPreview.className =
                        "comment-preview";



                    commentBox.appendChild(
                        commentInput
                    );


                    commentBox.appendChild(
                        commentPreview
                    );


                    post.appendChild(
                        commentBox
                    );



                    commentInput.focus();



                    // =================================================
                    // PUBLICAR CON ENTER
                    // =================================================

                    commentInput.addEventListener(
                        "keydown",
                        function (
                            keyboardEvent
                        ) {


                            if (
                                keyboardEvent.key !==
                                "Enter"
                            ) {


                                return;

                            }



                            const comment =
                                commentInput.value
                                    .trim();



                            if (!comment) {


                                return;

                            }



                            commentPreview.textContent =
                                `Tú: ${comment}`;



                            commentInput.value =
                                "";

                        }
                    );


                    return;

                }

            }
        );



        // ====================================================
        // 13. SINCRONIZACIÓN ENTRE PESTAÑAS
        // ====================================================

        /*
            Este evento se dispara si localStorage cambia
            desde otra pestaña del navegador.

            Así Explorer también puede actualizar su estado
            sin recargar manualmente.
        */


        window.addEventListener(
            "storage",
            function (event) {


                if (
                    event.key ===
                    SAVED_STORAGE_KEY
                ) {


                    updateSaveButtons();

                }



                if (
                    event.key ===
                    RECOMMENDED_STORAGE_KEY
                ) {


                    updateRecommendButtons();

                }

            }
        );



        // ====================================================
        // 14. INICIALIZACIÓN
        // ====================================================

        /*
            Al cargar Explorer:

            1. Mostramos Para ti.
            2. Revisamos posts guardados.
            3. Revisamos posts recomendados.
        */


        filterPosts();


        updateSaveButtons();


        updateRecommendButtons();


    }
);