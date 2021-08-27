let open = false;

const button = document.querySelector('.menu__burger')
const menu = document.querySelector('.burger__menu')
const header = document.querySelector('.header__info')
const headerBlock = document.querySelector('header')
const read = document.querySelector('.read')
const text = document.querySelector('.hidden')

button.addEventListener('click', () => {
    open = true;
    menu.style.display = 'block'
    headerBlock.style.margin = '-150px 0 0 0'
    menu.style.top = '150px'
    
})

header.addEventListener('click', () => {
    open = false;
    menu.style.display = 'none'
    headerBlock.style.margin = '0 0 0 0'
})

read.addEventListener('click', () => {
    text.style.display = 'block'
})