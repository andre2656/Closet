import React from "react";
import './UploadIdeas.css';


const UploadIdeas = () => {
    let display = { display: "none" };
        return (
            <div>
                <div>
                    <h1>Upload Your Outfit</h1>
                </div>
                <div className="card" id='uploadCard' >
                    <div className="card-header">Upload Your Outfit</div>
                    <div className="card-body">
                        <label className="btn btn-dark btn-file"> Upload <input type="file" style={display} />
                        </label>
                    </div>
                </div >
            </div >
        );
    }


export default UploadIdeas;