

// ============================================================
// KEFEX - PERFIL
// JAVASCRIPT ANDRÉS
//
// FUNCIONALIDADES:
//
// 1. Abrir / cerrar sidebar.
// 2. Mostrar 6 publicaciones.
// 3. Leer recomendaciones reales.
// 4. Leer cantidad real del Tablero.
// 5. Cambiar entre pestañas.
// 6. Mostrar contenido de Recomendados.
// 7. Mostrar contenido del Tablero.
//
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



        document.addEventListener(
            "keydown",
            function (event) {


                if (event.key === "Escape") {

                    closeSidebar();

                }

            }
        );



        // ====================================================
        // 02. CLAVES COMPARTIDAS CON EXPLORAR
        // ====================================================

        /*
            Estas claves deben ser exactamente las mismas
            utilizadas en Explorer.

            SAVED_STORAGE_KEY:
            publicaciones guardadas en Tablero.

            RECOMMENDED_STORAGE_KEY:
            publicaciones recomendadas.
        */


        const SAVED_STORAGE_KEY =
            "kefexSavedExplorePosts";


        const RECOMMENDED_STORAGE_KEY =
            "kefexRecommendedExplorePosts";



        // ====================================================
        // 03. CANTIDAD DE PUBLICACIONES
        // ====================================================

        /*
            Actualmente existen 6 posts del usuario.

            Como estos posts están definidos directamente
            en el HTML del Perfil, el número es fijo.
        */


        const PUBLICATIONS_COUNT = 6;



        // ====================================================
        // 04. CATÁLOGO DE POSTS
        //
        // Nos permite saber a qué categoría pertenece
        // cada ID guardado o recomendado.
        // ====================================================

        const postCatalog = {


            "post-para-ti-1": {

                title: "Publicación Para ti",

                category: "Para ti"

            },


            "post-tecnologia-1": {

                title: "Publicación de Tecnología",

                category: "Tecnología"

            },


            "post-moda-1": {

                title: "Publicación de Moda",

                category: "Moda"

            },


            "post-gaming-1": {

                title: "Publicación de Gaming",

                category: "Gaming"

            },


            "post-hogar-1": {

                title: "Publicación de Hogar",

                category: "Hogar"

            }


        };



        // ====================================================
        // 05. LEER ARRAY DE LOCALSTORAGE
        // ====================================================

        /*
            Esta función es reutilizable.

            Recibe el nombre de una clave y devuelve
            el array guardado allí.
        */


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



                /*
                    Confirmamos que realmente sea un array.
                */


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
        // 06. ELEMENTOS DE ESTADÍSTICAS
        // ====================================================

        const publicationsCount =
            document.getElementById(
                "publications-count"
            );


        const recommendationsCount =
            document.getElementById(
                "recommendations-count"
            );


        const boardCount =
            document.getElementById(
                "board-count"
            );



        // ====================================================
        // 07. ACTUALIZAR ESTADÍSTICAS
        // ====================================================

        function updateProfileStats() {


            // PUBLICACIONES

            if (publicationsCount) {


                publicationsCount.textContent =
                    PUBLICATIONS_COUNT;

            }



            // RECOMENDACIONES

            const recommendedPosts =
                getStoredArray(
                    RECOMMENDED_STORAGE_KEY
                );


            if (recommendationsCount) {


                recommendationsCount.textContent =
                    recommendedPosts.length;

            }



            // TABLERO

            const savedPosts =
                getStoredArray(
                    SAVED_STORAGE_KEY
                );


            if (boardCount) {


                boardCount.textContent =
                    savedPosts.length;

            }

        }



        // ====================================================
        // 08. PESTAÑAS DEL PERFIL
        // ====================================================

        const tabButtons =
            document.querySelectorAll(
                ".profile-tab"
            );


        const tabContents =
            document.querySelectorAll(
                ".profile-tab-content"
            );



        function openTab(
            tabName
        ) {


            // =================================================
            // BOTONES
            // =================================================

            tabButtons.forEach(
                function (button) {


                    const isCurrentTab =
                        button.dataset.tab ===
                        tabName;


                    button.classList.toggle(
                        "active",
                        isCurrentTab
                    );

                }
            );



            // =================================================
            // CONTENIDO
            // =================================================

            tabContents.forEach(
                function (content) {


                    const isCurrentContent =
                        content.id ===
                        tabName;


                    content.hidden =
                        !isCurrentContent;


                    content.classList.toggle(
                        "active-content",
                        isCurrentContent
                    );

                }
            );



            // =================================================
            // SI ABRIMOS RECOMENDADOS
            // ACTUALIZAMOS SU CONTENIDO
            // =================================================

            if (
                tabName ===
                "recomendados"
            ) {


                renderRecommendedPosts();

            }



            // =================================================
            // SI ABRIMOS TABLERO
            // ACTUALIZAMOS SUS GUARDADOS
            // =================================================

            if (
                tabName ===
                "tablero"
            ) {


                renderBoardPosts();

            }

        }



        tabButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const selectedTab =
                            button.dataset.tab;


                        openTab(
                            selectedTab
                        );

                    }
                );

            }
        );



        // ====================================================
        // 09. ESTADÍSTICAS TAMBIÉN ABREN PESTAÑAS
        // ====================================================

        const statButtons =
            document.querySelectorAll(
                ".stat-navigation"
            );



        statButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const selectedTab =
                            button.dataset.openTab;


                        openTab(
                            selectedTab
                        );

                    }
                );

            }
        );



        // ====================================================
        // 10. RECOMENDADOS
        // ====================================================

        const recommendedGrid =
            document.getElementById(
                "recommended-grid"
            );


        const emptyRecommended =
            document.getElementById(
                "empty-recommended"
            );


        const recommendedContentCount =
            document.getElementById(
                "recommended-content-count"
            );



        function renderRecommendedPosts() {


            const recommendedPosts =
                getStoredArray(
                    RECOMMENDED_STORAGE_KEY
                );



            if (!recommendedGrid) {

                return;

            }



            // Limpiamos antes de volver a crear.

            recommendedGrid.innerHTML =
                "";



            // =================================================
            // ACTUALIZAR CONTADOR
            // =================================================

            if (
                recommendedContentCount
            ) {


                if (
                    recommendedPosts.length ===
                    1
                ) {


                    recommendedContentCount.textContent =
                        "1 recomendado";


                } else {


                    recommendedContentCount.textContent =
                        `${recommendedPosts.length} recomendados`;

                }

            }



            // =================================================
            // ESTADO VACÍO
            // =================================================

            if (
                recommendedPosts.length ===
                0
            ) {


                if (emptyRecommended) {

                    emptyRecommended.hidden =
                        false;

                }


                return;

            }



            if (emptyRecommended) {


                emptyRecommended.hidden =
                    true;

            }



            // =================================================
            // CREAR TARJETAS
            // =================================================

            recommendedPosts.forEach(
                function (postId) {


                    const postData =
                        postCatalog[
                            postId
                        ];


                    /*
                        Si aparece un ID que todavía no está
                        en nuestro catálogo, usamos valores
                        genéricos.
                    */


                    const title =
                        postData
                            ? postData.title
                            : "Publicación recomendada";


                    const category =
                        postData
                            ? postData.category
                            : "KEFEX";



                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "activity-card";



                    card.innerHTML = `

                        <div class="activity-image">

                            <img
                                src="Imagen/Kefex-ph.png"
                                alt="${title}"
                            >

                        </div>

                        <span>

                            ${category}

                        </span>

                        <h3>

                            ${title}

                        </h3>

                    `;



                    recommendedGrid.appendChild(
                        card
                    );


                }
            );

        }



        // ====================================================
        // 11. TABLERO
        // ====================================================

        const boardGrid =
            document.getElementById(
                "board-grid"
            );


        const emptyBoard =
            document.getElementById(
                "empty-board"
            );


        const boardContentCount =
            document.getElementById(
                "board-content-count"
            );


/* TABLERO */
        function renderBoardPosts() {


            const savedPosts =
                getStoredArray(
                    SAVED_STORAGE_KEY
                );



            if (!boardGrid) {

                return;

            }



            boardGrid.innerHTML =
                "";



            // =================================================
            // CONTADOR
            // =================================================

            if (boardContentCount) {


                if (
                    savedPosts.length ===
                    1
                ) {


                    boardContentCount.textContent =
                        "1 guardado";


                } else {


                    boardContentCount.textContent =
                        `${savedPosts.length} guardados`;

                }

            }



            // =================================================
            // ESTADO VACÍO
            // =================================================

            if (
                savedPosts.length ===
                0
            ) {


                if (emptyBoard) {

                    emptyBoard.hidden =
                        false;

                }


                return;

            }



            if (emptyBoard) {


                emptyBoard.hidden =
                    true;

            }



            // =================================================
            // CREAR TARJETAS
            // =================================================

            savedPosts.forEach(
                function (postId) {


                    const postData =
                        postCatalog[
                            postId
                        ];



                    const title =
                        postData
                            ? postData.title
                            : "Publicación guardada";


                    const category =
                        postData
                            ? postData.category
                            : "KEFEX";



                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "activity-card";



                    card.innerHTML = `

                        <div class="activity-image">

                            <img
                                src="Imagen/Kefex-ph.png"
                                alt="${title}"
                            >

                        </div>

                        <span>

                            ${category}

                        </span>

                        <h3>

                            ${title}

                        </h3>

                    `;



                    boardGrid.appendChild(
                        card
                    );


                }
            );

        }



        // ====================================================
        // 12. ACTUALIZAR SI CAMBIA LOCALSTORAGE
        // ====================================================

        /*
            Este evento es útil si KEFEX está abierto
            simultáneamente en dos pestañas del navegador.

            Si cambia localStorage en otra pestaña,
            actualizamos automáticamente las estadísticas.
        */


        window.addEventListener(
            "storage",
            function (event) {


                if (
                    event.key ===
                    SAVED_STORAGE_KEY
                    ||
                    event.key ===
                    RECOMMENDED_STORAGE_KEY
                ) {


                    updateProfileStats();


                    renderRecommendedPosts();


                    renderBoardPosts();

                }

            }
        );



        // ====================================================
        // 13. EVITAR QUE BUSCADOR RECARGUE
        // ====================================================

        const searchForm =
            document.getElementById(
                "global-search-form"
            );


        if (searchForm) {


            searchForm.addEventListener(
                "submit",
                function (event) {


                    event.preventDefault();

                }
            );

        }



        // ====================================================
        // 14. INICIALIZAR PERFIL
        // ====================================================

        updateProfileStats();


        renderRecommendedPosts();


        renderBoardPosts();


        openTab(
            "publicaciones"
        );


    }
);