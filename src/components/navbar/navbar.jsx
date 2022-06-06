import React from 'react';
import './navbar.scss';
import Logo from '../../assets/home-assets/logo.svg';
import Logo2 from '../../assets/home-assets/logowhite.svg';
import LoginModal from '../loginModal/loginModal';
import SignupModal from '../signupModal/signupModal';
import Pp from '../../assets/home-assets/userimg.png';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import LoginMod from './modals/login/loginMod';
import ResourceMod from './modals/resources/resourceMod';
import PropMod from './modals/prop/propMod';
import SellMod from './modals/sell/sellMod';
import RentMod from './modals/rent/rentMod';
import BuyMod from './modals/buy/buyMod';

const Navbar = () => {

    const currentUser = useSelector(({userData}) => userData.currentUser)
    console.log(currentUser)
    // const {firstname, image} = currentUser?.data;

    const [showLogin, setShowLogin] = useState(false);
    const [showLogMod, setShowLogMod] = useState(false);
    const [showResMod, setShowResMod] = useState(false);
    const [showPropMod, setShowPropMod] = useState(false);
    const [showSellMod, setShowSellMod] = useState(false);
    const [showRentMod, setShowRentMod] = useState(false);
    const [showBuyMod, setShowBuyMod] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const history = useHistory();

    const handleModals = () => {
        if(!currentUser) {
            setShowSignup(true)
        } else {
            history.push("/create-listing-flat")
        }
    }

    return (
        <div className={currentUser ? "navbar auth-nav" : "navbar"}>
            <div className="left">
                {currentUser ? <img src={Logo2} alt="llc logo" className="logo" /> : <img src={Logo} alt="llc logo" className="logo" />}
                <div className="txts">
                    <p className="top-txt">LANDLORD CARE</p>
                    <p className="bottom-txt">Nigeria's No1 Property Portal</p>
                </div>
            </div>
            {currentUser ? 
            <div className="search">
                <select name="">
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                    <option value="lease">Lease</option>
                </select>
                <input type="text" placeholder='City, neighbouhood or address' />
                <i className="fas fa-search"></i>
            </div>
            :
            <div className="middle">
                <ul className="mid-links">
                    <li onClick={() => setShowBuyMod(prev => !prev)}>Buy<i className="fas fa-angle-down"></i></li>
                    <li onClick={() => setShowRentMod(prev => !prev)}>Rent<i className="fas fa-angle-down"></i></li>
                    <li onClick={() => setShowSellMod(prev => !prev)}>Sell<i className="fas fa-angle-down"></i></li>
                    <li onClick={() => setShowPropMod(prev => !prev)}>Property Services<i className="fas fa-angle-down"></i></li>
                    <li onClick={() => setShowResMod(prev => !prev)}>Resources<i className="fas fa-angle-down"></i></li>
                    {showBuyMod && <BuyMod />}
                    {showRentMod && <RentMod />}
                    {showSellMod && <SellMod />}
                    {showPropMod && <PropMod />}
                    {showResMod && <ResourceMod />}
                </ul>
            </div>}
            <div className="right">
                <ul>
                    {currentUser ? <>
                    <div style={{backgroundImage: `url(${currentUser?.data?.image})`}} className='pp'></div><i onClick={() => currentUser ? setShowLogMod(prev => !prev) : setShowLogin(true)} className="fas fa-angle-down"></i>
                    </> 
                    : 
                    <li onClick={() => currentUser ? setShowLogMod(prev => !prev) : setShowLogin(true)}>Login<i className="fas fa-angle-down"></i></li>
                    }
                    <li className='diff' onClick={handleModals}>Post Property<span>Free</span></li>
                    {showLogMod && <LoginMod setShowLogMod={setShowLogMod} />}
                </ul>
            </div>

            {showLogin && <LoginModal setShowLogin={setShowLogin} />}
            {showSignup && <SignupModal setShowSignup={setShowSignup} />}
            
        </div>
    )
}

export default Navbar;
