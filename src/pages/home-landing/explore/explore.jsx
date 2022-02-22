import './explore.scss';
import Imgx1 from '../../../assets/home-assets/Rectangle109.png';
import Imgx2 from '../../../assets/home-assets/Rectangle110.png';
import Imgx3 from '../../../assets/home-assets/Rectangle111.png';
import Imgx4 from '../../../assets/home-assets/Rectangle112.png';
import Img1 from '../../../assets/home-assets/Rectangle105.png';
import Img2 from '../../../assets/home-assets/Rectangle106.png';
import Img3 from '../../../assets/home-assets/Rectangle107.png';
import Img4 from '../../../assets/home-assets/Rectangle108.png';
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
        state: "Lagos",
        number: "100,000+",
        image: Imgx1,
        color: "#9A819F"
    },
    {
        state: "Ogun",
        number: "100,000+",
        image: Imgx2,
        color: "#829F81"
    },
    {
        state: "Abuja",
        number: "100,000+",
        image: Imgx3,
        color: "#576984"
    },
    {
        state: "Delta",
        number: "100,000+",
        image: Imgx4,
        color: "#68574B"
    }
]

const Explore = () => {
    return (
        <div className="explore">
            <div className="main-div">
                <div className="txt-btn">
                    <div className="txt">
                        <p className="top"><span>Explore</span> Real Estate in Popular Cities</p>
                        <p className="bottom">Explore from Apartments, land, builder floors, villas and more</p>
                    </div>
                    {/* <button>Explore Renting <i className="fas fa-arrow-right"></i></button> */}
                </div>
            </div>
            <div className="flexbox">
                <div className="overlay-div">
                    <div className="flex-conty">
                        {data.map(({state, number, image, color}, index) => {
                            return (
                                <div className="cont" key={index}>
                                    <div className="topc" style={{backgroundImage: `url(${image})`}}></div>
                                    <div style={{backgroundColor: color}} className="btmc">
                                        <p className="tt">{state}</p>
                                        <p className="b">{number} Properties</p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="left">
                            <p className="top-txt">Some Tips On How To Get The Best Rent Deal</p>
                            <p className="btm-txt">Some tips on how to manage your budget in real estate</p>
                        </div>
                        <div className="right">
                            <div className='tt'>
                                {data.slice(data.length/2).map(({state, number, img}, index) => {
                                    return (
                                        <div className="item-div" key={index}>
                                            <div style={{backgroundImage: `url(${img})`}} className="leftx"></div>
                                            <div className="rightx">
                                                <p className="t-txt">{state}</p>
                                                <p className="b-txt">{number}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='bt'>
                                {data.slice(data.length/2).map(({state, number, img}, index) => {
                                    return (
                                        <div className="item-div" key={index}>
                                            <div style={{backgroundImage: `url(${img})`}} className="leftx"></div>
                                            <div className="rightx">
                                                <p className="t-txt">{state}</p>
                                                <p className="b-txt">{number}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="bottom-cont">
                                <BudgetCalc text="rent" text2="Renting"/>
                    </div> */}
                    
                </div>
            </div>

            <div className="buy-deals">
                <p className="titleb">Trending Properties For You</p>
                <p className="parab">Featured properties to buy/rent nearest to you</p>

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

export default Explore;