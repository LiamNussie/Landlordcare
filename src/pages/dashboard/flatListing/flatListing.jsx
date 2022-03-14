import { useState } from 'react';
import './flatListing.scss';
import PropertyDeets from './propertyDeets/propertyDeets';

const FlatListing = () => {
    const [page, setPage] = useState("one");

    return (
        <div className="flat-listing">
            <div className="head">
                <p className="title">Sell or Rent your Property</p>
                <p className="info">We've over 15.000 buyers and tenants for you!</p>

                <div className="steps-nav">
                    <div className="nav" style={{opacity: page === "one" ? "1" : "0.4"}}>
                        <p className="number">1.</p>
                        <div className="txts">
                            <p className="ttxt">Property details</p>
                            <p className="btxt">Give us details about your said property</p>
                        </div>
                    </div>
                    <div className="nav" style={{opacity: page === "two" ? "1" : "0.4"}}>
                        <p className="number">2.</p>
                        <div className="txts">
                            <p className="ttxt">Price Details</p>
                            <p className="btxt">Give a pricing detail on your property</p>
                        </div>
                    </div>
                    <div className="nav" style={{opacity: page === "three" ? "1" : "0.4"}}>
                        <p className="number">3.</p>
                        <div className="txts">
                            <p className="ttxt">Visual details</p>
                            <p className="btxt">Add some visuals to your property</p>
                        </div>
                    </div>
                    <div className="nav" style={{opacity: page === "four" ? "1" : "0.4"}}>
                        <p className="number">4.</p>
                        <div className="txts">
                            <p className="ttxt">Add additional features</p>
                            <p className="btxt">Lets know what else your property has</p>
                        </div>
                    </div>
                </div>
            </div>


            {page === "one" && <PropertyDeets />}

        </div>
    )
}

export default FlatListing;