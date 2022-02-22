import './myProperties.scss';
import X from "../../../assets/x.png";
import Check from "../../../assets/check.png";
import View from '../../../assets/listing.svg';
import Share from '../../../assets/share.svg';
import Trash from '../../../assets/trash.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const data = [
    {
        id: "58883587",
        isActive: true,
        img: View,
        isApproved: false,
        name: "Akowonjo Golden Estate",
        address: "1 ifatelufdo Street, Sawnill, ifako, Kosofe .Lagos",
        type: "sale",
        status: "rejected",
        dueDate: "May 8, 2022",
        visibility: 18,
        bShots: 3
    },
    {
        id: "58883580",
        isActive: false,
        img: View,
        isApproved: true,
        name: "Akowonjo Golden Estate",
        address: "1 ifatelufdo Street, Sawnill, ifako, Kosofe .Lagos",
        type: "sale",
        status: "approved",
        dueDate: "May 8, 2022",
        visibility: 64,
        bShots: 0
    }
]

const MyProperties = () => {
    return (
        <div className="my-props">
            {data.map(({id, isActive, img, isApproved, bShots, visibility, name, address, type, status, dueDate}) => {
                return (
                    <div className="listing-prop" key={id}>
                        <div className="left">
                            <div id='banner' className={status === "rejected" ? "rejected" : "approved"}>{status === "rejected" ? <p><img src={X} alt="x" />Uh-oh! Your property has not been approved Try Again</p> : <p><img src={Check} alt="check" />Your property is approved and Active</p>}</div>
                            <div className="listx">
                                <div className="leftx">
                                    <div className="img" style={{backgroundImage: `url(${img})`}}></div>
                                    <div className="check">
                                        <input defaultChecked={isActive} name='activate' type="checkbox" />
                                        <label htmlFor="activate">{isActive ? "Activated" : "Activate"}</label>
                                    </div>
                                </div>
                                <div className="rightx">
                                    <p className="name">{name}</p>
                                    <div className="id-date"><p className="id">Property ID: {id}</p><p className='date'>List valid till: {dueDate}</p></div>
                                    <div className="more">
                                        <div className="opt">
                                            <label>Address:</label>
                                            <p className="val ad">{address}</p>
                                        </div>
                                        <div className="opt">
                                            <label>Looking to:</label>
                                            <p className="val">{type}</p>
                                        </div>
                                        <div className="opt">
                                            <label>Status</label>
                                            <p className="val" id={status === "rejected" ? "reject" : "active"}>{status}</p>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <div className="acleft">
                                            <button className='edit'>Edit <i className="fas fa-arrow-right"></i></button>
                                            <button className='preview'><i className="fas fa-eye"></i>Preview Listing</button>
                                        </div>
                                        <div className="acright">
                                            <div className="img1"><img src={Share} alt="ixcon" /></div>
                                            <div className="img2"><img src={Trash} alt="ixcon" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptatum. Earum amet maxime, aut impedit, atque rem esse facere tenetur eligendi vitae ex praesentium ullam magni quos culpa excepturi sint neque recusandae, quia labore voluptate! Reiciendis architecto atque voluptatibus facere exercitationem dolorem ipsa, enim libero voluptatum a accusamus, eius aliquid veritatis? Aperiam dolore aspernatur laborum, omnis, magni ea, repellat cupiditate iste quia cum molestiae. Repellendus perferendis reprehenderit ea at eos ducimus commodi laudantium, officiis iure fugit quis eum tempora repudiandae sed voluptas quos, tempore maxime veritatis placeat. Incidunt error soluta voluptatum cupiditate id totam corrupti iure similique, vitae consectetur blanditiis?</h3> */}
                        </div>
                        <div className="right">
                            <div className='pbar' style={{ width: 80, height: 80 }}>
                                <CircularProgressbar styles={buildStyles({pathColor: visibility < 30 ? "#E53535" : "#03A66D", textColor: visibility < 30 ? "#E53535" : "#03A66D"})} strokeWidth={6} value={visibility} text={`${visibility}%`} />
                            </div>

                            <div className="texts">
                                <p className="head">This Property is Only Visible to <strong style={{color: visibility < 30 ? "#E53535" : "#03A66D"}}>{visibility}%</strong> <strong>Buyers</strong></p>
                                <p className="head2">Increase your visibility with our {visibility < 30 ? <span style={{color: "#03A66D"}}>Starter Pack</span> : <span style={{color: "#004FC4"}}>Premium Pack</span>} Pack</p>
                                <ul className="feats">
                                    <li>Property Visibility to <strong>64% of buyers</strong></li>
                                    <li>Higher Position in<strong>Search for 14Days</strong></li>
                                    <li>Professional Photoshoot of Property</li>
                                    <li>Verified tag on Property</li>
                                    <li>Property Promotion through <strong>{visibility < 30 ? "100" : "500"} Emails</strong></li>
                                    <li>Mobile number of all responses</li>
                                </ul>
                                <button>Boost This Listing</button>
                                <p className="boost" style={{color: bShots < 1 ? "#E53535" : "#03A66D"}}>You have {bShots} booster shots of starter Packs</p>
                            </div>
                            
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default MyProperties;