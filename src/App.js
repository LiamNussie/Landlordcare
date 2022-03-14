import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Switch, Route} from 'react-router-dom';
import HomeLanding from './pages/home-landing/homeLanding';
import {useState, useEffect} from 'react';
import SearchPage from './pages/searchPage/searchPage';
import Footer from './components/footer/footer';
import LoggedHome from './pages/loggedHome/loggedHome';
import Projprop from './pages/projprop/projprop';
import 'react-toastify/dist/ReactToastify.css';
import PropertyPage from './pages/propertyPage/propertyPage';
import ProjectPage from './pages/projectPage/projectPage';
import ProjectView from './pages/propertyView/propertyView';
import ManagerProfile from './pages/managerProfile/managerProfile';
import Dashboard from './pages/dashboard/dashboard';
import "react-toggle/style.css" 
import PersonalInfo from './pages/dashboard/settings/personalInfo/personalInfo';
import Land from './pages/land';
import FlatListing from './pages/dashboard/flatListing/flatListing';
import store from './redux/store';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { loaduser } from './redux/actions/auth';
import ProtectedRoute from './routing/protectedRoute/protectedRoute';
import AppLoader from './components/appLoader/appLoader';
import { ToastContainer } from 'react-toastify';

const state = store.getState();


// const authData = state.userData;
// const currentUser = state.userData
// console.log(authData, currentUser);
const authToken = localStorage.LLC_TOKEN

function App() {
  const [auth, setAuth] = useState(true);

  const currentUser = useSelector(({userData}) => userData.currentUser)
  console.log(currentUser)


  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //  load user if user is logged in
    if(authToken){
      dispatch(loaduser(history))
    } 
    return ()=> null;
  }, [])

  if(!currentUser && localStorage.LLC_TOKEN) {
    return <AppLoader />
  }

  return (
    <div className="App">
      <ToastContainer position='top-center' style={{zIndex: "1000000000"}} />
      <Navbar auth={auth} />
      <Switch>
        <Route exact path="/" component={HomeLanding} />
        <ProtectedRoute exact path="/home" component={LoggedHome} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/projects-properties" component={Projprop} />
        <Route exact path="/property" component={PropertyPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/project-property-view" component={ProjectView} />
        <Route exact path="/manager-profile" component={ManagerProfile} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route exact path="/account" component={Land} />
        <ProtectedRoute exact path="/create-listing-flat" component={FlatListing} />
        {/* <Route exact path="/das/personal-information" component={PersonalInfo} />
        <Route exact path="/account/personal-information" component={PersonalInfo} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
