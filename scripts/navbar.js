let ham = document.querySelectorAll('.hamburger img')[0];
let close = document.querySelectorAll('.hamburger img')[1];
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let navplate = document.querySelector('.navplate');

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

displaynav();
displayclose();
shadowmain();
shadowfoot();
ham.addEventListener('click',function(){
    displayham();
    displayclose();
    displaynav();
    shadowmain();
    shadowfoot();
})

close.addEventListener('click',function(){
    displayham();
    displayclose();
    displaynav();
    shadowmain();
    shadowfoot();
})
