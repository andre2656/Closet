import React from "react";

const PopularPins = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img  id="pins-image" src="images/popular-pins.jpg" alt= 'Popular Pins' />
                </div>
                <div className="col-md-5" style={{ marginTop: "70px" }}>
                    <h2>See Popular Pins</h2>
                    <p>Your settings will generate Pinterest pins that match your style vision and showcase people who look like you.</p>
                </div>
                <div className="col-md-1"/>
            </div>
        </div >
    )
}

export default PopularPins;
