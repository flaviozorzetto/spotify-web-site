const accountAnchor = document.querySelector(".profile-container");
const accountMenu = document.querySelector(".account-menu");

document.addEventListener("click", (event) => {
    let ignoreClick = (accountMenu == event.target)

    if(!ignoreClick){
        if(accountMenu.className.includes("open")) {
            accountMenu.className = "account-menu";
        }
    } 
})

accountAnchor.addEventListener("click", (event) => {
    let ignoreClick = (accountMenu == event.target)

    if(!ignoreClick) {
        if(accountMenu.className.includes("open")) {
            accountMenu.className = "account-menu";
        } else {
            setTimeout(() => {
                accountMenu.className += " open";
            }, 1)
        }
    }
})







