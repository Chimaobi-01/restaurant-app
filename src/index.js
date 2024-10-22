import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import { services } from "./services";
import './global.css'


home()
document.body.addEventListener('click', switchTab)


function switchTab(e) {
    const element = e.target
    const homeButton = element.id.includes('home-btn')
    const servicesButton = element.id.includes('services-btn')
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
    if(servicesButton){
        services()
    }
}