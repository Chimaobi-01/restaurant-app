export const services = () => {
    const serviceList = [
        {
            name: 'Catering',
            description: 'Delight your guests with our flavors and presentation'
        },
        {
            name: 'Fast delivery',
            description: 'We deliver your order promptly to your door'
        },
        {
            name: 'Online Ordering',
            description: 'Explore menu & order with ease using our Online Ordering'
        },
        {
            name: 'Gift Cards',
            description: 'Give the gift of exceptional dining with Foodi Gift Cards'
        },
    ]
    const content = document.querySelector('#content')
    const services = document.createElement('div')
    services.classList.add('services')
    services.innerHTML = `
        <section>
            <h2>Our Culinary Journey And Services</h2>
            <p>
            Rooted in passion, we curate unforgettable dining experiences 
            and offer exceptional services, blending culinary 
            artistry with warm hospitality.
            </p>
            <button>Explore</button>
        </section>
        <div>
            <ul>
                ${serviceList.map(service => (
        `       <li>
                    <span></span>
                    <h5>${service.name}</h5>
                    <p>${service.description}</p>
                </li>`
    ))}
            </ul>
        </div>
    `



    content.innerHTML = ''
    content.appendChild(services)
}