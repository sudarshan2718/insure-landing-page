let ham = document.querySelector('#ham');
let close = document.querySelector('#close');
let body = document.querySelector('body');
// background: linear-gradient(rgba(0, 0, 0, 0.623),rgba(0, 0, 0, 0.363),rgba(0, 0, 0, 0.397),rgba(0, 0, 0, 0.24));
ham.addEventListener('click',function(){
    body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.623),rgba(0, 0, 0, 0.363),rgba(0, 0, 0, 0.397),rgba(0, 0, 0, 0.24))'
    this.style.display="none";
    close.style.display ="inline-block";
})

close.addEventListener('click',function(){
    body.style.background = '';
    
    this.style.display="none";
    ham.style.display ="inline-block";
})