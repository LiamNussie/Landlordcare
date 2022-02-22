import './hero.scss';
import Img1 from '../../../assets/home-assets/Rectangle12.png';
import Img2 from '../../../assets/home-assets/Rectangle121.png';
import Img3 from '../../../assets/home-assets/Rectangle122.png';

const data = [
    {
        title: "Buy a house",
        img: Img1
    },
    {
        title: "Sell your property",
        img: Img2
    },
    {
        title: "Rent a house",
        img: Img3
    },
    {
        title: "Get a lease deal",
        img: Img1
    },
    {
        title: "Short-let",
        img: Img2
    },
    {
        title: "Consultancy",
        img: Img3
    }
]

const Hero = () => {
  return <div className='hero'>
      <div className="top">
          <p className="bld"><span>John,</span>Welcome Back To The Best <br /> Choice Property Portal</p>
      </div>
      
      <div className="ex-sec">
          <p className="top-title">Explore Real Estate Options In Your Area</p>
        <div className="explore-opts">
            {data.map(({title, img}, index) => {
                return (
                    <div className='opt-box' key={index}>
                        <div style={{backgroundImage: `url(${img})`}} className="opt"></div>
                        <p className="label">{title}</p>
                    </div>
                )
            })}
        </div>
      </div>
  </div>;
};

export default Hero;
