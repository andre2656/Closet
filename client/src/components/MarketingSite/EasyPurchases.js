import React from 'react';
import './EasyPurchases.css';


const EasyPurchases = () => {
    let content = { marginTop: "120px" }
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-2" />
                <img className="col-md-4" id="shop-image" src="images/shop.png" alt= 'shop' />
                <div className="col-md-4" id="shop-text" style={content}>
                    <h2>Make Easy Purchases</h2>
                    <p>See something you love? Be able to identify items from a photo and make purchases with the click of a button!</p>
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    )
}

export default EasyPurchases;
