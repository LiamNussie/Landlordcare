import "./propertyDeets.scss";
import Img from "./img.svg";

const PropertyDeets = () => {
  return (
    <div className="property-deets">
      <div className="lcont">
        <h2>Property Detail</h2>

        <form>
          <div className="input togs">
              <label>For</label>
              <ul>
                  <li>Sale</li>
                  <li>Rent</li>
              </ul>
          </div>
          <div className="input">
            <label>Legal First Name</label>
            <br />
            <select>
                <option value="flat">Flat/Apartment</option>
                <option value="residential">Residential House</option>
                <option value="villa">Villa</option>
            </select>
          </div>
          <h2>Property Location</h2><br />
          <div className="input">
            <label>Name of Project</label>
            <br />
            <input type="text" placeholder="Insert Project Name" />
          </div>
          <div className="input">
            <label>State</label>
            <br />
            <select>
                <option disabled>Select State</option>
            </select>
          </div>
          <div className="input">
          <div className="top">
              <div className="sm-input">
                <label className="tt">Local Government</label>
                <br />
                <select>
                  <option selected disabled>Select Local Govt.</option>
                </select>
              </div>
              <div className="sm-input">
                <label className="tt">Street</label>
                <br />
                <select>
                  <option selected disabled>Select Street</option>
                </select>
              </div>
            </div>
          </div>
          <div className="input">
            <label>Address</label>
            <br />
            <input type="text" placeholder="Enter House No/Flat No" />
          </div>
          <div className="inputx">
                <input type="checkbox" />
                <p>Dont’t display the address</p>
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

export default PropertyDeets;
