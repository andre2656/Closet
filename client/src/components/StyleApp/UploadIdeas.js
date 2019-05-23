import React, { Component } from "react";
import './UploadIdeas.css';
import Recognition from './StyleRecognition/StyleRecognition';
import validator from 'validator';
import { Modal } from 'react-bootstrap';

class UploadIdeas extends Component {
    state = {
        image: '',
        img: '',
        getImage: null
    };

    imageChanged = (event) => {
        this.setState({ img: event.target.value })
        console.log(this.state.image)
    }
    buttonClicked = () => {
        if (this.isFormValid()) {
            this.setState({
                image: this.state.img,
                img: ''
            })
        } else {
            this.handleShow();
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }


    isFormValid = () => {
        return validator.isURL(this.state.img)
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

                        <div className='row' style={{ justifyContent: "center" }}>
                            <input id='imageUrl' style={{ marginRight: "5px" }} type="text" onChange={this.imageChanged} value={this.state.img} /> 
                            <button onClick={this.buttonClicked} type='submit' className="btn btn-dark btn-file">Upload Image URL</button>

                        </div>

                    </div>
                </div >

                <div>
                    <div>
                        <h1>Staff Picks and Results</h1>
                    </div>
                    <div className="card" id='uploadCard' >
                        <div className="card-header">Upload a Photo Above for Updated Results</div>
                        <div className="card-body" id="outfitResults" style={{ height: "400px", overflow: "scroll"}}>
                            <Recognition
                                img={this.state.image}
                            />
                        </div>
                    </div >
                </div >
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Body>
                            <div>
                                <h5 className='row'>Please provide a valid image URL.</h5>
                            </div>
                        </Modal.Body>
                    </Modal.Header>
                </Modal>
            </div >
        );
    }
}


export default UploadIdeas;