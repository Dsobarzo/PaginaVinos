
let menu = document.querySelector('#menu');
let toggleIcon = document.querySelector('#toggle-icon');
let botella = document.querySelector('#icono');

toggleIcon.addEventListener("click", function (){
    alert("Funciona");
    menu.classList.toggle("menu-on");
});

toggleIcon.addEventListener("click", function(){
    consol.log("Hola mundo");
});

botella.addEventListener("click", function(){
    alert("Funciona");
    console.log("Hola Mundo");
})