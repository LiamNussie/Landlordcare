import "./personalInfo.scss";
import { useState } from "react";
import Img from "./img.svg";

const PersonalInfo = () => {
  const [page, setPage] = useState("settings");

  return (
    <div className="personal">
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
          Personal Information
        </p>
        <h2>Personal Info</h2>

        <form>
          <div className="input">
            <label>Legal First Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="input">
            <label>Legal Last Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="input">
            <label>Gender</label>
            <br />
            <input type="text" />
          </div>
          <div className="input">
            <label>Date of Birth</label>
            <br />
            <input type="date" />
          </div>
          <div className="input">
            <label>Email Address</label>
            <br />
            <input className="perm" value="Johndoe@gmail.com" type="text" />
            <i className="fas fa-ban"></i>
            <p className="info">
              Visit verification page to edit your email address
            </p>
          </div>
          <div className="input">
            <label>Phone Number</label>
            <br />
            <input value="+234 81 22724082" className="perm" type="text" />
            <i className="fas fa-ban"></i>
            <p className="info">
              Visit verification page to edit your phone number
            </p>
          </div>
          <div className="input">
            <label>Address</label>
            <div className="top">
              <div className="sm-input">
                <label>State</label>
                <br />
                <select>
                  <option>Select State</option>
                </select>
              </div>
              <div className="sm-input">
                <label>Local Government</label>
                <br />
                <select>
                  <option>Select Local Govt.</option>
                </select>
              </div>
            </div>
            <div className="top">
              <div className="sm-input">
                <label>Street</label>
                <br />
                <select>
                  <option>Select Street</option>
                </select>
              </div>
              <div className="sm-input">
                <label>House No.</label>
                <br />
                <input type="tel" placeholder="Input House Number" />
              </div>
            </div>
          </div>
          <button>
            Update<i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
      <div className="rcont">
        <div className="box">
          <img src={Img} alt="icon" />
          <div className="txt">
            <p className="top">Keeping Your Account Safe</p>
            <p className="para">
              Where would you like to get text messages? <br /> By checking an
              SMS box, you agree to receive <br /> autodialed promotional texts
              from Landlord Care and <br /> Landlord Care partners at:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
