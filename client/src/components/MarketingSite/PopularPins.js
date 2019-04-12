import React from "react";

const PopularPins = () => {
    let padding = { paddingBottom: "30px" }
    let content = { marginTop: "70px" }
    return <div className="container">
        <div className="row">
            <div className="col-md-2" />
            <img className="col-md-4" id="pins-image" src="https://farm8.staticflickr.com/7162/6816660823_4c03d9fc89_b.jpg" width={500} height={200} alt= 'Popular Pins' />
            <div className="col-md-4" style={content}>
                <h2>See Popular Pins</h2>
                <p>Your quiz results will generate Pinterest pins that match your style vision.</p>
            </div>
            <div className="col-md-2" style={padding} />
        </div>
    </div >
}

export default PopularPins;
