import './searchPage.scss';
import Lagos from '../../assets/home-assets/lagos.png';
import Map from './map.svg';
import Stars from './stars.svg';
import Check from '../../assets/checkicon.png';
import Chart from '../../assets/chart.png';
import Img1 from '../../assets/home-assets/Rectangle628.png';
import Img2 from '../../assets/home-assets/Rectangle629.png';
import Img3 from '../../assets/home-assets/Rectangle630.png';
import Img4 from '../../assets/home-assets/Rectangle631.png';
import Imga from '../../assets/power.png';
import Imgb from '../../assets/security.png';
import Imgc from '../../assets/connect.png';
import Footer from '../../components/footer/footer';

const data = ["Localities Inside Lagos", "Commercial Hub", "Hospitals", "Educational Institutions", "Shopping Centres", "Airport", "Transportation", "Fun Hubs"]
const datax = [
    "2min walking distance from Ojudu Bustop, Kadiri Road , Gaffar Market, Amuwo Odofin",
    "20 minutes drive from MM International Airport",
    "20 minutes drive from MM International Airport",
    "2min walking distance from Ojudu Bustop, Kadiri Road , Gaffar Market, Amuwo Odofin",
    "20 minutes drive from MM International Airport",
    "20 minutes drive from MM International Airport"
]
const dataxx = [
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
const dataxxx = [
    {
        title: "Power Supply",
        icon: Imga,
        rating: "5"
    },
    {
        title: "Security",
        icon: Imgb,
        rating: "3"
    },
    {
        title: "Connectivity",
        icon: Imgc,
        rating: "3"
    },
    {
        title: "Lifestyle",
        icon: Imgc,
        rating: "5"
    },
    {
        title: "Enviroment",
        icon: Imgc,
        rating: "4"
    }
]
const dataxxxx = [
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
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

const SearchPage = () => {
    return (
        <div className="search-page">
            <div className="pic-map">
                <div style={{backgroundImage: `url(${Lagos})`}} className="pic">
                    <p className="ltop">LAGOS</p>
                    <p className="lbtm">The center of Excellence</p>
                </div>
                <div style={{backgroundImage: `url(${Map})`}} className="map"></div>
            </div>
            <ul className="opt-banner">
                <li>Overview</li>
                <li>Inside Locality</li>
                <li>Location Advantage</li>
                <li>Price Trend</li>
                <li>Projects</li>
                <li>Builders</li>
                <li>Agents</li>
                <li>Similar Localities</li>
            </ul>
            <div className="down-content">
                <div className="overview">
                    <p className="name">Lagos, </p>
                    <p className="code">Postal Code: 100001</p>
                    <div className="rate-rank">
                        <div className="rating">
                            <div className="rtop">4.7 <img src={Stars} alt="stars" /></div>
                            <p className="val">36 reviews</p>
                        </div>
                        <div className="rank">
                            <p className="rrtop">Rank 46</p>
                            <p className="rrbtm">out of 1981 Localities</p>
                        </div>
                        <div className="btn">
                            <button>Write a review<i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

                <div className="locality">
                    <p className="title">About Lagos</p>
                    <p className="para">Three things come to mind while thinking about Lagos: business, pleasure, and traffic. Any other way of describing it would be a great injustice. It is distinguished by its liveliness and a very inspiring atmosphere. Lagos might be thought of as the country's blood supply. It's considered the "hub of excellence," but if the country were a human, Lagos would be its whole artery. If the country were a cup of coffee, this metropolis would be the cream on top..</p>
                    <p className="more">See More.</p>

                    <div className="locs">
                        {data.map((i, index) => {
                            return (
                                <div className="lbox" key={index}>
                                    <p className="ltitle">{i}</p>
                                    <ul>
                                        <li><i className="fas fa-square-full"></i>Alimosho</li>
                                        <li><i className="fas fa-square-full"></i>Agege</li>
                                        <li><i className="fas fa-square-full"></i>Ajeromi-Ifelodun</li>
                                    </ul>
                                    <p className="morex">+12 more</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="advantage">
                    <p className="atitle">Location Advantage</p>
                    <div className="aflex">
                        {datax.map((i, index) => {
                            return (
                                <div className="abox" key={index}>
                                    <img src={Check} alt="check-icon" />
                                    <p className="atxt">{i}</p>
                                </div>
                            )
                        })}
                    </div>
                        
                </div>

                <div className="price">
                    <p className="ptitle">Price Trend</p>
                    <img src={Chart} alt="price chart" />
                </div>
                
                <div className="buy-deals">
                    <div className="tttop">
                        <p className="titleb">5,978 Properties for sale in Lagos</p>
                        <p className="parab">See all projects<i className="fas fa-arrow-right"></i></p>
                    </div>
                   

                    <div className="flexy">
                        {dataxx.map(({img, name, location, price}, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div style={{backgroundImage: `url(${img})`}} className="i-top"></div>
                                    {/* <div className="i-banner">Featured Project</div> */}
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
                <div className="buy-deals">
                <div className="tttop">
                        <p className="titleb">5,978 Properties for rent in Lagos</p>
                        <p className="parab">See all projects<i className="fas fa-arrow-right"></i></p>
                    </div>

                    <div className="flexy">
                        {dataxx.map(({img, name, location, price}, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div style={{backgroundImage: `url(${img})`}} className="i-top"></div>
                                    {/* <div className="i-banner">Featured Project</div> */}
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

                <div className="rate-rev">
                    <div className="lgtop">
                        <p className="lgtitle">Lagos Review and Ratings</p>
                        <p className="parab">Write a review<i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="rate-rank">
                        <div className="rating">
                            <div className="rtop">4.7 <img src={Stars} alt="stars" /></div>
                            <p className="val">36 reviews</p>
                        </div>
                        <div className="rank">
                            <p className="rrtop">Rank 46</p>
                            <p className="rrbtm">out of 1981 Localities</p>
                        </div>
                    </div>
                    
                    <div className="review">
                            {dataxxx.map(({title, icon, rating}, index) => {
                                return (
                                    <div className="part" key={index}>
                                        <img src={icon} alt="icon" />
                                        <div className="rtxts">
                                            <p className="rtop">{title}</p>
                                            <p className="rbtm">{rating} of 5</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                    <div className="keys">
                        <div className="kleft">
                            <span>Quite Enviroment</span>
                            <span>Nice Food</span>
                            <span>Electricity</span>
                        </div>
                        <div className="kright">
                            <span>Noise</span>
                            <span>Bad Roads</span>
                            <span>Cultist Fights</span>
                        </div>
                    </div>

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

                    <button>Review your locality<i className="fas fa-arrow-right"></i></button>

                
                </div>

                <div className="builders">
                    <div className="lgtop">
                        <p className="lgtitle">Top builders in Lagos</p>
                        <p className="parab">See more builders<i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="content">
                        {dataxxxx.map(({dealer, units}, index) => {
                            return (
                                <div className="unit" key={index}>
                                    <div className="img"></div>
                                    <div className="txtx">
                                        <p className="dealer">{dealer}</p>
                                    <p className="units">{units} Total Properties</p>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="builders">
                    <div className="lgtop">
                        <p className="lgtitle">Top Agents in Lagos</p>
                        <p className="parab">See more agents<i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="content">
                        {dataxxxx.map(({dealer, units}, index) => {
                            return (
                                <div className="unit" key={index}>
                                    <div className="img"></div>
                                    <div className="txtx">
                                        <p className="dealer">{dealer}</p>
                                    <p className="units">{units} Total Properties</p>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="disclaimer">
                    <p className="dtop">Disclaimer</p>
                    <p className="dpara">The material and information contained herein is for general informational purposes only, and does not constitute any form of verbal or non-verbal endorsement/warranty/representation/offer from landlordcare</p>
                    <p className="more">Read more</p>
                </div>

            </div>

        </div>
    )
}

export default SearchPage;