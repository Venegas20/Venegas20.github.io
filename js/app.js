

let menuToggle = document.getElementById('btnMenu');

const menuCollapse = document.getElementById('collapseMenu');

menuToggle.addEventListener('click', function () {

    console.log("click");
    // menuCollapse.classList.toggle('inactive')
    let h = menuCollapse.scrollHeight;
    let h2 = menuCollapse.clientHeight;
    console.log("scroll:", h);
    console.log("client:", h2);
    let heigth = 0;
    if (menuCollapse.clientHeight == "0") {
        heigth = menuCollapse.scrollHeight;
    }
    menuCollapse.style.height = `${heigth}px`;
});


window.onload = function () {
    document.getElementById("load").style.display = "none"

};

/* ===Animacion de texto=== */
new TypeIt("#tipear", {
    strings: ["Desarrollador Front-end"],
//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
shuffle: false, // Alterar el orden en el que escribe las palabras.
backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
loop: true, // Repetir el array de strings
loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
showCursor: true, // Mostrar cursor palpitanto
cursorChar: '|', // Caracter para el cursor
contentType: 'html', // 'html' o 'null' para texto sin formato
}).go();

/* ====ScrollReveal==== */
// ScrollReveal({ reset: true });
ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });






