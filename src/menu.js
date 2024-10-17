export const menu = () => {
    const content = document.querySelector('#content')
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.innerHTML = `
    <h2>This is menu content</h2>
    `



    content.innerHTML = ''
    content.appendChild(menu)
}