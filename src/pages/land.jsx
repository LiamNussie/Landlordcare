import React from 'react'
import { useState } from 'react';
import Alert from './dashboard/settings/alert/alert';
import BusinessInfo from './dashboard/settings/businessInfo/businessInfo';
import PersonalInfo from './dashboard/settings/personalInfo/personalInfo';
import Security from './dashboard/settings/security/security';
import Verification from './dashboard/settings/verification/verification';
import "./land.scss";

const Land = (props) => {
    const page2X = props.location.state.page;

    const [page, setPage] = useState("settings");
    const [page2, setPage2] = useState(page2X);

    
    console.log(props.location.state.page)

  return (
    <div className="land">
        <p className="title">Hey <span>John</span>, Welcome to your dashboard <span className='badge'><i className='fas fa-star'></i>Premium</span></p>

        <ul className="dash_nav">
            
            <li onClick={() => setPage("properties")} className={page === "properties" ? "active" : null}>My Properties</li>
            <li onClick={() => setPage("responses")} className={page === "responses" ? "active" : null}>Responses<span>0</span></li>
            <li onClick={() => setPage("pricing")} className={page === "pricing" ? "active" : null}>Pricing</li>
            <li onClick={() => setPage("shortlists")} className={page === "shortlists" ? "active" : null}>My Shortlists</li>
            <li onClick={() => setPage("tips")} className={page === "tips" ? "active" : null}>Tips</li>
            <li onClick={() => setPage("analytics")} className={page === "analytics" ? "active" : null}>Analytics</li>
            <li onClick={() => setPage("settings")} className={page === "settings" ? "active" : null}>Settings</li>
        </ul>

        {page2 === "personal" && <PersonalInfo />}
        {page2 === "business" && <BusinessInfo />}
        {page2 === "security" && <Security />}
        {page2 === "alerts" && <Alert />}
        {page2 === "verification" && <Verification />}
    </div>
    
  )
}

export default Land