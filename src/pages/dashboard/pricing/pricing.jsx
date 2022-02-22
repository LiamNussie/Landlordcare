import './pricing.scss';

const data = [
    {
        plan: "Premium",
        price: "Free",
        temp: "Current plan"
    },
    {
        plan: "Premium",
        price: "₦ 257,199",
        temp: "Try for free"
    },
    {
        plan: "Premium",
        price: "₦ 257,199",
        temp: "Try for free"
    },
    {
        plan: "Premium",
        price: "₦ 257,199",
        temp: "Try for free"
    },
    {
        plan: "Premium",
        price: "Custom",
        temp: "Contact Us"
    }
]

const Pricing = () => {
    return (
        <div className="pricing">
            <p className="titlep">Plans and pricing</p>
            <p className="para">Simple pricing, No hidden fees, Advanced features for your business</p>

            <svg width="1142" height="13" viewBox="0 0 1142 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.912109" y="4.35107" width="1140.37" height="4" rx="2" fill="#BFBFB7"/>
                <rect x="0.912109" y="4.35107" width="163.348" height="4" rx="2" fill="#F36B09"/>
                <circle cx="166.477" cy="6.35107" r="5.5" fill="#F36B09" stroke="white"/>
            </svg>

            <div className="plans">
                {data.map(({plan, price, temp}, index) => {
                    return (
                        <div className="plan" key={index}>
                            <p className="type"><i className="fas fa-star"></i>{plan}</p>
                            <p className="info">Perfect plan for starters</p>
                            <p className="price">{price}</p>
                            <p className="month">/month</p>
                            <p className="action">{temp}</p>
                            <ul className="benefits">
                                <li><i className="fas fa-check"></i>Up to 11 properties</li>
                                <li><i className="fas fa-check"></i>Up to 11 properties</li>
                                <li><i className="fas fa-check"></i>Up to 11 properties</li>
                                <li><i className="fas fa-check"></i>Up to 11 properties</li>
                            </ul>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Pricing;