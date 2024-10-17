export const about = () => {
    const content = document.querySelector('#content')
    const about = document.createElement('div')
    about.classList.add('about')
    about.innerHTML = `
    <h2>This is about content</h2>
    `
    

    
    content.innerHTML = ''
    content.appendChild(about)
}