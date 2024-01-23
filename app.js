let search = document.querySelector('.searchbox');

document.querySelector('#searchicon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');
document.querySelector('#menuicon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
});