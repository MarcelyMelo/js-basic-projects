const btn = document.querySelector('.ham');
const links = document.querySelector('.nav-links')


btn.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})