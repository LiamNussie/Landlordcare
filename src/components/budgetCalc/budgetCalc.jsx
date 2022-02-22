import './budgetCalc.scss';
import CC from '../../assets/home-assets/creditcard.png';
import CC2 from '../../assets/wallet3.svg';
import Calculator from './calculator/calculator';

const budget = "₦100,000"

const BudgetCalc = ({text,text2, auth}) => {
    return (
        <div className="budget-calc">
            <div className="txt-btn">
                    <div className="txt">
                        <img src={auth ? CC2 : CC} alt="credit_card_logo" />
                        <div className="leftxt">
                            <p className="top">{auth ? "Your current budget" : "Check available homes for rent based on your budget"}</p>
                            {/* <p className="bottom">{auth && budget ? budget > 0 ? budget : "No Budget set yet" : "Dont worry we,ve got just the right fit for you"}</p> */}
                            {!auth ? 
                            <p className='bottom'>Dont worry we,ve got just the right fit for you</p>
                            :
                            <p className={auth ? "bottom val" : "bottom"}>{budget.length ? budget : "No Budget set yet"}</p>
                            }
                        </div>
                    </div>
                    <button>{text2} <i className="fas fa-arrow-right"></i></button>
            </div>
            {/* <Calculator /> */}
        </div>
    )
}

export default BudgetCalc;