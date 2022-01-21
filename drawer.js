const burgerAnchor = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");
const backgroundOverlay = document.querySelector(".overlay");
const drawerItems = document.querySelectorAll(".drawer-container .slide-binder");

function removeSlideBind() {
    drawerItems.forEach(e => {
        e.className = e.className.replace(" slide-left", "")
    })
}

function bindDrawerSlide() {
    drawerItems.forEach(e => {
        e.className += " slide-left"
    })
}

function closeDrawer() {
    console.log('fechando')
    burgerAnchor.className = "burger"
    drawer.className = "drawer flex flex-column space-between"
    document.body.className = ""
    backgroundOverlay.style.display = "none"
    removeSlideBind()
}

function openDrawer() {
    console.log('abrindo')
    burgerAnchor.className += " x"
    drawer.className += " drawer-open"
    document.body.className += " overflow-hidden"
    backgroundOverlay.style.display = "block"
    bindDrawerSlide();
} 

function hideDrawer() {
    console.log("escondendo")
    drawer.className += " hidden"
    document.body.className = ""
    backgroundOverlay.style.display = "none"
    removeSlideBind()
}

function unhideDrawer() {
    console.log("aparecendo")
    drawer.className = drawer.className.replace("hidden","")
    document.body.className += " overflow-hidden"
    backgroundOverlay.style.display = "block"
    bindDrawerSlide();
}

document.addEventListener("click", (e) => {
    let halfSize = (window.innerWidth - 447);

    if(burgerAnchor.className.includes("x")){
        e.pageX <= halfSize ? !drawer.className.includes("hidden") ? closeDrawer() : null : null
    }
})

burgerAnchor.addEventListener("click", () => {
    burgerAnchor.className.includes("x") ? closeDrawer() : openDrawer();
})

const closeDrawerMedia = window.matchMedia("(min-width: 992px)")

window.addEventListener("resize", () => {

    if(closeDrawerMedia.matches){

        burgerAnchor.className.includes("x") && !drawer.className.includes("hidden") ? hideDrawer() : null 

    } else {

        drawer.className.includes("hidden") ? unhideDrawer() : null

    }

})