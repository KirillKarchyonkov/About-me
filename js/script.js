const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')
const anchors = document.querySelectorAll('a[href*="#"]')
const headerLink = document.querySelectorAll('.header__link')

burger.addEventListener("click", () => {
    burger.classList.toggle('header__burger_active')
    menu.classList.toggle('header__menu_active')
    body.classList.toggle('lock')

})


for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {

        const blockID = anchor.getAttribute('href')
        event.preventDefault();
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

        
    })
}

for (let link in headerLink) {
    
    headerLink[link].addEventListener("click", () => {
        burger.classList.remove('header__burger_active')
        menu.classList.remove('header__menu_active')
        body.classList.remove('lock')
    })
}
