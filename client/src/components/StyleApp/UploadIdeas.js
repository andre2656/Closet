import React, { Component } from "react";
import './UploadIdeas.css';
import Recognition from './StyleRecognition/StyleRecognition'

class UploadIdeas extends Component {
    state = {
        image: 'https://cdn.shopify.com/s/files/1/0033/7939/6672/products/product_906861_royal-blue-jacquar_1_400x.jpg?v=1554340311'
    };

    imageChanged = (event) => {
        this.setState({ image: event.target.value })
        console.log(this.state.image)
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Upload Your Outfit</h1>
                </div>
                <div className="card" id='uploadCard' >
                    <div className="card-header">Upload an Outfit to Find Where to Buy It</div>
                    <div className="card-body">
                       {/* <div className= 'row'> */}
                        <label className="btn btn-dark btn-file"> Upload <input type="file" style={{ display: "none" }} />
                            </label>
                       {/* </div> */}
                        <div className= 'row'>
                            <input type="text" onChange={this.imageChanged} /> <button type='submit' className="btn btn-dark btn-file">Upload Link</button>
                        </div>
                       
                    </div>
                </div >

                <div>
                    <div>
                        <h1>Outfit Details</h1>
                    </div>
                    <div className="card" id='uploadCard' >
                        <div className="card-header">See Results Based on Your Photo Upload</div>
                        <div className="card-body" id="outfitResults" style={{ height: "400px" }}>
                            <Recognition
                            img= {this.state.image}
                            />
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}


export default UploadIdeas;