import './responses.scss';
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

const Responses = () => {
    return (
        <div className="responses">
            <div className="listing-prop">
                <div className='left'>
                    <p className="head">My Responses</p>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Mobile</td>
                            <td>Email ID</td>
                            <td>Date</td>
                        </tr>
                    </table>
                </div>
                <div className="right">
                    <p className="head">Check Tenant/Buyer Profile</p>
                    <ul>
                        <li>Keep an eye on the market trends</li>
                        <li>Sell your property online</li>
                        <li>Factors that affect property prices</li>
                        <li>Ask an expert to assist you</li>
                        <li>Hire a real estate broker</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Responses;