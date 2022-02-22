import './shortlists.scss';
import Img from '../../../assets/projimg.svg';
import Img2 from '../../../assets/projimg2.svg';
import Img3 from '../../../assets/projimg3.svg';

const projectsData = [
    {
        name: "Akowonjo Golden Estate",
        location: "Lagos",
        owner: "Landlord Care Properties",
        img: Img,
        isReady: true,
        isVerified: true,
        description: "Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in",
        images: [],
        inProjects: [
            {
                bedrooms: "1",
                size: "375 - 400",
                price: 400000,
                dealerPhone: "070962554267"
            },
            {
                bedrooms: "2",
                size: "575 - 600",
                price: 900000,
                dealerPhone: "070962554267"
            },
            {
                bedrooms: "3",
                size: "775 - 1100",
                price: 1300000,
                dealerPhone: "070962554267"
            }
        ]
    },
    {
        name: "Akowonjo Golden Estate",
        location: "Lagos",
        owner: "Landlord Care Properties",
        img: Img2,
        isReady: false,
        isVerified: true,
        description: "Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in",
        images: [],
        inProjects: [
            {
                bedrooms: "1",
                size: "375 - 400",
                price: 400000,
                dealerPhone: "070962554267"
            },
            {
                bedrooms: "2",
                size: "575 - 600",
                price: 900000,
                dealerPhone: "070962554267"
            },
            {
                bedrooms: "3",
                size: "775 - 1100",
                price: 1300000,
                dealerPhone: "070962554267"
            }
        ]
    },
    {
        name: "Akowonjo Golden Estate",
        location: "Lagos",
        owner: "Landlord Care Properties",
        img: Img3,
        isReady: false,
        isVerified: false,
        description: "Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in",
        images: [],
        inProjects: [
            {
                bedrooms: "1",
                size: "375 - 400",
                price: 400000,
                dealerPhone: "070962554267"
            },
            {
                bedrooms: "2",
                size: "575 - 600",
                price: 900000,
                dealerPhone: "070962554267"
            },
            {
                bedrooms: "3",
                size: "775 - 1100",
                price: 1300000,
                dealerPhone: "070962554267"
            }
        ]
    }
]

const projectsData2 = [
    {
        name: "3 Bedroom Fully Detached House",
        location: "Lagos",
        owner: "Landlord Care Properties",
        img: Img,
        isReady: true,
        isVerified: true,
        description: "Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in",
        images: [],
        inProjects: [
            {
                bedrooms: "3",
                toilets: "4",
                bathrooms: "3",
                dealerPhone: "070962554267"
            }
        ]
    },
    {
        name: "4 Bedroom Fully Detached House",
        location: "Lagos",
        owner: "Landlord Care Properties",
        img: Img2,
        isReady: false,
        isVerified: true,
        description: "Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in",
        images: [],
        inProjects: [
            {
                bedrooms: "4",
                toilets: "5",
                bathrooms: "4",
                dealerPhone: "070962554267"
            }
        ]
    },
    {
        name: "5 Bedroom Fully Detached House",
        location: "Lagos",
        owner: "Landlord Care Properties",
        img: Img3,
        isReady: false,
        isVerified: false,
        description: "Ikoyi Fairview Apartments in Lagos is an upscale, palpably classy apartment complex located at 89, Lafiaji Way, Dolphin Estate a quiet residential estate in Ikoyi. Every expat knows that Ikoyi is the most secure neighborhood in",
        images: [],
        inProjects: [
            {
                bedrooms: "5",
                toilets: "6",
                bathrooms: "5",
                dealerPhone: "070962554267"
            }
        ]
    }
]

const Shortlists = () => {
    return (
        <div className="shortlists">
            {projectsData.slice(0,1).map(({name, location, owner, isReady, isVerified, description, img, images, inProjects}, index) => {
                return (
                    <div className="proj" key={index}>
                        <div className="left">
                            <img src={img} alt="proj_img" />
                        </div>
                        <div className="right">
                            <div className="top">
                                <div className="ltop">
                                    <p className="name">{name}</p>
                                    <p className="location">In <span>{location}</span></p>
                                    <p className="owner">By <span>{owner}</span></p>
                                </div>
                                <p className="rtop">₦ 400,000 - ₦ 1,500,000</p>
                            </div>
                            <div className="banner">
                                {isReady ? <p><i className="fas fa-check"></i>Ready to move</p> : <p><i className="fas fa-times"></i>Not ready to move</p>}
                                {isVerified ? <p><i className="fas fa-check"></i>Verified</p> : <p><i className="fas fa-times"></i>Not verified</p>}
                            </div>
                            <p className="desc">{description} Lagos.</p>

                            <div className="inprojects">
                                {inProjects.map(({bedrooms, size, price, dealerPhone}, index) => {
                                    return (
                                        <div className="row" key={index}>
                                            <p className="beds">{bedrooms} Bed Apartment</p>
                                            <p className="size">{size} sqft</p>
                                            <p className="price">₦ {price.toLocaleString()} - ₦ 1,500,000</p>
                                            <button>Contact Dealer</button>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="more">See more <i className="fas fa-angle-down"></i></p>
                        </div>
                        
                    </div>
                )
            })}

<div className="property">
            {projectsData2.slice(0,2).map(({name, location, owner, isReady, isVerified, description, img, images, inProjects}, index) => {
                return (
                    <div className="prop" key={index}>
                        <div className="left">
                            <img src={img} alt="proj_img" />
                        </div>
                        <div className="right">
                            <div className="top">
                                <div className="ltop">
                                    <p className="name">{name}</p>
                                    <p className="location">In <span>{location}</span></p>
                                    <p className="owner">By <span>{owner}</span></p>
                                </div>
                                <p className="rtop">₦ 400,000 - ₦ 1,500,000</p>
                            </div>
                            <div className="banner">
                                {isReady ? <p><i className="fas fa-check"></i>Ready to move</p> : <p><i className="fas fa-times"></i>Not ready to move</p>}
                                {isVerified ? <p><i className="fas fa-check"></i>Verified</p> : <p><i className="fas fa-times"></i>Not verified</p>}
                            </div>
                            <p className="desc">{description} Lagos.</p>

                            <div className="inprojects">
                                {inProjects.map(({bedrooms, toilets, bathrooms, dealerPhone}, index) => {
                                    return (
                                        <div className="row" key={index}>
                                            <p className="beds">{bedrooms} Bedrooms</p>
                                            <p className="size">{toilets} Toilets</p>
                                            <p className="price">{bathrooms} Bathrooms</p>
                                            <button>Contact Dealer</button>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* <p className="more">See more <i className="fas fa-angle-down"></i></p> */}
                        </div>
                        
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Shortlists;