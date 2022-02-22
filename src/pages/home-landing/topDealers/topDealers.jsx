import './topDealers.scss';
import { useState } from 'react';

const data = [
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    },
    {
        dealer: "LandLord Care Properties",
        units: "3456"
    }
]

const TopDealers = () => {
    const [page, setPage] = useState("lagos");

    return (
        <div className="top-dealers">
            <p className="heading">Top Dealers</p>
            <ul className="nav">
                <li onClick={() => setPage("lagos")} className={page === 'lagos' ? "active" : null}>Lagos</li>
                <li onClick={() => setPage("abuja")} className={page === 'abuja' ? "active" : null}>Abuja</li>
                <li onClick={() => setPage("port")} className={page === 'port' ? "active" : null}>Port-Harcourt</li>
                <li onClick={() => setPage("ogun")} className={page === 'ogun' ? "active" : null}>Ogun</li>
                <li onClick={() => setPage("enugu")} className={page === 'enugu' ? "active" : null}>Enugu</li>
                <li onClick={() => setPage("kano")} className={page === 'kano' ? "active" : null}>Kano</li>
            </ul>
            <div className="content">
                {data.map(({dealer, units}, index) => {
                    return (
                        <div className="unit" key={index}>
                            <div className="img"></div>
                            <div className="txtx">
                                <p className="dealer">{dealer}</p>
                            <p className="units">{units} Total Properties</p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopDealers;