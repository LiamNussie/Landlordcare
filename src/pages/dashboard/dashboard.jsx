import { useState } from 'react';
import Analytics from './analytics/analytics';
import './dashboard.scss';
import Home from './home/home';
import MyProperties from './myProperties/myProperties';
import Pricing from './pricing/pricing';
import Responses from './responses/responses';
import Settings from './settings/settings';
import Shortlists from './shortlists/shortlists';
import Tips from './tips/tips';

const Dashboard = () => {
    const [page, setPage] = useState("settings");
    return (
        <div className="dashboard">
            <p className="title">Hey <span>John</span>, Welcome to your dashboard <span className='badge'><i className='fas fa-star'></i>Premium</span></p>

            <ul className="dash_nav">
                <li onClick={() => setPage("dashboard")} className={page === "dashboard" ? "active" : null}>Dashboard</li>
                <li onClick={() => setPage("properties")} className={page === "properties" ? "active" : null}>My Properties</li>
                <li onClick={() => setPage("responses")} className={page === "responses" ? "active" : null}>Responses<span>0</span></li>
                <li onClick={() => setPage("pricing")} className={page === "pricing" ? "active" : null}>Pricing</li>
                <li onClick={() => setPage("shortlists")} className={page === "shortlists" ? "active" : null}>My Shortlists</li>
                <li onClick={() => setPage("tips")} className={page === "tips" ? "active" : null}>Tips</li>
                <li onClick={() => setPage("analytics")} className={page === "analytics" ? "active" : null}>Analytics</li>
                <li onClick={() => setPage("settings")} className={page === "settings" ? "active" : null}>Settings</li>
            </ul>

            {page === "dashboard" && <Home />}
            {page === "properties" && <MyProperties />} 
            {page === "responses" && <Responses />} 
            {page === "pricing" && <Pricing />}
            {page === "shortlists" && <Shortlists />}
            {page === "tips" && <Tips />}
            {page === "analytics" && <Analytics />}
            {page === "settings" && <Settings />}
        </div>
    )
}

export default Dashboard;