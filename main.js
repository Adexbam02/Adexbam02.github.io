// SHADOW UNDER NAV AFTER SCROLL
const nav = document.getElementById("nav")

window.onscroll =  () =>{
    const shadoww = () =>{
        if(window.pageYOffset > 30){
            nav.classList.add("shadow")
        }else{
            nav.classList.remove("shadow")
        }
    }
    return shadoww()
}


// NAVMENU OPEN & CLOSE
const openMenu = document.getElementById("open-menu-button")
const closeMenu = document.getElementById("close-menu-button")
const menu = document.getElementById("navMenu")
const lii = document.querySelectorAll("li")

openMenu.addEventListener("click", ()=>{
    menu.style.display = "block"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})

closeMenu.addEventListener("click", ()=>{
    menu.style.display = "none"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})