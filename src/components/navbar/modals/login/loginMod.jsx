import './loginMod.scss';

const LoginMod = () => {

    const logout = async () => {
        await localStorage.removeItem("LLC_TOKEN")
        window.location.reload()
    }

    return (
        <div className="login-mod">
            <div className="wrapper">
                <div className="modal">
                    <ul className="top-links">
                        <li className='lis lab x'>My Activity</li>
                        <li className='lis'>Contacted Properties</li>
                        <li className='lis'>Viewed Properties</li>
                        <li className='lis'>Shortlisted Properties</li>
                        <li className='lab lis'>Searches</li>
                    </ul>
                    <ul className="mid-links">
                        <li className='lis'>Recommendation</li>
                        <li className='lis'>My Profile</li>
                    </ul>
                    <div className="btn">
                         <button onClick={logout}>Sign Out</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default LoginMod;