import './highlights.scss';
import Icon1 from '../../assets/home-assets/Icon1.svg';
import Icon2 from '../../assets/home-assets/Icon2.svg';
import Icon3 from '../../assets/home-assets/Icon3.svg';
import Icon4 from '../../assets/home-assets/Icon4.svg';

const data = [
    {
        img: Icon2,
        text: "Get personalised property recommendations from us",
        actionTxt: "See all"
    },
    {
        img: Icon3,
        text: "Top Handpicked Projects for you",
        actionTxt: "See all"
    },
    {
        img: Icon4,
        text: "Top Exclusive Verified Properties",
        actionTxt: "See all"
    }
]

const Highlights = () => {
    return (
        <div className="highlights">
                    <div className="boxxx">
                        <img src={Icon1} alt="icon" />
                        <p className="text"><span>3K+</span>Properties listed for <br /> you</p>
                        <p className="action">Continue to last search<i className="fas fa-arrow-right"></i></p>
                    </div>
            {data.map(({img, text, actionTxt, diffTxt}, index) => {
                return (
                    <div className="boxxx" key={index}>
                        <img src={img} alt="icon" />
                        <p className="text">{text}</p>
                        <p className="action">{actionTxt}<i className="fas fa-arrow-right"></i></p>
                    </div>
                )
            })}
        </div>
    )
}

export default Highlights;