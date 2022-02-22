import './footer.scss';
import Tw from '../../assets/home-assets/twitter.svg';
import Play from '../../assets/home-assets/play.svg';
import Fb from '../../assets/home-assets/facebook.svg';
import Ln from '../../assets/home-assets/linked.svg';
import Ig from '../../assets/home-assets/instagram.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="left">
                    <p className="ftitle">About Landlord Care</p>
                    <p className="fpara">Launched in 2020, Landlord care is Nigeria’s No.1 online Property marketplace to buy, sell, and rent residential and commercial properties. Adjudged as the most preferred real estate portal in Nigeria by various independent surveys.</p>
                    <div className="icons">
                        <img src={Tw} alt="social icon" />
                        <img src={Play} alt="social icon" />
                        <img src={Fb} alt="social icon" />
                        <img src={Ln} alt="social icon" />
                        <img src={Ig} alt="social icon" />
                    </div>
                </div>
                <div className="right">
                    <p className="frtitle">Properties in Nigeria</p>
                    <ul className="states">
                        <li>Property in Lagos</li>
                        <li>Property in Abuja</li>
                        <li>Property in Port-Harcourt</li>
                        <li>Property in Calabar</li>
                        <li>Property in Ogun</li>
                        <li>Property in Katsina</li>
                    </ul>
                    <p className="frtitle">Properties in Nigeria</p>
                    <ul className="states">
                        <li>Property in Lagos</li>
                        <li>Property in Abuja</li>
                        <li>Property in Port-Harcourt</li>
                        <li>Property in Calabar</li>
                        <li>Property in Ogun</li>
                        <li>Property in Katsina</li>
                    </ul>
                </div>
            </div>

            <ul className="middle">
                <li>Sitemap</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Testimonials</li>
                <li>Feedback</li>
                <li>Help Center</li>
                <li>Sales Enquiry</li>
                <li>Buy Our Services</li>
            </ul>

            <div className="bottom">
                <p className="disclaimer"><span>Disclaimer: </span>Landlord Care Property and Homes Limited is only acting as an intermediary, providing its platform to advertise Seller's properties to Customers/Buyers/Users who visit its Website. It is not and cannot be a party to, privy to, or control any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by Read more</p>
            </div>
            <div className="end">
                <p className="rights">All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2022 Landlord Care Property and Homes Limited</p>
            </div>
        </div>
    )
}

export default Footer;