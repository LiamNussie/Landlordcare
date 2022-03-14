import { useState } from 'react';
import Analytics from './analytics/analytics';
import './dashboard.scss';
import Home from './home/home';
import MyProperties from './myProperties/myProperties';
import Pricing from './pricing/pricing';
import Responses from './responses/responses';
import Settings from './settings/settings';
import Shortlists from './shortlists/shortlists';
import { useSelector } from 'react-redux';
import Tips from './tips/tips';
import { Switch, Route, NavLink } from 'react-router-dom';
import PersonalInfo from './settings/personalInfo/personalInfo';
import BusinessInfo from './settings/businessInfo/businessInfo';

const Dashboard = () => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {firstname} = currentUser?.data;

    const [page, setPage] = useState("settings");
    return (
        <div className="dashboard">
            <p className="title">Hey <span>{firstname}</span>, Welcome to your dashboard <span className='badge'><i className='fas fa-star'></i>Premium</span></p>

            <ul className="dash_nav">
                {/* <NavLink className="li" exact to="/dashboard" activeClassName="active">Dashboard</NavLink>
                <NavLink className="li" exact to="/dashboard/properties" activeClassName="active">My Properties</NavLink>
                <NavLink className="li" exact to="/dashboard/responses" activeClassName="active">Responses<span>0</span></NavLink>
                <NavLink className="li" exact to="/dashboard/pricing" activeClassName="active">Pricing</NavLink>
                <NavLink className="li" exact to="/dashboard/shortlists" activeClassName="active">My Shortlists</NavLink>
                <NavLink className="li" exact to="/dashboard/tips" activeClassName="active">Tips</NavLink>
                <NavLink className="li" exact to="/dashboard/analytics" activeClassName="active">Analytics</NavLink>
                <NavLink className="li" exact to="/dashboard/account" activeClassName="active">Settings</NavLink> */}
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

            <Switch>
                {/* <Route exact path="/personal-information" component={PersonalInfo} />
                <Route exact path="/business-information" component={BusinessInfo} /> */}
                {/* <Route exact path="/dashboard" component={Home} />
                <Route exact path="/dashboard/properties" component={MyProperties} />
                <Route exact path="/dashboard/responses" component={Responses} />
                <Route exact path="/dashboard/pricing" component={Pricing} />
                <Route exact path="/dashboard/shortlists" component={Shortlists} />
                <Route exact path="/dashboard/tips" component={Tips} />
                <Route exact path="/dashboard/analytics" component={Analytics} />
                <Route exact path="/dashboard/account" component={Settings} /> */}
            </Switch>
        </div>
    )
}

export default Dashboard;