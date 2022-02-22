import './propertyView.scss';
import Property from '../../assets/propview1.svg';
import Iccon from '../../assets/iccon.svg';
import Locationn from '../../assets/locationn.svg';
import Yelhouse from '../../assets/yelhouse.svg';
import Map from './map.svg';
import Stars from './stars.svg';
import Check from '../../assets/checkicon.png';
import Chart from '../../assets/chart.png';
import Img1 from '../../assets/home-assets/Rectangle628.png';
import Img2 from '../../assets/home-assets/Rectangle629.png';
import Img3 from '../../assets/home-assets/Rectangle630.png';
import Img4 from '../../assets/home-assets/Rectangle631.png';
import Img1x from '../../assets/project1.png';
import Img2x from '../../assets/project2.png';
import Img3x from '../../assets/project3.png';
import Imga from '../../assets/power.png';
import Imgb from '../../assets/security.png';
import Imgc from '../../assets/connect.png';
import Footer from '../../components/footer/footer';
import { useState } from 'react';

const data = ["Club House","Club House","Club House","Club House","Club House","Club House","Club House","Club House","Club House","Club House","Club House","Club House"]
const datac = [
    {
        label: "Status",
        val: "Ready to move"
    },
    {
        label: "Built Date",
        val: "Jan 27 2019"
    },
    {
        label: "Total Units",
        val: "32"
    },
    {
        label: "Total Floors",
        val: "2"
    },
    {
        label: "Project Type ",
        val: "Ready to move"
    },
    {
        label: "Property Type",
        val: "Ready to move"
    },
    {
        label: "Project Area",
        val: "1024ft"
    },
    {
        label: "Occupant Certificate",
        val: "Yes"
    },
    {
        label: "Commencement Certificate",
        val: "Yes"
    },
    {
        label: "Postal Code",
        val: "110005"
    }
]
const datacc = [
    {
        label: "Sitting Room{s}",
        val: "1"
    },
    {
        label: "Toilet{s}",
        val: "1"
    },
    {
        label: "Bedroom(s)",
        val: "1"
    },
    {
        label: "Total Floors",
        val: "5"
    },
    {
        label: "Funishing",
        val: "Ready to move"
    },
    {
        label: "Water Availability",
        val: "24 Hours"
    },
    {
        label: "Balcony",
        val: "1"
    },
    {
        label: "Carpet Area",
        val: "1050ft"
    },
    {
        label: "Type of Ownership",
        val: "Freehold"
    },
    {
        label: "Floor",
        val: "2 of 3 Floors"
    },
    {
        label: "Deal Type",
        val: "Sale"
    },
    {
        label: "Furnished",
        val: "Semi-furnished"
    }
]
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
const dataxxy = [
    {
        img: Img1x,
        name: "Studio Apartment",
        location: "Ifako, Gbagada. Lagos",
        price: "257,199"
    },
    {
        img: Img2x,
        name: "One Bedroom Apartment",
        location: "Ifako, Gbagada. Lagos",
        price: "4,000,000"
    },
    {
        img: Img3x,
        name: "Two Bedroom Apartment",
        location: "Ifako, Gbagada. Lagos",
        price: "8,000,000"
    },
    {
        img: Img1x,
        name: "Three Bedroom Apartment",
        location: "Ifako, Gbagada. Lagos",
        price: "10,000,000"
    },
    {
        img: Img1,
        name: "Four Bedroom Apartment",
        location: "Ifako, Gbagada. Lagos",
        price: "14,000,000"
    },
    {
        img: Img2,
        name: "Five Bedroom Apartment",
        location: "Ifako, Gbagada. Lagos",
        price: "20,000,000"
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

const ProjectView = () => {
    const [filter, setFilter] = useState();
    return (
        <div className="property-view">
            <div className="pic-map">
                <div style={{backgroundImage: `url(${Property})`}} className="picx">
                    <div className="banner">
                        <div className="midtxt">
                            <p className="price">₦600,000</p>
                            <div className="deck">
                                <p className="type">Studio Apartment</p>
                                <p className="from">From<span>Akowonjo Golden Estate</span></p>
                            </div>
                        </div>
                        <button>Contact builder now<i className="fas fa-arrow-right"></i></button>
                    </div>
                    {/* <p className="ltop">LAGOS</p>
                    <p className="lbtm">The center of Excellence</p> */}
                </div>
                <div style={{backgroundImage: `url(${Map})`}} className="map"></div>
            </div>
            {/* <ul className="opt-banner">
                <li>Overview</li>
                <li>Amenities</li>
                <li>Location Advantage</li>
                <li>About Project</li>
                <li>Ratings and Reviews</li>
                <li>Price Trend</li>
                <li>Project Details</li>
                <li>About Builder</li>
                
            </ul> */}
            <div className="down-content">
                {/* <div className="overview">
                    <p className="name">Akowonjo Golden Estate</p>
                    <p className="codel"><img src={Iccon} alt="" /> Landlord Care<div className="rtop"><i className='fas fa-star'></i>4.7(65)</div></p>
                    <p className="codex"><img src={Locationn} alt="" /> Olodi Apapa, Lagos</p>
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
                </div> */}

                {/* <div className="pricont">
                    <div className="leftxt">
                        <p className="top">₦600,000 - ₦2,957,199</p>
                        <p className="bottom">Per Month</p>
                    </div>
                    <button>Contact Dealer</button>
                </div> */}


                {/* <div className="buy-deals">
                    <p className="ptitle">Properties in Akowonjo golden estate </p>
                <div className="tttop">
                        <ul className="list">
                            <li onClick={() => setFilter("buy")} className={filter === "buy" ? "active" : null}>Buy</li>
                            <li onClick={() => setFilter("rent")} className={filter === "rent" ? "active" : null}>Rent</li>
                        </ul>
                        <p className="parab">View all properties for sale<i className="fas fa-arrow-right"></i></p>
                    </div>

                    <div className="flexy">
                        {dataxxy.map(({img, name, location, price}, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div style={{backgroundImage: `url(${img})`}} className="i-top"></div>
                                    <div className="i-bannerx"><span>Posted on Dec 20th 2021</span><span>5 Photos</span></div>
                                    <div className="i-bottomx">
                                        <p className="namex">{name}</p>
                                        <p className="location"><i className="fas fa-map-marker-alt"></i> {location}</p>
                                        <p className="type">Flats, Villa & Penthouse</p>
                                        <p className="price">₦{price}</p>
                                        <button>Contact Builder</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> */}

                <div className="localityx">
                   
                    {/* <p className="title">Amenities at akowonjo golden estate</p>
                    



                    <div className="locs">
                        {data.map((i, index) => {
                            return (
                                <div className="lboxp" key={index}>
                                    <img src={Yelhouse} alt="imnh" />
                                    <p className="ltitle">{i}</p>
                                </div>
                            )
                        })}
                        <button>Contact Builder<i className='fas fa-arrow-right'></i></button>
                    </div>
                    <br />
                    <br />
                    <br /> */}
                    <p className="title">About this apartment</p>
                    <p className="para">Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in ..</p>
                    <p className="more">See More.</p>

                    <div className="locsc">
                        {datacc.map(({label, val}, index) => {
                            return (
                                <div className="lboxp" key={index}>
                                    <p className="label">{label}</p>
                                    <p className="ltitle">{val}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* <p className="titles">About the apartment</p>

                    <div className="locsc">
                        {datacc.map(({label, val}, index) => {
                            return (
                                <div className="lboxp" key={index}>
                                    <p className="label">{label}</p>
                                    <p className="ltitle">{val}</p>
                                </div>
                            )
                        })}
                    </div> */}
                </div>

               

                {/* <div className="advantage">
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
                        
                </div> */}

                {/* <div className="price">
                    <p className="ptitle">Price Trend</p>
                    <img src={Chart} alt="price chart" />
                </div> */}

                {/* <div className="other-info">
                    <p className="ptitle">Other Information About akowonjo golden estate</p>
                    <div className="info">
                        Flooring in Master Bedroom, Marble/Vitrified laminated Wooden Mooring in other moms <br />
                        Wall: Acrylic emulsion paint <br />
                        Ceiling: Oil bound distemper <br />
                        Woodwork: Wall-in Closet in Master Bedroom <br />
                        POP: Cornice & moulding in all rooms <br />
                        Kitchen <br />
                        Walls: Ceramic tiles upto 2 ft. above counter and Oil bound distemper in the balance area <br />
                        Floor: Combination of one or more of Vitrified Tiles/Ceramic Tiles/ Marble / Stone <br />
                        Counter: Marble/Granite Fittings/fixtures CI) fittings, Sink fan <br />
                        Woodwork: Modular Kitchen cabinet <br />
                        Gas: Gas Bank provision/Piped Gas <br />
                        Water: Hot and Cold water supply <br />
                        Entrance door: Veneered and polished shutter/ Moulded skin door <br />
                        Windows: Powder Coated/Aluminium glazing/ UPVC Windows <br />
                        Modular switches & Copper wiring, 24 hours power backup, Cable TV & Internet through Broadband" <br />
                        Security System <br />
                        Access control & CCTV for basement and Entrance lobby at Ground floor Video phone & Intercom for each apartment

                    </div>
                </div>
                <br />
                <br /> */}
                {/* <div className="rate-rev">
                    <div className="lgtop">
                        <p className="lgtitle">Akowonjo golden estate Neighbourhood <br /> Review and Ratings</p>
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

                
                </div> */}

                {/* <div className='builder'>
                    <div className="lgtop">
                        <p className="lgtitle">About Builder</p>
                        <p className="parab">Contact Builder<i className="fas fa-arrow-right"></i></p>
                    </div>
                    <div className="rate-rank">
                        <div className="name-logo">
                            <img src={Iccon} alt="logo_img" />
                            <p className="txt">LandLord Care Properties and home Limited</p>
                        </div>
                        <div className="rating">
                            <div className="rtop">4.7 <img src={Stars} alt="stars" /></div>
                            <p className="val">36 reviews</p>
                        </div>
                        <div className="rank">
                            <p className="rrtop">Rank 46</p>
                            <p className="rrbtm">out of 1981 Localities</p>
                        </div>
                    </div>
                </div> */}
                
                
                <div className="buy-deals">
                    <div className="tttop">
                        <p className="titleb">Other Properties from the Project</p>
                        <p className="parab">See all properties<i className="fas fa-arrow-right"></i></p>
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
                        <p className="titleb">Other Projects in the Area</p>
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

                

                {/* <div className="builders">
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
                </div> */}
                
                {/* <div className="builders">
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
                </div> */}


                <div className="disclaimer">
                    <p className="dtop">Disclaimer</p>
                    <p className="dpara">The material and information contained herein is for general informational purposes only, and does not constitute any form of verbal or non-verbal endorsement/warranty/representation/offer from landlordcare</p>
                    <p className="more">Read more</p>
                </div>

            </div>

        </div>
    )
}

export default ProjectView;