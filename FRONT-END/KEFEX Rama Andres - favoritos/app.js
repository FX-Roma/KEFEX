document.addEventListener("DOMContentLoaded",function(){

    // Menu del lado
    const openButton=document.getElementById("toggle-sidebar-btn");
    const closeButton=document.getElementById("close-sidebar-btn");
    const sidebar=document.getElementById("sidebar-drawer");
    const overlay=document.getElementById("sidebar-overlay");

    function openSidebar(){
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow="hidden";
    }

    function closeSidebar(){
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow="";
    }

    openButton.addEventListener("click",openSidebar);
    closeButton.addEventListener("click",closeSidebar);
    overlay.addEventListener("click",closeSidebar);

    document.addEventListener("keydown",function(event){
        if(event.key==="Escape"){
            closeSidebar();
        }
    });


    // Nombre que usa explorar para guardar favoritos
    const SAVED_STORAGE_KEY="kefexSavedExplorePosts";


    // Aqui relacionamos cada publicacion con su video
    const postCatalog={
        "post-para-ti-1":{
            title:"Descubre algo nuevo",
            category:"Para ti",
            video:"../KEFEX Rama Andrés -explorar/Video/video-parati.mp4"
        },

        "post-tecnologia-1":{
            title:"Productos tecnológicos",
            category:"Tecnología",
            video:"../KEFEX Rama Andrés -explorar/Video/video-tecnologia.mp4"
        },

        "post-moda-1":{
            title:"Encuentra tu estilo",
            category:"Moda",
            video:"../KEFEX Rama Andrés -explorar/Video/video-moda.mp4"
        },

        "post-gaming-1":{
            title:"Mejora tu setup",
            category:"Gaming",
            video:"../KEFEX Rama Andrés -explorar/Video/video-gaming.mp4"
        },

        "post-hogar-1":{
            title:"Renueva tus espacios",
            category:"Hogar",
            video:"../KEFEX Rama Andrés -explorar/Video/video-hogar.mp4"
        }
    };


    // Cosas que usamos
    const boardGrid=document.getElementById("board-grid");
    const emptyBoard=document.getElementById("empty-board");
    const emptySearch=document.getElementById("empty-search");
    const savedCount=document.getElementById("saved-count");
    const resultsCount=document.getElementById("results-count");
    const searchInput=document.getElementById("board-search");
    const headerSearchInput=document.getElementById("search-products-btn");
    const searchForm=document.getElementById("global-search-form");


    // Traer los favoritos guardados
    function getSavedPosts(){
        try{
            const data=JSON.parse(localStorage.getItem(SAVED_STORAGE_KEY));
            return Array.isArray(data) ? data : [];
        }catch{
            return [];
        }
    }


    // Guardar los cambios
    function savePosts(posts){
        localStorage.setItem(SAVED_STORAGE_KEY,JSON.stringify(posts));
    }


    // Crear cada tarjeta
    function createBoardCard(postId){
        const postData=postCatalog[postId];

        if(!postData){
            return null;
        }

        const card=document.createElement("article");
        card.className="board-card";
        card.dataset.postId=postId;
        card.dataset.search=(postData.title+" "+postData.category).toLowerCase();

        card.innerHTML=`
            <div class="board-media">
                <video controls preload="metadata" playsinline>
                    <source src="${postData.video}" type="video/mp4">
                </video>
            </div>

            <div class="board-info">
                <span>${postData.category}</span>
                <h3>${postData.title}</h3>

                <div class="board-actions">
                    <a class="view-button" href="../KEFEX Rama Andrés -explorar/Explorar.html">Ver publicación</a>
                    <button class="remove-button" type="button">Quitar</button>
                </div>
            </div>
        `;

        // Quitar de favoritos
        const removeButton=card.querySelector(".remove-button");

        removeButton.addEventListener("click",function(){
            removeFromFavorites(postId);
        });

        return card;
    }


    // Mostrar todos los favoritos
    function renderFavorites(){
        const savedPosts=getSavedPosts();
        boardGrid.innerHTML="";

        savedCount.textContent=savedPosts.length;
        resultsCount.textContent=savedPosts.length===1 ? "1 publicación" : savedPosts.length+" publicaciones";

        if(savedPosts.length===0){
            emptyBoard.hidden=false;
            emptySearch.hidden=true;
            boardGrid.hidden=true;
            return;
        }

        emptyBoard.hidden=true;
        boardGrid.hidden=false;

        savedPosts.forEach(function(postId){
            const card=createBoardCard(postId);

            if(card){
                boardGrid.appendChild(card);
            }
        });

        filterFavorites();
    }


    // Quitar de favoritos
    function removeFromFavorites(postId){
        const savedPosts=getSavedPosts();

        const newSavedPosts=savedPosts.filter(function(id){
            return id!==postId;
        });

        savePosts(newSavedPosts);
        renderFavorites();
    }


    // Buscar dentro de favoritos
    function filterFavorites(){
        const searchText=searchInput.value.toLowerCase().trim();
        const cards=document.querySelectorAll(".board-card");
        let visibleCards=0;

        cards.forEach(function(card){
            const matches=card.dataset.search.includes(searchText);
            card.hidden=!matches;

            if(matches){
                visibleCards++;
            }
        });

        const totalSaved=getSavedPosts().length;

        if(totalSaved===0){
            emptySearch.hidden=true;
            return;
        }

        if(visibleCards===0){
            emptySearch.hidden=false;
        }else{
            emptySearch.hidden=true;
        }

        resultsCount.textContent=visibleCards===1 ? "1 publicación" : visibleCards+" publicaciones";
    }


    // Buscador de favoritos
    searchInput.addEventListener("input",filterFavorites);


    // Buscador de arriba
    headerSearchInput.addEventListener("input",function(){
        searchInput.value=headerSearchInput.value;
        filterFavorites();
    });

    searchForm.addEventListener("submit",function(event){
        event.preventDefault();
        searchInput.value=headerSearchInput.value;
        filterFavorites();
        searchInput.scrollIntoView({behavior:"smooth",block:"center"});
    });


    // Si agregamos o quitamos favoritos desde otra pestaña
    window.addEventListener("storage",function(event){
        if(event.key===SAVED_STORAGE_KEY){
            renderFavorites();
        }
    });


    // Cargar favoritos
    renderFavorites();

});