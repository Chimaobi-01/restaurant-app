export const home = () => {

    const content = document.querySelector('#content')
    const home = document.createElement('div')
    home.classList.add('home')
    home.innerHTML = `
    <div class='content-wrap'>
        <h1>dive into delights of delectable <span>food</span></h1>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <div class='button-wrap'>
            <button>order now</button>
            <button>watch video</button>
        </div>
    </div>
    <div class='image-wrap'>
        <img src="" alt="">
    </div>
    `


    content.innerHTML = ''
    content.appendChild(home)
}
