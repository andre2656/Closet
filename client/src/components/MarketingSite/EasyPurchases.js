import React from 'react';
import './EasyPurchases.css';


const EasyPurchases = () => {
    let content = { marginTop: "120px" }
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <img className="col-md-5" id="shop-image" src="images/shop.png" alt= 'shop' />
                <div className="col-md-5" id="shop-text" style={content}>
                    <h2>Make Easy Purchases</h2>
                    <p>See a look you need to have? Be able to identify items from a photo and make purchases with the click of a button!</p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default EasyPurchases;
