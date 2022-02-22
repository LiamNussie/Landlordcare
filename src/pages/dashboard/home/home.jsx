import './home.scss';
import Stars from '../../dashboard/home/stars.svg';
import Pic from '../../../assets/llc.png';
import icon1 from '../../../assets/d1.svg';
import icon2 from '../../../assets/d2.svg';
import icon3 from '../../../assets/d3.svg';

const data = [
    {
        icon: icon1,
        val: 278,
        label: "Total"
    },
    {
        icon: icon2,
        val: 240,
        label: "Verified"
    },
    {
        icon: icon3,
        val: 87,
        label: "Liked"
    }
]

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <div className="left">
                    <div className="logo-name">
                        <div style={{backgroundImage: `url(${Pic})`}} className="img"></div>
                        <div className="mid-txt">
                            <p className="verified">Verified</p>
                            <p className="name">Landlord Care</p>
                            <p className="view">View all properties<i className="fas fa-arrow-right"></i></p>
                        </div>
                        <div className="rtxt">
                            <p className="rating">4.7<span className='one'>/5</span><span className='two'>(36 reviews)</span></p>
                            <img src={Stars} alt="stars" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    {data.map(({val, icon, label}, index) => {
                        return (
                            <div className="box">
                                <img src={icon} alt="" />
                                <p className="val">{val.toLocaleString()}</p>
                                <p className="label">{label} Properties</p>
                                <p className="view">View all properties<i className='fas fa-arrow-right'></i></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;