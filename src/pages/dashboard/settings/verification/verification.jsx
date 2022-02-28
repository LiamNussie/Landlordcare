import './verification.scss';
import Img from "./img.svg";
import Upload from './upload.svg';
import Upfill from './upfill.svg';

const Verification = () => {
    return (
        <div className="verification">
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
          Verification
        </p>
        <h2>Personal Verification</h2>

        <form>
          {/* <div className="input">
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
          </div> */}
          <div className="input">
            <label>Email Verification</label>
            <br />
            <input placeholder="Johndoe@gmail.com" type="email" />
            <i className="fas fa-check cicon"></i>
            {/* <p className="info">
              Visit verification page to edit your email address
            </p> */}
          </div>
          <div className="input">
            <label>Mobile Number Verification</label>
           <div className="top">
               
               <select>
                   <option>Nigeria (+234)</option>
               </select>
               <input type="tel" />
           </div>
           <div className="topx">
               <p className="otp">OTP</p>
               <input type="tel" />
               <button>Confirm</button>
           </div>
           <p className="txtinfo">Insert OTP sent to your Mobile Number</p>
          </div>
          <div className="input">
              <label>BVN Verification</label>
              <input placeholder='Input your Bank Verification Number to verify your identity' type="tel" minLength={10} maxLength={10} />
            {/* <ul>
                <li id={pType.includes("commercial") ? "contained" : null} onClick={() => handleArray("commercial")}>Commercial</li>
                <li id={pType.includes("residential") ? "contained" : null} onClick={() => handleArray("residential")}>Residential</li>
            </ul> */}
          </div><br />
          <h2>Business Verification</h2><br /><br />
          <div className="input">
            <label>Business Name</label>
            <br />
            <input type="text" placeholder='Input your Business Name' />
            {/* <div className="newinp">
                <input type="checkbox" />
                <span>I dont have my business registered yet. Please help</span>
            </div> */}
          </div>
          <div className="input">
            <label>Business Type</label>
            <br />
            <select className='lsel'>
                <option>Select Business Type</option>
            </select>
          </div>
          <div className="input">
            <label>CAC Reg. Number</label>
            <br />
            <input placeholder="Confirm your business name from the CAC directory" type="text" />
            <i className="fas fa-times ticon"></i>
          </div>
          <div className="input">
            <label>TIN Number</label>
            <br />
            <input placeholder="Confirm youur business name from the TIN directory" type="text" />
            <i className="fas fa-times ticon"></i>
          </div>
          <div className="input">
            <label>TIN Documentation</label>
            <p className="ins">Please share youur CAC registration forms. These are the forms you filled when registering your business</p>
            <br />
            <div className="piclist">
                <div className="pic" style={{backgroundImage: `url(${Upfill})`}}>
                    <div className="filler">
                        <img src={Upload} alt="upload_icon" />
                        <p className="utxt">Upload Document</p>
                    </div>
                    <input type="file" />
                </div>
                <div className="pic">
                    <div className="filler">
                        <img src={Upload} alt="upload_icon" />
                        <p className="utxt">Upload Document</p>
                    </div>
                    <input type="file" />
                </div>
                <div className="pic">
                    <div className="filler">
                        <img src={Upload} alt="upload_icon" />
                        <p className="utxt">Upload Document</p>
                    </div>
                    <input type="file" />
                </div>
                <div className="pic">
                    <div className="filler">
                        <img src={Upload} alt="upload_icon" />
                        <p className="utxt">Upload Document</p>
                    </div>
                    <input type="file" />
                </div>
            </div>
          </div>
          
          {/* <div className="input">
            <label>Phone Number</label>
            <br />
            <input value="+234 81 22724082" className="perm" type="text" />
            <i className="fas fa-ban"></i>
            <p className="info">
              Visit verification page to edit your phone number
            </p>
          </div> */}
          {/* <div className="input">
            <label>States in Operation</label>
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
          </div> */}
          <div className="inputx">
              <input type="checkbox" />
              <p>This information is used for personal verification only and is kept private and confidential by LandlordCare</p>
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
    )
}

export default Verification;