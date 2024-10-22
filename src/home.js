import girl from './assets/image/girl.png'
import play from './assets/icons/play.svg'

export const home = () => {

    const content = document.querySelector('#content')
    const home = document.createElement('div')
    home.classList.add('home')
    home.innerHTML = `
    <div class='content-wrap'>
        <div>
            <h1>dive into delights of delectable <span>food</span></h1>
            <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <div class='button-wrap'>
                <button>order now</button>
                <button>watch video <span><img src='${play}' alt=''></span></button>
            </div>
        </div>
    </div>
    <div class='image-wrap'>
        <img src='${girl}' alt="girl eating and smiling">
    </div>
    `


    content.innerHTML = ''
    content.appendChild(home)
}
