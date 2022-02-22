import './exploreL.scss';
import Imgx1 from '../../../assets/home-assets/Rectangle109.png';
import Imgx2 from '../../../assets/home-assets/Rectangle110.png';
import Imgx3 from '../../../assets/home-assets/Rectangle111.png';
import Imgx4 from '../../../assets/home-assets/Rectangle112.png';
import Img1 from '../../../assets/home-assets/Rectangle105.png';
import Img2 from '../../../assets/home-assets/Rectangle106.png';
import Img3 from '../../../assets/home-assets/Rectangle107.png';
import Img4 from '../../../assets/home-assets/Rectangle108.png';
import BudgetCalc from '../../../components/budgetCalc/budgetCalc';



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
        state: "Abuja",
        number: "100,000+",
        image: Imgx3,
        color: "#576984"
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

const ExploreL = () => {
    return (
        <div className="exploreL">
                    <div className="txt">
                        <p className="top"><span>Explore</span> Real Estate in Popular Cities</p>
                    </div>
                    <br />
            {/* <div className="main-div">
                <div className="txt-btn">
                    <div className="txt">
                        <p className="top"><span>Explore</span> Real Estate in Popular Cities</p>
                        <p className="bottom">Explore from Apartments, land, builder floors, villas and more</p>
                    </div> */}
                    {/* <button>Explore Renting <i className="fas fa-arrow-right"></i></button> */}
                {/* </div>
            </div> */}
            <div className="flexbox">
                {/* <div className="overlay-div"> */}
                    <div className="flex-conty">
                        {data.map(({state, number, image, color}, index) => {
                            return (
                                <div className="cont" key={index}>
                                    <div className="topc" style={{backgroundImage: `url(${image})`}}></div>
                                    <div style={{backgroundColor: color}} className="btmcxx">
                                        <p className="tt">{state}</p>
                                        <p className="b">{number} Properties</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                    
                </div>
            {/* </div> */}

            
            </div>
           
        </div>
    )
}

export default ExploreL;