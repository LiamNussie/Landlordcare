import './sellMod.scss';

const SellMod = () => {
    return (
        <div className="sell-mod">
            <div className="wrapper">
                <div className="modal">
                    <ul className="top-links">
                        <li className='lis lab x'>For Owner</li>
                        <li className='lis'>Post Property<span>FREE</span></li>
                        <li className='lis'>My Dashboard</li>
                    </ul>
                    <ul className="mid-links">
                        <li className='lis lab x'>For Agent and Builder</li>
                        <li className='lis'>AD Packages</li>
                        <li className='lis'>Developer Lounge</li>
                    </ul>
                    <ul className="mid-links">
                        <li className='lis lab x'>Selling Tools</li>
                        <li className='lis'>Property Valuation</li>
                        <li className='lis'>Rent Agreements</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SellMod;