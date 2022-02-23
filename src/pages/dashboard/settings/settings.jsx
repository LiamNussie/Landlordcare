import './settings.scss';
import One from "./pinfo.svg";
import Two from "./binfo.svg";
import Three from "./security.svg";
import Four from "./alert.svg";
import Five from "./biometics.svg";
import {useHistory} from 'react-router-dom';

const data = [
    {
        img: One,
        topText: "Personal Info",
        btmText: "Provide personal details and how we can reach you",
        url: "personal"
    },
    {
        img: Two,
        topText: "Business Info",
        btmText: "Update your business information",
        url: "business"
    },
    {
        img: Three,
        topText: "Login and Security",
        btmText: "Update your password and secure your account",
        url: "security"

    },
    {
        img: Four,
        topText: "Alerts and Notification",
        btmText: "Choose notification preferences and how you want to be contacted",
        url: "alerts"
    },
    {
        img: Five,
        topText: "Account Verification",
        btmText: "Verify your personality and unlock more features",
        url: "biometrics"
    }
]

const Settings = () => {
    const history = useHistory();

    return (
        <div className="settings">
            {data.map(({img, topText, btmText, url}, index) => {
                return (
                    <div onClick={() => history.push("/account", {page: url})} className="box" key={index}>
                        <img src={img} alt="icon" />
                        <div className="txt">
                            <p className="top">{topText}</p>
                            <p className="para">{btmText}</p>
                        </div>
                    </div>
                )
            })}

            
        </div>
    )
}

export default Settings;