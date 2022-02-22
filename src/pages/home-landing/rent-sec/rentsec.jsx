import './rentsec.scss';
import Img from '../../../assets/home-assets/Rectangle625.png';
import Img1 from '../../../assets/home-assets/Rectangle100.png';
import Img2 from '../../../assets/home-assets/Rectangle101.png';
import Img3 from '../../../assets/home-assets/Rectangle102.png';
import Img4 from '../../../assets/home-assets/Rectangle103.png';
import BudgetCalc from '../../../components/budgetCalc/budgetCalc';

const datax = [
    {
        img: Img1,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img2,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img3,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img4,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img1,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img2,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img3,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    },
    {
        img: Img4,
        name: "Lagos Property Care",
        location: "Ifako, Gbagada. Lagos",
        price: "₦ 257,199 - ₦ 257,199,000 "
    }
]

const data = [
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to rent a home in Lagos state",
        date: "OCT 2021",
        img: Img
    }
]

const Rentsec = () => {
    return (
        <div className="rent-secx">
            <div className="main-divx">
                <div className="txt-btnx">
                    <div className="txtx">
                        <p className="topx"><span>Rental</span> Homes For Everyone</p>
                        <p className="bottomx">Explore from Apartments, land, builder floors, villas and more</p>
                    </div>
                    <button>Explore Renting <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="flexboxx">
                <div className="overlay-divx">
                    <div className="topx">
                        <div className="leftx">
                            <p className="top-txtx">Some Tips On How To Get The Best Rent Deal</p>
                            <p className="btm-txtx">Some tips on how to manage your budget in real estate</p>
                        </div>
                        <div className="rightsx">
                            <div className='ttx'>
                                {data.slice(data.length/2).map(({title, date, img}, index) => {
                                    return (
                                        <div className="item-divx" key={index}>
                                            <div style={{backgroundImage: `url(${img})`}} className="leftxx"></div>
                                            <div className="rightxx">
                                                <p className="t-txtx">{title}</p>
                                                <p className="b-txtx">{date}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='btx'>
                                {data.slice(data.length/2).map(({title, date, img}, index) => {
                                    return (
                                        <div className="item-divx" key={index}>
                                            <div style={{backgroundImage: `url(${img})`}} className="leftxx"></div>
                                            <div className="rightxx">
                                                <p className="t-txtx">{title}</p>
                                                <p className="b-txtx">{date}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="bottom-contx">
                                <BudgetCalc text="rent" text2="Explore Renting"/>
                    </div>
                    
                </div>
            </div>

            <div className="buy-deals">
                <p className="titleb">Recommended Rent Deals</p>
                <p className="parab">Featured properties to rent nearest to you</p>

                <div className="flexy">
                    {datax.map(({img, name, location, price}, index) => {
                        return (
                            <div className="item" key={index}>
                                <div style={{backgroundImage: `url(${img})`}} className="i-top"></div>
                                <div className="i-banner">Featured Project</div>
                                <div className="i-bottom">
                                    <p className="name">{name}</p>
                                    <p className="location"><i className="fas fa-map-marker-alt"></i> {location}</p>
                                    <p className="type">Flats, Villa & Penthouse</p>
                                    <p className="price">{price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
           
        </div>
    )
}

export default Rentsec;