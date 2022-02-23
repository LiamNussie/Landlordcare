import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Switch, Route} from 'react-router-dom';
import HomeLanding from './pages/home-landing/homeLanding';
import {useState} from 'react';
import SearchPage from './pages/searchPage/searchPage';
import Footer from './components/footer/footer';
import LoggedHome from './pages/loggedHome/loggedHome';
import Projprop from './pages/projprop/projprop';
import PropertyPage from './pages/propertyPage/propertyPage';
import ProjectPage from './pages/projectPage/projectPage';
import ProjectView from './pages/propertyView/propertyView';
import ManagerProfile from './pages/managerProfile/managerProfile';
import Dashboard from './pages/dashboard/dashboard';
import PersonalInfo from './pages/dashboard/settings/personalInfo/personalInfo';
import Land from './pages/land';

function App() {
  const [auth, setAuth] = useState(true)
  return (
    <div className="App">
      <Navbar auth={auth} />
      <Switch>
        <Route exact path="/" component={HomeLanding} />
        <Route exact path="/home" component={LoggedHome} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/projects-properties" component={Projprop} />
        <Route exact path="/property" component={PropertyPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/project-property-view" component={ProjectView} />
        <Route exact path="/manager-profile" component={ManagerProfile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/account" component={Land} />
        {/* <Route exact path="/das/personal-information" component={PersonalInfo} />
        <Route exact path="/account/personal-information" component={PersonalInfo} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
