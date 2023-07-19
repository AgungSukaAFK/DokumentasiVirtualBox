// window.scrollTo(0,0)

const height = window.innerHeight;

// Sidebar 
const Sidebar = document.querySelector(".sidebar")
const Article = document.querySelector(".article")
const Video = document.querySelector(".landingVideo")
const ButtonSidebar = document.querySelector(".burger");
const Shortcut = document.querySelector(".shortcut");
const SidebarTitle = document.querySelector(".sidebarTitle");
const BtnLink = document.querySelectorAll(".btnLink");
// ButtonSidebar.style.display = "none"
// window.onscroll = () => {
//     console.log(scrollY)
//     if(scrollY > height - 20){
//         ButtonSidebar.style.display = "Block"
//     } else {
//         ButtonSidebar.style.display = "none"
//     }
// }

ButtonSidebar.addEventListener("click", handleClickBurger);
// BtnLink.addEventListener("click", handleClickBurger);
BtnLink.forEach(e => {
    e.addEventListener("click", handleClickBurger);
})

function handleClickBurger(){
let sideWidth = Sidebar.offsetWidth
    console.log(sideWidth)
    if(sideWidth > 50){
        Sidebar.style.width = "0"
        Sidebar.style.padding = "0"

        SidebarTitle.style.display = "none"
        Shortcut.style.display = "none"
        Shortcut.style.opacity = 0
        
        Article.style.width = "100%"
    } else {
        Sidebar.style.width = "20vw"
        Sidebar.style.padding = "10px"
        
        SidebarTitle.style.display = "block"
        Shortcut.style.display = "block"
        Shortcut.style.opacity = 1

        Article.style.width = "80%"
    }
}