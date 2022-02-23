import './security.scss';
import Img from './shield.svg';
import Tw from './tw.svg';
import Fb from './fb.svg';
import Ig from './ig.svg';
import Yt from './yt.svg';

const Security = () => {
    return (
        <div className="security">
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
        <h2>Login & Security</h2>

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
          {/* <div className="input">
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
          </div> */}
          <div className="inputt">
            <label>Password</label>
              <div className="sm-inputt">
                <label>Current Password</label>
                <br />
                <input type="tel" />
                <i className="fas fa-eye"></i>
              </div>
              <div className="sm-inputt">
                <label>New Password</label>
                <br />
                <input type="tel" />
                <i className="fas fa-eye"></i>

              </div>
              <div className="sm-inputt">
                <label>Repeat New Password</label>
                <br />
                <input type="tel" />
                <i className="fas fa-eye"></i>
              </div>
          </div>
          <div className="inputt">
            <label>Social Account</label>
              <div className="sm-inputt">
                <label>Twitter</label>
                <br />
                <input type="tel" placeholder='https://twitter.com/home' />
                <img src={Tw} alt="twitter_icon" />
              </div>
              <div className="sm-inputt">
                <label>Facebook</label>
                <br />
                <input type="tel" placeholder='https://facebook.com/' />
                <img src={Fb} alt="facebook_icon" />
              </div>
              <div className="sm-inputt">
                <label>Instagram</label>
                <br />
                <input type="tel" placeholder='https://instagram.com/' />
                <img src={Ig} alt="instagram_icon" />
              </div>
              <div className="sm-inputt">
                <label>Youtube</label>
                <br />
                <input type="tel" placeholder='https://youtube.com/' />
                <img src={Yt} alt="youtube_icon" />
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
            <p className="para">We're continuously looking for new ways to improve our platform’s safety. That's why we examine each account to ensure that it's as secure as possible.</p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Security;