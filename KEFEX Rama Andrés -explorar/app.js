// ==============================
// MODO CLARO / OSCURO
// ==============================

const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "dark mode 🌙";
    } else {
        themeButton.textContent = "light mode ☀️";
    }

});


// ==============================
// RECOMENDAR
// ==============================

const recommendButtons = document.querySelectorAll(".recommend-button");
console.log(recommendButtons);

recommendButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("recommended");

        if (button.classList.contains("recommended")) {
            button.textContent = "Recomendado ✓";
        } else {
            button.textContent = "Recomendar";
        }

    });

});


// ==============================
// GUARDAR EN TABLERO
// ==============================

const boardButtons = document.querySelectorAll(".board-button");

boardButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("saved");

        if (button.classList.contains("saved")) {
            button.textContent = "Guardado ✓";
        } else {
            button.textContent = "Tablero";
        }

    });

});

