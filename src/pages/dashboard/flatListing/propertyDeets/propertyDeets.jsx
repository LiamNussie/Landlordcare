import "./propertyDeets.scss";
import Img from "./img.svg";

const PropertyDeets = () => {

  const data = {
    "userId": "61e99600ce072307c45aabd9",
    "property_details.property_purpose": "sale",
    "property_details.property_type": "appartment",
    "property_location.state": "Lagos",
    "property_location.local_government": "Ojo",
    "property_location.address": "21 Landlorcare, Ojo,Lagos",
    "property_features.bedrooms": 4,
    "property_features.balconies": 2,
    "property_features.floor_number": 5,
    "property_features.total_floors": 10,
    "property_features.furnished_status": "furnished",
    "property_features.bathroom": 4,
    "area": 2100,
    "property_availability.age_of_completion": 2,
    "property_availability.availability_status": "not_available",
    "price.expected_price": 10000000000000000,
    "price.price_per_sqft": 310,
    "photo.exterior_view": [
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/pixels-hi-low-res.jpg"
    ],
    "photo.living_room": [
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/pixels-hi-low-res.jpg"
    ],
    "photo.kitchen": [
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/pixels-hi-low-res.jpg"
    ],
    "photo.bedrooms": [
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/pixels-hi-low-res.jpg"
    ],
    "photo.bathrooms": [
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/pixels-hi-low-res.jpg"
    ],
    "photo.location_map": [
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/what-is-high-res.jpg",
        "https://www.techsmith.com/blog/wp-content/uploads/2016/11/pixels-hi-low-res.jpg"
    ],
    "additional_features.parking": [
        "covered"
    ],
    "additional_features.additional_rooms": [
        "store",
        "other"
    ],
    "additional_features.overlooking": [
        "garden",
        "pool",
        "road"
    ],
    "additional_features.lifts": 2,
    "water": "24hrs available",
    "electricity": "12hrs available",
    "ownership": "freehold",
    "floor_design": "Marble",
    "amenties": [
        "Gym",
        "Airconditoned",
        "hall"
    ],
    "description.property_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "description.landmark_description": "Save and secure,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}



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

            <h2>Property Features</h2><br />

            <div className="input">
              <label>Bedroom</label>
              <div className="bd">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <select className="tiny">
                  <option selected disabled>3+</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">6</option>
                </select>
              </div>
            </div>

            <div className="input">
              <label>Balconies</label>
              <div className="bd">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <select className="tiny">
                  <option selected disabled>3+</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">6</option>
                </select>
              </div>
            </div>

            <div className="input">
              <label>Floor Number</label>
              <div className="bd">
                <span>Lower Basement</span>
                <span>Ground</span>
                <select className="tiny">
                  <option selected disabled>1+</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>

            <div className="input">
              <label>Total Floors</label>
              <div className="bd">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <select className="tiny">
                  <option selected disabled>8+</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
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
