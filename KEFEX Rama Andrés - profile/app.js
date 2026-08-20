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


    // Para que el buscador no recargue la pagina
    const searchForm=document.getElementById("global-search-form");

    searchForm.addEventListener("submit",function(event){
        event.preventDefault();
    });


    // Nombres que usamos en el localStorage
    const SAVED_STORAGE_KEY="kefexSavedExplorePosts";
    const RECOMMENDED_STORAGE_KEY="kefexRecommendedExplorePosts";


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


    // Traer las listas guardadas
    function getStoredArray(key){
        try{
            const data=JSON.parse(localStorage.getItem(key));
            return Array.isArray(data) ? data : [];
        }catch{
            return [];
        }
    }


    // Contadores de arriba
    const publicationsCount=document.getElementById("publications-count");
    const recommendationsCount=document.getElementById("recommendations-count");
    const boardCount=document.getElementById("board-count");

    function updateProfileStats(){
        const recommendedPosts=getStoredArray(RECOMMENDED_STORAGE_KEY);
        const savedPosts=getStoredArray(SAVED_STORAGE_KEY);

        publicationsCount.textContent="6";
        recommendationsCount.textContent=recommendedPosts.length;
        boardCount.textContent=savedPosts.length;
    }


    // Cambiar entre publicaciones, recomendados y tablero
    const tabButtons=document.querySelectorAll(".profile-tab");
    const tabContents=document.querySelectorAll(".profile-tab-content");
    const statButtons=document.querySelectorAll(".stat-navigation");

    function openTab(tabName){
        tabButtons.forEach(function(button){
            button.classList.toggle("active",button.dataset.tab===tabName);
        });

        tabContents.forEach(function(content){
            const selected=content.id===tabName;
            content.hidden=!selected;
            content.classList.toggle("active-content",selected);
        });

        if(tabName==="recomendados"){
            renderRecommendedPosts();
        }

        if(tabName==="tablero"){
            renderBoardPosts();
        }
    }

    tabButtons.forEach(function(button){
        button.addEventListener("click",function(){
            openTab(button.dataset.tab);
        });
    });

    statButtons.forEach(function(button){
        button.addEventListener("click",function(){
            openTab(button.dataset.openTab);
        });
    });


    // Crear una tarjeta con el video
    function createVideoCard(postId){
        const postData=postCatalog[postId];

        // Por si algun ID no existe
        if(!postData){
            return null;
        }

        const card=document.createElement("article");
        card.className="activity-card";

        card.innerHTML=`
            <div class="activity-media">
                <video controls preload="metadata" playsinline>
                    <source src="${postData.video}" type="video/mp4">
                </video>
            </div>
            <div class="activity-info">
                <span>${postData.category}</span>
                <h3>${postData.title}</h3>
            </div>
        `;

        return card;
    }


    // Parte de recomendados
    const recommendedGrid=document.getElementById("recommended-grid");
    const emptyRecommended=document.getElementById("empty-recommended");
    const recommendedContentCount=document.getElementById("recommended-content-count");

    function renderRecommendedPosts(){
        const recommendedPosts=getStoredArray(RECOMMENDED_STORAGE_KEY);
        recommendedGrid.innerHTML="";

        recommendedContentCount.textContent=recommendedPosts.length===1 ? "1 recomendado" : recommendedPosts.length+" recomendados";

        if(recommendedPosts.length===0){
            emptyRecommended.hidden=false;
            return;
        }

        emptyRecommended.hidden=true;

        recommendedPosts.forEach(function(postId){
            const card=createVideoCard(postId);

            if(card){
                recommendedGrid.appendChild(card);
            }
        });
    }


    // Parte del tablero
    const boardGrid=document.getElementById("board-grid");
    const emptyBoard=document.getElementById("empty-board");
    const boardContentCount=document.getElementById("board-content-count");

    function renderBoardPosts(){
        const savedPosts=getStoredArray(SAVED_STORAGE_KEY);
        boardGrid.innerHTML="";

        boardContentCount.textContent=savedPosts.length===1 ? "1 guardado" : savedPosts.length+" guardados";

        if(savedPosts.length===0){
            emptyBoard.hidden=false;
            return;
        }

        emptyBoard.hidden=true;

        savedPosts.forEach(function(postId){
            const card=createVideoCard(postId);

            if(card){
                boardGrid.appendChild(card);
            }
        });
    }


    // Si hacemos cambios desde otra pestaña
    window.addEventListener("storage",function(event){
        if(event.key===RECOMMENDED_STORAGE_KEY || event.key===SAVED_STORAGE_KEY){
            updateProfileStats();
            renderRecommendedPosts();
            renderBoardPosts();
        }
    });


    // Cargar todo cuando entramos al perfil
    updateProfileStats();
    renderRecommendedPosts();
    renderBoardPosts();
    openTab("publicaciones");

});