let ham = document.querySelectorAll('.hamburger img')[0];
let close = document.querySelectorAll('.hamburger img')[1];
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let navplate = document.querySelector('.navplate');
let hero = document.querySelector('.hero');
let space = document.querySelector('#space');

space.classList.add('shadowspace');
hero.classList.add('shadowhero');
ham.classList.add('ham');
close.classList.add('close');
navplate.classList.add('navdisplay');
main.classList.add('shadowmain');
footer.classList.add('shadowfoot');
let shadowmain = () => main.classList.toggle('shadowmain');
let shadowfoot = () => footer.classList.toggle('shadowfoot');
let displaynav = () => navplate.classList.toggle('navdisplay');
let displayclose = () => close.classList.toggle('close');
let displayham = () => ham.classList.toggle('ham');
let shadowhero = () => hero.classList.toggle('shadowhero');
let shadowspace = () => space.classList.toggle('shadowspace');
displaynav();
displayclose();
shadowmain();
shadowfoot();
shadowhero();
shadowspace();
ham.addEventListener('click',function(){
    displayham();
    displayclose();
    displaynav();
    shadowmain();
    shadowfoot();
    shadowhero();
    shadowspace();
})

close.addEventListener('click',function(){
    displayham();
    displayclose();
    displaynav();
    shadowmain();
    shadowfoot();
    shadowhero();
    shadowspace();
})
