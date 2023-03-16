/* ====ScrollReveal==== */
ScrollReveal({ reset: true });
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.pudline',{delay:250});
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 1000 });


document.getElementById('contac').addEventListener("click",function(){
    sweetAlert("hola","no disponible","success")

});