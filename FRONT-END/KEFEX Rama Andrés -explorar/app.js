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


    // Modo claro y oscuro
    const themeButton=document.querySelector(".theme-toggle");

    themeButton.addEventListener("click",function(){
        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            themeButton.textContent="Dark mode 🌙";
        }else{
            themeButton.textContent="Light mode ☀️";
        }
    });


    // Cosas que usamos para las categorias
    const categoryButtons=document.querySelectorAll(".category-button");
    const posts=document.querySelectorAll(".post");
    const feedTitle=document.querySelector(".feed-title");
    const visiblePostCount=document.getElementById("visible-post-count");
    const noResultsMessage=document.getElementById("no-results-message");

    let currentCategory="para-ti";

    const categoryNames={
        "para-ti":"Para ti",
        "tecnologia":"Tecnología",
        "moda":"Moda",
        "gaming":"Gaming",
        "hogar":"Hogar",
        "salud":"Salud",
        "deportes":"Deportes",
        "belleza":"Belleza",
        "educacion":"Educación",
        "viajes":"Viajes"
    };


    // Buscadores
    const searchInput=document.getElementById("explore-search");
    const headerSearchInput=document.getElementById("search-products-btn");
    const globalSearchForm=document.getElementById("global-search-form");


    // Mostrar las publicaciones de cada categoria
    function filterPosts(){
        const searchText=searchInput.value.toLowerCase().trim();
        let visiblePosts=0;

        posts.forEach(function(post){
            const category=post.dataset.category;
            const postText=post.textContent.toLowerCase();
            const sameCategory=category===currentCategory;
            const matchesSearch=postText.includes(searchText);

            if(sameCategory && matchesSearch){
                post.hidden=false;
                visiblePosts++;
            }else{
                post.hidden=true;

                // Para el video si cambiamos de categoria
                const video=post.querySelector("video");
                if(video){
                    video.pause();
                }
            }
        });

        feedTitle.textContent=categoryNames[currentCategory];
        visiblePostCount.textContent=visiblePosts===1 ? "1 publicación" : visiblePosts+" publicaciones";
        noResultsMessage.hidden=visiblePosts!==0;
    }


    // Cambiar de categoria
    categoryButtons.forEach(function(button){
        button.addEventListener("click",function(){
            currentCategory=button.dataset.category;

            categoryButtons.forEach(function(btn){
                btn.classList.remove("active-category");
            });

            button.classList.add("active-category");
            filterPosts();
        });
    });


    // Buscar desde explorar
    searchInput.addEventListener("input",filterPosts);


    // Buscar desde arriba
    globalSearchForm.addEventListener("submit",function(event){
        event.preventDefault();
        searchInput.value=headerSearchInput.value;
        filterPosts();
        searchInput.scrollIntoView({behavior:"smooth",block:"center"});
    });

    headerSearchInput.addEventListener("input",function(){
        searchInput.value=headerSearchInput.value;
        filterPosts();
    });


    // Nombres para guardar la informacion
    const SAVED_STORAGE_KEY="kefexSavedExplorePosts";
    const RECOMMENDED_STORAGE_KEY="kefexRecommendedExplorePosts";
    const COMMENTS_STORAGE_KEY="kefexExploreComments";


    // Traer listas guardadas
    function getStoredArray(key){
        try{
            const data=JSON.parse(localStorage.getItem(key));
            return Array.isArray(data) ? data : [];
        }catch{
            return [];
        }
    }


    // Traer comentarios guardados
    function getStoredObject(key){
        try{
            const data=JSON.parse(localStorage.getItem(key));
            return data && typeof data==="object" ? data : {};
        }catch{
            return {};
        }
    }


    // Guardar listas
    function saveStoredArray(key,array){
        localStorage.setItem(key,JSON.stringify(array));
    }


    // Guardar comentarios
    function saveStoredObject(key,object){
        localStorage.setItem(key,JSON.stringify(object));
    }


    // Cambiar los botones de recomendar
    function updateRecommendButtons(){
        const recommendedPosts=getStoredArray(RECOMMENDED_STORAGE_KEY);

        posts.forEach(function(post){
            const postId=post.dataset.postId;
            const button=post.querySelector(".recommend-button");
            const recommended=recommendedPosts.includes(postId);

            button.classList.toggle("recommended",recommended);

            if(recommended){
                button.innerHTML='<i class="fa-solid fa-heart"></i> Recomendado';
            }else{
                button.innerHTML='<i class="fa-regular fa-heart"></i> Recomendar';
            }
        });
    }


    // Recomendar o quitar recomendacion
    function toggleRecommend(postId){
        const recommendedPosts=getStoredArray(RECOMMENDED_STORAGE_KEY);
        const position=recommendedPosts.indexOf(postId);

        if(position===-1){
            recommendedPosts.push(postId);
        }else{
            recommendedPosts.splice(position,1);
        }

        saveStoredArray(RECOMMENDED_STORAGE_KEY,recommendedPosts);
        updateRecommendButtons();
    }


    // Cambiar los botones del tablero
    function updateSaveButtons(){
        const savedPosts=getStoredArray(SAVED_STORAGE_KEY);

        posts.forEach(function(post){
            const postId=post.dataset.postId;
            const button=post.querySelector(".save-button");
            const saved=savedPosts.includes(postId);

            button.classList.toggle("saved",saved);

            if(saved){
                button.innerHTML='<i class="fa-solid fa-bookmark"></i> Guardado';
            }else{
                button.innerHTML='<i class="fa-regular fa-bookmark"></i> Tablero';
            }
        });
    }


    // Guardar o quitar del tablero
    function toggleSave(postId){
        const savedPosts=getStoredArray(SAVED_STORAGE_KEY);
        const position=savedPosts.indexOf(postId);

        if(position===-1){
            savedPosts.push(postId);
        }else{
            savedPosts.splice(position,1);
        }

        saveStoredArray(SAVED_STORAGE_KEY,savedPosts);
        updateSaveButtons();
    }


    // Mostrar comentarios guardados
    function renderComments(post){
        const postId=post.dataset.postId;
        const comments=getStoredObject(COMMENTS_STORAGE_KEY);
        const postComments=comments[postId] || [];
        const commentBox=post.querySelector(".comment-box");

        if(!commentBox){
            return;
        }

        const commentList=commentBox.querySelector(".comment-list");
        commentList.innerHTML="";

        postComments.forEach(function(comment){
            const commentItem=document.createElement("div");
            commentItem.className="comment-item";
            commentItem.innerHTML="<strong>Tú:</strong> "+comment;
            commentList.appendChild(commentItem);
        });
    }


    // Crear la parte para comentar
    function createCommentBox(post){
        const container=post.querySelector(".comments-container");
        const commentBox=document.createElement("div");

        commentBox.className="comment-box";
        commentBox.innerHTML=`
            <div class="comment-form">
                <input class="comment-input" type="text" placeholder="Escribe un comentario">
                <button class="comment-submit" type="button">Enviar</button>
            </div>
            <div class="comment-list"></div>
        `;

        container.appendChild(commentBox);

        const input=commentBox.querySelector(".comment-input");
        const submitButton=commentBox.querySelector(".comment-submit");

        // Guardar el comentario
        function saveComment(){
            const comment=input.value.trim();

            if(comment===""){
                return;
            }

            const postId=post.dataset.postId;
            const comments=getStoredObject(COMMENTS_STORAGE_KEY);

            if(!comments[postId]){
                comments[postId]=[];
            }

            comments[postId].push(comment);
            saveStoredObject(COMMENTS_STORAGE_KEY,comments);

            input.value="";
            renderComments(post);
        }

        submitButton.addEventListener("click",saveComment);

        input.addEventListener("keydown",function(event){
            if(event.key==="Enter"){
                saveComment();
            }
        });

        renderComments(post);
        return commentBox;
    }


    // Botones de cada publicacion
    posts.forEach(function(post){
        const recommendButton=post.querySelector(".recommend-button");
        const saveButton=post.querySelector(".save-button");
        const commentButton=post.querySelector(".comment-button");

        recommendButton.addEventListener("click",function(){
            toggleRecommend(post.dataset.postId);
        });

        saveButton.addEventListener("click",function(){
            toggleSave(post.dataset.postId);
        });

        commentButton.addEventListener("click",function(){
            let commentBox=post.querySelector(".comment-box");

            if(!commentBox){
                commentBox=createCommentBox(post);
            }

            commentBox.classList.toggle("show");

            if(commentBox.classList.contains("show")){
                commentBox.querySelector(".comment-input").focus();
            }
        });
    });


    // Si tenemos KEFEX abierto en otra pestaña tambien se actualiza
    window.addEventListener("storage",function(event){
        if(event.key===RECOMMENDED_STORAGE_KEY){
            updateRecommendButtons();
        }

        if(event.key===SAVED_STORAGE_KEY){
            updateSaveButtons();
        }

        if(event.key===COMMENTS_STORAGE_KEY){
            posts.forEach(function(post){
                renderComments(post);
            });
        }
    });


    // Esto carga cuando abrimos explorar
    filterPosts();
    updateRecommendButtons();
    updateSaveButtons();

});