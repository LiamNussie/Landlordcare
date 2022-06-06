import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Highlights from '../highlights/highlights';
import Buysec from '../home-landing/buy-sec/buysec';
import Explore from '../home-landing/explore/explore';
import Hero from '../home-landing/hero/hero';
import './loggedHome.scss';
import Img from '../../assets/home-assets/Rectangle625.png';
import Img1 from '../../assets/home-assets/Rectangle100.png';
import Img2 from '../../assets/home-assets/Rectangle101.png';
import Img3 from '../../assets/home-assets/Rectangle102.png';
import Img4 from '../../assets/home-assets/Rectangle103.png';
import Rentsec from '../home-landing/rent-sec/rentsec';
import Testimonies from '../home-landing/testimonies/testimonies';
import TopDealers from '../home-landing/topDealers/topDealers';
import BudgetCalc from '../../components/budgetCalc/budgetCalc';
import ExploreL from '../home-landing/exploreL/exploreL';
import ReviewModal from '../../components/reviewModal/reviewModal';
import { useState } from 'react';

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

const comments = [
    {
        user: "Toyosi",
        role: "tenant",
        date: "May 2019",
        rating: "4.5",
        comment: "Cozy spot! Lara was extremely helpful and very accommodating after so much"
    },
    {
        user: "Toyosi",
        role: "tenant",
        date: "May 2019",
        rating: "4.5",
        comment: "Cozy spot! Lara was extremely helpful and very accommodating after so much"
    },
    {
        user: "Toyosi",
        role: "tenant",
        date: "May 2019",
        rating: "4.5",
        comment: "Cozy spot! Lara was extremely helpful and very accommodating after so much"
    },
    {
        user: "Toyosi",
        role: "tenant",
        date: "May 2019",
        rating: "4.5",
        comment: "Cozy spot! Lara was extremely helpful and very accommodating after so much"
    },
    {
        user: "Toyosi",
        role: "tenant",
        date: "May 2019",
        rating: "4.5",
        comment: "Cozy spot! Lara was extremely helpful and accommodating after so much"
    }
]


const LoggedHome = () => {

    const [showReviewModal, setShowReviewModal] = useState(false);

    return (
        <div className="logged-home">
            <Hero />
            {/* <Buysec />
            <Highlights /> */}
            {/* <Rentsec /> */}


            <div className="buy-deals">
                <p className="titleb">Based on your last searches</p>
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

            <div className="rent-sec">
            <div className="main-div">
                <div className="txt-btn">
                    <div className="txt">
                        <p className="top">Rate your locality</p>
                        <p className="bottom">Tell so what’s so spectacular about your enviroment</p>
                    </div>
                    <button onClick={() => setShowReviewModal(true)}>Rate your locality <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="flexbox">
                <div className="overlay-div">
                    <div className="top">
                        <div className="left">
                            <p className="top-txt">Other People gave these ratings about your location</p>
                            {/* <p className="btm-txt">Some tips on how to manage your budget in real estate</p> */}
                        </div>
                        <div className="right">
                        <div className="comments">
                        {comments.map(({user, role, date, comment, rating}, index) => {
                            return (
                                <div className="comment" key={index}>
                                    <div className="ctop">
                                        <div className="cleft">
                                            <p className="user">{user}<span>{role}</span></p>
                                            <p className="date">{date}</p>
                                        </div>
                                        <div className="cright">
                                            <button><i className="fas fa-star"></i>{rating}</button>
                                        </div>
                                    </div>
                                    <p className="cpara">{comment}...<span>read more</span></p>
                                </div>
                            )
                        })}
                    </div>
                        </div>
                    </div>

                    <div className="bottom-cont">
                                {/* <BudgetCalc text="rent" text2="Renting"/> */}
                    </div>
                    
                </div>
            </div>

            <div className="buy-deals">
                <p className="titleb">Properties based on your current location</p>
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

            <br />
            <br />

            <div className="main-div">
                <div className="txt-btn">
                    <div className="txt">
                        <p className="top">Whats your budget?</p>
                        <p className="bottom">Lets help youur narrow the search to fit your budget</p>
                    </div>
                    <button>Calculate your budget <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="flexbox">
                <div className="overlay-div">
                    <div className="top2">
                        <div className="left">
                            <p className="top-txt">Some tips on how to manage your budget in realestate</p>
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
                                <BudgetCalc auth={true} text="rent" text2="Change budget"/>
                    </div>
                    
                </div>
            </div>

            <div className="buy-deals">
                <p className="titleb">Properties based on your current budget</p>
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

            <ExploreL />
            <TopDealers />
            <Testimonies />
            {showReviewModal && <ReviewModal setShowReviewModal={setShowReviewModal} />}
        </div>
    )
}

export default LoggedHome;