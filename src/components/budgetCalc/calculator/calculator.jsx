import './calculator.scss';
import { useState } from 'react';

const Calculator = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <div className="calculator">
            <div className="wrapper">
                <div className="modal">
                    <div className="top">
                        <p className="mtitle">Check for homes within your budget</p>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12639 0.361832C1.51691 -0.0286919 2.15008 -0.0286919 2.5406 0.361832L9.50016 7.32139L16.4597 0.361832C16.8502 -0.0286919 17.4834 -0.0286919 17.8739 0.361832C18.2645 0.752357 18.2645 1.38552 17.8739 1.77605L10.9144 8.73561L17.8739 15.6952C18.2645 16.0857 18.2645 16.7189 17.8739 17.1094C17.4834 17.4999 16.8502 17.4999 16.4597 17.1094L9.50016 10.1498L2.5406 17.1094C2.15008 17.4999 1.51691 17.4999 1.12639 17.1094C0.735865 16.7189 0.735865 16.0857 1.12639 15.6952L8.08595 8.73561L1.12639 1.77605C0.735865 1.38552 0.735865 0.752357 1.12639 0.361832Z" fill="#24292E"/>
                        </svg>
                    </div>
                    <form>
                        <div className="input">
                            <label>EMAIL ADDRESS</label><br />
                            <input type="email" />
                        </div>
                        <div className="input">
                            <label>PASSWORD</label><br />
                            <input type={passwordShown ? "text" : "password"} />
                            {passwordShown ? <i onClick={() => setPasswordShown(false)} className='fas fa-eye-slash'></i> : <i onClick={() => setPasswordShown(true)} className='fas fa-eye'></i>}
                        </div>
                        <div className="bottom">
                            <p className="price">₦ 100,000</p>
                            <button type='submit'>Browse properties on this budget</button>
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    )
}

export default Calculator;