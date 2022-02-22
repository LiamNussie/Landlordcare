import './buysec.scss';
import Img from '../../../assets/home-assets/Rectangle625.png';
import Img1 from '../../../assets/home-assets/Rectangle628.png';
import Img2 from '../../../assets/home-assets/Rectangle629.png';
import Img3 from '../../../assets/home-assets/Rectangle630.png';
import Img4 from '../../../assets/home-assets/Rectangle631.png';
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
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    },
    {
        title: "When best to buy a land in Lagos state",
        date: "OCT 2021",
        img: Img
    }
]

const Buysec = () => {
    return (
        <div className="buy-sec">
            <div className="main-div">
                <div className="txt-btn">
                    <div className="txt">
                        <p className="top">Find And <span>Buy</span> Your Dream Home</p>
                        <p className="bottom">Explore from Apartments, land, builder floors, villas and more</p>
                    </div>
                    <button>Explore Buying <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="flexbox">
                <div className="overlay-div">
                    <div className="top">
                        <div className="left">
                            <p className="top-txt">Tips on buying the right property</p>
                            <p className="btm-txt">Some tips on how to manage your budget in real estate</p>
                        </div>
                        <div className="right">
                            <div className='tt'>
                                {data.slice(data.length/2).map(({title, date, img}, index) => {
                                    return (
                                        <div className="item-div" key={index}>
                                            <div style={{backgroundImage: `url(${img})`}} className="leftx"></div>
                                            <div className="rightx">
                                                <p className="t-txt">{title}</p>
                                                <p className="b-txt">{date}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='bt'>
                                {data.slice(data.length/2).map(({title, date, img}, index) => {
                                    return (
                                        <div className="item-div" key={index}>
                                            <div style={{backgroundImage: `url(${img})`}} className="leftx"></div>
                                            <div className="rightx">
                                                <p className="t-txt">{title}</p>
                                                <p className="b-txt">{date}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="bottom-cont">
                                <BudgetCalc text="buy" text2="Explore Buying" />
                    </div>
                    
                </div>
            </div>

            <div className="buy-deals">
                <p className="titleb">Recommended Buy Deals</p>
                <p className="parab">Featured properties to buy nearest to you</p>

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

export default Buysec;