let responsive = document.querySelector('.responsive')
let menu = document.querySelector('.menu')

responsive.addEventListener('click', () => {
    responsive.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    menu.classList.toggle('active')
})