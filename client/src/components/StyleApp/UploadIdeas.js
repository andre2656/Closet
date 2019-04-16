import React, { Component } from "react";
import './UploadIdeas.css';

class UploadIdeas extends Component {
    state = {
        image: false
    };
    render() {
        return (
            <div>
                <div>
                    <h1>Upload Your Outfit</h1>
                </div>
                <div className="card" id='uploadCard' >
                    <div className="card-header">Upload an Outfit to Find Where to Buy It</div>
                    <div className="card-body">
                        <label className="btn btn-dark btn-file"> Upload <input type="file" style={{display: "none"}} />
                        </label>
                    </div>
                </div >

                <div>
                    <div>
                        <h1>Outfit Details</h1>
                    </div>
                    <div className="card" id='uploadCard' >
                        <div className="card-header">See Results Based on Your Photo Upload</div>
                        <div className="card-body" id="outfitResults" style={{ height: "400px" }}>
                            {/* Clothing Result Inserts Here */}
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}


export default UploadIdeas;