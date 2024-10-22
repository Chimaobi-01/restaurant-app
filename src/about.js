export const about = () => {
    const content = document.querySelector('#content')
    const about = document.createElement('div')
    about.classList.add('about')
    about.innerHTML = `
    <div></div>
    <section>
        <h2>What Our Customers Say About Us</h2>
        <p>
            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! 
            The attention to detail in presentation and service was impeccable”
        </p>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>
                <p>Customer Feedback</p>
                <span>
                    <span>4.9</span>
                    <span>(18.6k Reviews)</span>
                </span>
            </div>
        </div>
    </section>
    `



    content.innerHTML = ''
    content.appendChild(about)
}