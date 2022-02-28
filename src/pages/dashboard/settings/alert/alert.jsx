import "./alert.scss";
import Toggle from "react-toggle";
import Img from './shield.svg';

const data = [
    {
        tText: "Property Update",
        bText: "Update on your properties listed on this platform",
        status: false
    },
    {
        tText: "Latest Property News  Update",
        bText: "Update on new properties within your vicinity",
        status: true
    },
    {
        tText: "Company Update",
        bText: "Update on landlord care services",
        status: true
    },
    {
        tText: "Locality Update",
        bText: "Update on new properties in your locality",
        status: true
    }
]

const Alert = () => {
  return (
    <div className="alert">
      <div className="lcont">
        <p className="dir">
          Account
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.527287 14.6963C0.82018 14.9892 1.29505 14.9892 1.58795 14.6963L7.83795 8.44635C8.13084 8.15345 8.13084 7.67858 7.83795 7.38569L1.58795 1.13569C1.29505 0.842793 0.82018 0.842793 0.527287 1.13569C0.234394 1.42858 0.234394 1.90345 0.527287 2.19635L6.24696 7.91602L0.527287 13.6357C0.234394 13.9286 0.234394 14.4035 0.527287 14.6963Z"
              fill="#24292E"
            />
          </svg>
          Login & Security
        </p>
        <h2>Alerts & Notification</h2>

        <div className="toggles">
            {data.map(({tText, bText, status}, index) => {
                return (
                    <div className="toggle" key={index}> 
                       <div className="lef">
                            <p className="tt">{tText}</p>
                            <div className="tmp">
                                <Toggle defaultChecked={status} /><p className="span">{status ? "On" : "Off"}</p>
                            </div>
                       </div>
                       <div className="rig">
                            <p className="bt">{bText}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
      <div className="rcont">
      <div className="box">
          <img src={Img} alt="icon" />
          <div className="txt">
            <p className="top">Keeping Your Account Safe</p>
            <p className="para">We're continuously looking for new ways to improve our platform’s safety. That's why we examine each account to ensure that it's as secure as possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
