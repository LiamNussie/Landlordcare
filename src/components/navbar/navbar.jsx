import React from 'react';
import './navbar.scss';
import Logo from '../../assets/home-assets/logo.svg';
import Logo2 from '../../assets/home-assets/logowhite.svg';
import LoginModal from '../loginModal/loginModal';
import SignupModal from '../signupModal/signupModal';
import Pp from '../../assets/home-assets/userimg.png';

const Navbar = ({auth}) => {
    

    return (
        <div className={auth ? "navbar auth-nav" : "navbar"}>
            <div className="left">
                {auth ? <img src={Logo2} alt="llc logo" className="logo" /> : <img src={Logo} alt="llc logo" className="logo" />}
                <div className="txts">
                    <p className="top-txt">LANDLORD CARE</p>
                    <p className="bottom-txt">Nigeria's No1 Property Portal</p>
                </div>
            </div>
            {auth ? 
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
                    <li>Buy<i className="fas fa-angle-down"></i></li>
                    <li>Rent<i className="fas fa-angle-down"></i></li>
                    <li>Sell<i className="fas fa-angle-down"></i></li>
                    <li>Property Services<i className="fas fa-angle-down"></i></li>
                    <li>Resources<i className="fas fa-angle-down"></i></li>
                </ul>
            </div>}
            <div className="right">
                <ul>
                    {auth ? <><div style={{backgroundImage: `url(${Pp})`}} className='pp'></div><i className="fas fa-angle-down"></i></> : <li>Login<i className="fas fa-angle-down"></i></li>}
                    <li className='diff'>Post Property<span>Free</span></li>
                </ul>
            </div>

            {/* <LoginModal /> */}
            {/* <SignupModal /> */}
            
        </div>
    )
}

export default Navbar;
