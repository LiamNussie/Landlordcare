import './rentMod.scss';

const RentMod = () => {
    return (
        <div className="rent-mod">
            <div className="wrapper">
                <div className="modal">
                    <ul className="top-links">
                        <li className='lis lab x'>Popular Choices</li>
                        <li className='lis'>Owner Properties</li>
                        <li className='lis'>Verified Properties</li>
                        <li className='lis'>Furnished Homes</li>
                        <li className='lis'>Bachelor Friendly Homes</li>
                        <li className='lis'>Immediately Available</li>
                    </ul>
                    <ul className="mid-links">
                        <li className='lis lab x'>Property Types</li>
                        <li className='lis'>Flats in Lagos</li>
                        <li className='lis'>House/Villa in Lagos</li>
                        <li className='lis'>Plot in Lagos</li>
                        <li className='lis'>Office Spaces in Lagos</li>
                        <li className='lis'>Commercial Shops in Lagos</li>
                    </ul>
                    <ul className="mid-links">
                        <li className='lis lab x'>Explore</li>
                        <li className='lis'>Localities</li>
                        <li className='lis'>Rent Agreements</li>
                        <li className='lis'>Find an Agent</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RentMod;