import React from 'react';
import axios from 'axios';
import './EasyPurchases.css';


const EasyPurchases = () => {
    let content = { marginTop: "120px" }
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-2" />
                <img className="col-md-4" id="shop-image" src="images/shop-dresses.png" />
                <div className="col-md-4" id="shop-text" style={content}>
                    <h2>Make Easy Purchases</h2>
                    <p>See something you love? Be able to make a purchase with the click of a button from within our app!</p>
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    )
}

export default EasyPurchases;
