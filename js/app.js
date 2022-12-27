

let menuToggle = document.getElementById('btnMenu');

let menuCollapse = document.getElementById('collapseMenu');
let contador =0;

menuToggle.addEventListener('click', function () {

    if (contador == 0) {
        menuCollapse.classList.remove('nav__collapse-inactive')
        contador = 1;

        console.log(contador);
    }else{
        menuCollapse.classList.add('nav__collapse-inactive')
        contador = 0; 
        
    }


})
