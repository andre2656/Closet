import React, { Component } from "react";
import './UploadIdeas.css';
import Recognition from './StyleRecognition/StyleRecognition'

class UploadIdeas extends Component {
    state = {
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_07-14-17-1067_760x.jpg?v=1500487929',
        img: '',
        getImage: null
    };

    imageChanged = (event) => {
        this.setState({ img: event.target.value })
        console.log(this.state.image)
    }
    buttonClicked = () => {
        this.setState({ image: this.state.img});
        this.setState({img: ''})
        

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
                        <div className= 'row' style={{justifyContent: "center"}}>
                            <input id='imageUrl' style={{ marginRight: "5px" }} type="text" onChange= {this.imageChanged} value= {this.state.img} /> <button onClick={this.buttonClicked} type='submit' className="btn btn-dark btn-file">Upload Image URL</button>
                        </div>
                       
                    </div>
                </div >

                <div>
                    <div>
                        <h1>Outfit Details</h1>
                    </div>
                    <div className="card" id='uploadCard' >
                        <div className="card-header">See Results Based on Your Photo Upload</div>
                        <div className="card-body" id="outfitResults" style={{ height: "400px", overflow: "scroll" }}>
                            <Recognition
                            img={this.state.image}
                            />
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}


export default UploadIdeas;