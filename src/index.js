import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";

console.log('working fine...');

home()
document.body.addEventListener('click', switchTab)



function switchTab(e) {
    const element = e.target
    const homeButton = element.id.includes('home-btn')
    const aboutButton = element.id.includes('about-btn')
    const menuButton = element.id.includes('menu-btn')


    if(homeButton){
        home()
    }
    if(aboutButton){
        about()
    }
    if(menuButton){
        menu()
    }
}