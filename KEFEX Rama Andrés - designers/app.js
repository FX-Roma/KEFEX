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


    // Frases totalmente profesionales
    const randomMessageButton=document.getElementById("random-message-btn");
    const randomMessage=document.getElementById("random-message");

    const messages=[
        "Si funciona, no lo toques.",
        "99 bugs en el código, arreglas uno... 127 bugs en el código.",
        "Ctrl + Z también cuenta como herramienta de desarrollo.",
        "No es un bug. Es una funcionalidad sorpresa.",
        "Funciona en mi computador.",
        "El CSS no está mal, simplemente tiene personalidad.",
        "Hoy sí entendemos JavaScript. Mañana veremos.",
        "Google también es parte del equipo.",
        "Commit primero, preguntas después.",
        "Si la profe pregunta, todo estaba planeado."
    ];

    randomMessageButton.addEventListener("click",function(){
        const randomNumber=Math.floor(Math.random()*messages.length);
        randomMessage.textContent=messages[randomNumber];

        randomMessage.animate(
            [
                {opacity:0,transform:"translateY(5px)"},
                {opacity:1,transform:"translateY(0)"}
            ],
            {duration:300}
        );
    });


    // Datos confidenciales de cada uno
    const secretButtons=document.querySelectorAll(".secret-button");

    secretButtons.forEach(function(button){
        button.addEventListener("click",function(){
            const card=button.closest(".team-card");
            const secretText=card.querySelector(".secret-text");

            secretText.classList.toggle("show");

            if(secretText.classList.contains("show")){
                button.textContent="Ocultar evidencia";
            }else{
                button.textContent="Ver dato confidencial";
            }
        });
    });


    // Contadores de arriba
    const counters=document.querySelectorAll(".counter");
    let countersStarted=false;

    function startCounters(){
        if(countersStarted){
            return;
        }

        countersStarted=true;

        counters.forEach(function(counter){
            const target=Number(counter.dataset.target);
            let current=0;
            const speed=Math.max(1,Math.floor(target/50));

            const interval=setInterval(function(){
                current+=speed;

                if(current>=target){
                    current=target;
                    clearInterval(interval);
                }

                counter.textContent=current;
            },25);
        });
    }


    // Animacion cuando aparecen las secciones
    const thingsToReveal=document.querySelectorAll(".stat-card,.team-card,.project-card,.timeline-item,.final-section");

    thingsToReveal.forEach(function(element){
        element.classList.add("reveal");
    });

    const observer=new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("show");

                if(entry.target.classList.contains("stat-card")){
                    startCounters();
                }
            }
        });
    },{
        threshold:.15
    });

    thingsToReveal.forEach(function(element){
        observer.observe(element);
    });


    // Efecto de movimiento en las tarjetas
    const teamCards=document.querySelectorAll(".team-card");

    teamCards.forEach(function(card){

        card.addEventListener("mousemove",function(event){
            const rect=card.getBoundingClientRect();

            const mouseX=event.clientX-rect.left;
            const mouseY=event.clientY-rect.top;

            const rotateY=((mouseX/rect.width)-.5)*5;
            const rotateX=((mouseY/rect.height)-.5)*-5;

            card.style.transform="perspective(900px) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg) translateY(-8px)";
        });

        card.addEventListener("mouseleave",function(){
            card.style.transform="";
        });
    });

});