import { useState } from "react";
import "./reviewModal.scss";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import axios from "axios";
import baseUrl from "../../config";
import states from "../../utils/states";

const config = {
    headers: {
       "Authorization": `Bearer ${localStorage.LLC_TOKEN}`
       }
 }

const ReviewModal = ({setShowReviewModal}) => {

    const [userType, setUserType] = useState("fresident");

    
    
    const [star1, setStar1] = useState("");
    const [star2, setStar2] = useState("");
    const [star3, setStar3] = useState("");
    const [star4, setStar4] = useState("");
    const [reviewTags, setReviewTags] = useState([]);
    const [dislikeTags, setDislikeTags] = useState([]);
    const [state, setState] = useState("");
    const [lcda, setLcda] = useState("");
    const [street, setStreet] = useState("");
    const [reviewTxt, setReviewTxt] = useState("");
    const [dislikeTxt, setDislikeTxt] = useState("");
    const [loading, setLoading] = useState(false);

    const currentUser = useSelector(({userData}) => userData.currentUser)
    console.log(currentUser)
    const {_id} = currentUser.data

    const handleReviews = (tag) => {
        let newArray = [...reviewTags, tag];
        if (reviewTags.includes(tag)) {
        newArray = newArray.filter((d) => d !== tag);
        }
        setReviewTags(newArray);
    }

    const handleDislikes = (tag) => {
        let newArray = [...reviewTags, tag];
        if (reviewTags.includes(tag)) {
        newArray = newArray.filter((d) => d !== tag);
        }
        setDislikeTags(newArray);
    }

    const datax = {
        "user": _id,
        "state": state,
        "lcda": lcda,
        "street": street,
        "reviewer": userType,
        "rating.commute": star1,
        "rating.lifestyle": star2,
        "rating.security": star3,
        "rating.environment": star4,
        "review": reviewTxt,
        "review_tags": reviewTags,
        "dislike_reason": dislikeTxt,
        "dislike_reason_tags": dislikeTags
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        try {
            const res = await axios.post(`${baseUrl}/locations`, datax, config)
            console.log(res)
            setLoading(false)
            toast.success(res?.data?.message)
        } catch(err) {
            console.log(err?.response?.data?.message)
            toast.error(err?.response?.data?.message)
            setLoading(false)
        }
    }

    return (
        <div className="review-modal">
            <div className="wrapper">
                <div className="modal">
                    <div className="top">
                        <p className="mtitle">Write your review</p>
                        <svg onClick={() => setShowReviewModal(false)} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12639 0.361832C1.51691 -0.0286919 2.15008 -0.0286919 2.5406 0.361832L9.50016 7.32139L16.4597 0.361832C16.8502 -0.0286919 17.4834 -0.0286919 17.8739 0.361832C18.2645 0.752357 18.2645 1.38552 17.8739 1.77605L10.9144 8.73561L17.8739 15.6952C18.2645 16.0857 18.2645 16.7189 17.8739 17.1094C17.4834 17.4999 16.8502 17.4999 16.4597 17.1094L9.50016 10.1498L2.5406 17.1094C2.15008 17.4999 1.51691 17.4999 1.12639 17.1094C0.735865 16.7189 0.735865 16.0857 1.12639 15.6952L8.08595 8.73561L1.12639 1.77605C0.735865 1.38552 0.735865 0.752357 1.12639 0.361832Z" fill="#24292E"/>
                        </svg>
                    </div>
                    <div className="bottom">
                        <form onSubmit={handleSubmit}>
                            <div className="scroll">
                                <div className="input">
                                    <label>STATE</label>
                                    <select onChange={e => setState(e.target.value)}>
                                        <option selected disabled>Select State</option>
                                        {states.map((i, index) => {
                                            return (
                                                <option value={i}>{i}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="input">
                                    <label>LOCAL GOVERNMENT</label>
                                    <select onChange={e => setLcda(e.target.value)}>
                                        <option selected disabled>Select LGA</option>
                                        <option value="ifako-ijaiye">Ifako-Ijaiye</option>
                                        <option value="ijaiye">Ijaiye</option>
                                        <option value="somolu">Somolu</option>
                                        <option value="yaba">Yaba</option>
                                    </select>
                                </div>
                                <div className="input">
                                    <label>STREET</label>
                                    <select onChange={e => setStreet(e.target.value)}>
                                        <option selected disabled>Select Street</option>
                                        <option value="oredola">Oredola</option>
                                        <option value="akintunde">Akintunde</option>
                                        <option value="Ebun">Ebun</option>
                                        <option value="corey">Corey</option>
                                    </select>
                                </div>
                                <div className="input">
                                    <label>YOU ARE BEST DESCRIBED AS ?</label>
                                    <div className="bubbles">
                                        <p onClick={() => setUserType("landlord")} id={userType === "landlord" ? "selected" : null} className="bub">Landlord/Developer</p>
                                        <p onClick={() => setUserType("tenant")} id={userType === "tenant" ? "selected" : null} className="bub">Tenant</p>
                                        <p onClick={() => setUserType("agent")} id={userType === "agent" ? "selected" : null} className="bub">Estate Agent</p>
                                        <p onClick={() => setUserType("fresident")} id={userType === "fresident" ? "selected" : null} className="bub">Former resident</p>
                                    </div>
                                </div>
                                <div className="rating">
                                    <p className="rating-title">Your ratings on</p>
                                    <div className="input">
                                        <p className="label">Connectivity and Commute</p>
                                        <p className="para">Availability of public or private conveyance</p>
                                        <div className="flexs">
                                            <ReactStars
                                                count={5}
                                                onChange={e => setStar1(e)}
                                                size={34}
                                                // isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#F36B09"
                                                classNames="stars"
                                            />
                                            {star1 === 1 && <p className="lab">TERRIBLE</p>}
                                            {star1 === 2 && <p className="lab">POOR</p>}
                                            {star1 === 3 && <p className="lab">FAIR</p>}
                                            {star1 === 4 && <p className="lab">GOOD</p>}
                                            {star1 === 5 && <p className="lab">SATISFIED</p>}
                                        </div>
                                        
                                    </div>
                                    <div className="input">
                                        <p className="label">Lifestyle & facilities</p>
                                        <p className="para">How is the quality of life and necessary services</p>
                                        <div className="flexs">
                                            <ReactStars
                                                count={5}
                                                onChange={e => setStar2(e)}
                                                size={34}
                                                // isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#F36B09"
                                                classNames="stars"
                                            />
                                            {star2 === 1 && <p className="lab">TERRIBLE</p>}
                                            {star2 === 2 && <p className="lab">POOR</p>}
                                            {star2 === 3 && <p className="lab">FAIR</p>}
                                            {star2 === 4 && <p className="lab">GOOD</p>}
                                            {star2 === 5 && <p className="lab">SATISFIED</p>}
                                        </div>
                                    </div>
                                    <div className="input">
                                        <p className="label">Safety & Security</p>
                                        <p className="para">Do you feel safe at all times in this locality?</p>
                                        <div className="flexs">
                                            <ReactStars
                                                count={5}
                                                onChange={e => setStar3(e)}
                                                size={34}
                                                // isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#F36B09"
                                                classNames="stars"
                                            />
                                            {star3 === 1 && <p className="lab">TERRIBLE</p>}
                                            {star3 === 2 && <p className="lab">POOR</p>}
                                            {star3 === 3 && <p className="lab">FAIR</p>}
                                            {star3 === 4 && <p className="lab">GOOD</p>}
                                            {star3 === 5 && <p className="lab">SATISFIED</p>}
                                        </div>
                                    </div>
                                    <div className="input">
                                        <p className="label">Environment</p>
                                        <p className="para">How calm, hygiene & soothing are the surroundings?</p>
                                        <div className="flexs">
                                            <ReactStars
                                                count={5}
                                                onChange={e => setStar4(e)}
                                                size={34}
                                                // isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#F36B09"
                                                classNames="stars"
                                            />
                                            {star4 === 1 && <p className="lab">TERRIBLE</p>}
                                            {star4 === 2 && <p className="lab">POOR</p>}
                                            {star4 === 3 && <p className="lab">FAIR</p>}
                                            {star4 === 4 && <p className="lab">GOOD</p>}
                                            {star4 === 5 && <p className="lab">SATISFIED</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="review">
                                    <p className="review-title">Your reviews</p>
                                    <p className="rev2">What do you like about this locality?</p>
                                    <div className="input">
                                        <textarea value={reviewTxt} onChange={e => setReviewTxt(e.target.value)} name="" id="" cols="30" rows="7" placeholder="Type something"></textarea><br /><br />
                                        <p className="info">Select Positive Tags</p>
                                        <div className="bubbles">
                                            <p onClick={() => handleReviews("Safe at Night")} id={reviewTags.includes("Safe at Night") ? "selected" : null} className="bub">Safe at Night</p>
                                            <p onClick={() => handleReviews("Well Lit Streets")} id={reviewTags.includes("Well Lit Streets") ? "selected" : null} className="bub">Well Lit Streets</p>
                                            <p onClick={() => handleReviews("Clean & Hygienic")} id={reviewTags.includes("Clean & Hygienic") ? "selected" : null} className="bub">Clean & Hygienic</p>
                                            <p onClick={() => handleReviews("Hospitals are nearby")} id={reviewTags.includes("Hospitals are nearby") ? "selected" : null} className="bub">Hospitals are nearby</p>
                                        </div>
                                        <br />
                                    </div>
                                    <p className="rev2">What do you dislike about this locality?</p>
                                    <div className="input">
                                        <textarea value={dislikeTxt} onChange={e => setDislikeTxt(e.target.value)} name="" id="" cols="30" rows="7" placeholder="Type something"></textarea><br /><br />
                                        <p className="info">Select Negative Tags</p>
                                        <div className="bubbles">
                                            <p onClick={() => handleDislikes("Deserted at Night")} id={dislikeTags.includes("Deserted at Night") ? "selected" : null} className="bub">Deserted at Night</p>
                                            <p onClick={() => handleDislikes("High Pollution")} id={dislikeTags.includes("High Pollution") ? "selected" : null} className="bub">High Pollution</p>
                                            <p onClick={() => handleDislikes("Unhygienic")} id={dislikeTags.includes("Unhygienic") ? "selected" : null} className="bub">Unhygienic</p>
                                            <p onClick={() => handleDislikes("No School Nearby")} id={dislikeTags.includes("No School Nearby") ? "selected" : null} className="bub">No School Nearby</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit">{loading ? "Sending..." : "Send Review"}</button>
                        </form>
                    <div className="right">
                        <p className="tit">Tips to writing a good review</p>

                        <div className="opt">
                            <p className="sn">1</p>
                            <p className="para">Write the review only if you have lived or currently staying in the same society/ locality for some time.</p>
                        </div>
                        <div className="opt">
                            <p className="sn">2</p>
                            <p className="para">A review must be a minimum of 100 characters including positive & negative comment.</p>
                        </div>
                        <div className="opt">
                            <p className="sn">3</p>
                            <p className="para">The reviews should not include prohibited & restricted content as per our <span>community guidelines</span> and must be in line with the our <span>terms and conditions.</span></p>
                        </div>

                        <p className="info">This information is used for personal verification only and is kept private and confidential by LandlordCare</p>
                    </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}

export default ReviewModal;