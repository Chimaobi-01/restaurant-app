import vegetableSalad from './assets/image/vegetableSalad.png'
import eggSalad from './assets/image/eggSalad.png'
import fattoushSalad from './assets/image/fattoushSalad.png'
import arrowLeft from './assets/icons/a-left.svg'
import arrowRight from './assets/icons/a-right.svg'


export const menu = () => {
    const popularCategories = [
        {
            title:'main dish',
            desc:'86 dishes'
        },
        {
            title:'breakfast',
            desc:'12 break fast'
        },
        {
            title:'dessert',
            desc:'48 dessert'
        },
        {
            title:'browse all',
            desc:'255 items'
        },
    ]
    class Dish {
        constructor(image,name,description,price,rating, like) {
            this.image = image
            this.name = name
            this.description = description
            this.price = price
            this.rating = rating
            this.like = like
        }
        toogleLike(){
            this.like = !this.like
        }
    }
    const dishes = [
        new Dish(fattoushSalad,'Fattoush salad','Description of the item',24.00,4.9,true),
        new Dish(vegetableSalad,'Vegetable salad','Description of the item',26.00,4.6,true),
        new Dish(eggSalad,'Egg vegi salad','Description of the item',23.00,4.5,true),
    ]
    const content = document.querySelector('#content')
    const menu = document.createElement('div')
    menu.classList.add('menu')


    menu.innerHTML = `
    <div class='popular'>
        <h2>Popular Categories</h2>
        <ul>
            ${
                popularCategories.map(category => (
                    `<li>
                        <span></span>
                        <h5>${category.title}</h5>
                        <p>${category.desc}</p>
                    </li>`
                ))
            }
        </ul>
    </div>
    <div class='special'>
            <div>
                <h2>Standout Dishes From Our Menu</h2>
                <div>
                    <span></span>
                    <span><img src='${arrowRight}' alt='icon'/></span>
                </div>
            </div>
            <ul>
            ${
                dishes.map(dish => (
                    `<li>
                        <span></span>
                        <img src='${dish.image}' alt=''>
                        <div>
                            <h5>${dish.name}</h5>
                            <p>${dish.description}</p>
                            <div>
                                <span>${dish.price.toFixed(2)}</span>
                                <span>${dish.rating}</span>
                            </div>
                        </div>
                    </li>`
                ))
            }
            </ul>
    </div>
    `



    content.innerHTML = ''
    content.appendChild(menu)
}