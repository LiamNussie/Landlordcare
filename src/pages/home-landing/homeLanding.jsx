import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Highlights from '../highlights/highlights';
import Buysec from './buy-sec/buysec';
import Explore from './explore/explore';
import Hero from './hero/hero';
import './homeLanding.scss';
import Rentsec from './rent-sec/rentsec';
import Testimonies from './testimonies/testimonies';
import TopDealers from './topDealers/topDealers';

const HomeLanding = () => {
    return (
        <div className="home-landing">
            <Hero />
            <Buysec />
            <Highlights />
            <Rentsec />
            <Explore />
            <TopDealers />
            <Testimonies />
        </div>
    )
}

export default HomeLanding;