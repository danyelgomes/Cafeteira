let menu = document.querySelector('header nav')
let icon = document.getElementById('icon')

icon.addEventListener('click', function() {
    menu.classList.toggle('aberto')
})