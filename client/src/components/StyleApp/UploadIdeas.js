import React, { Component } from "react";
import './UploadIdeas.css';
// import Recognition from './StyleRecognition/StyleRecognition';
import validator from 'validator';
import { Modal } from 'react-bootstrap';
import $ from 'jquery'
import './StyleRecognition/StyleRecognition.css'
class UploadIdeas extends Component {
    state = {
        image: 'https://www.davidjones.com/images/assetimages/blog/Happening/Denim-street-style-trend-hero.jpg',
        img: '',
        getImage: null
    };
    componentDidMount = () => {
        this.getImages(this.state.image)
    }
    imageChanged = (event) => {
        this.setState({ img: event.target.value })
        console.log(this.state.image)
    }
    buttonClicked = () => {
        if (this.isFormValid()) {
            this.setState({
                image: this.state.img,
                img: ''
            },
            () => {
                this.getImages(this.state.image)
            }
            )
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





    getImages = (url) => {
        $(() => {
            var params = {
                "image": url,
                // "gender": "Female",
                "limit": "5",
            };
            $.ajax({
                url: "https://api.mirrorthatlook.com/v2/mirrorthatlook?" + $.param(params),
                beforeSend: function (xhrObj) {
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", '');
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", 'ee49e91b55354cd2a1f10f49bc6e1d3b');
                },
                type: "GET",
                data: "{body}",
            })
                .done((data) => {
                    this.setState({ data: data },
                        () => {
                            console.log(this.state.data)
                            this.pasteResults(this.state.data)
                        })
                })
                .fail(function () {
                    console.log("error");
                });
        });
    }
    pasteResults = (data) => {
        $('#pictures').empty()
        $('#pictures').attr('val', 'filled')
        if (data.result !== undefined) {
            for (let t = 0; t < data.result.length; t++) {
                for (let i = 0; i < data.result[t].products.length; i++) {
                    let div = $('<div>');
                    let img = $('<img>');
                    let brandName = $('<p>');
                    let directUrl = $('<a>');
                    brandName.append(data.result[t].products[i].retailer.name);
                    directUrl.attr('href', data.result[t].products[i].direct_url);
                    directUrl.append(brandName)
                    img.attr('src', data.result[t].products[i].image);
                    directUrl.addClass('directUrl')
                    img.addClass('retunedImages');
                    div.append(directUrl);
                    div.append(img);
                    div.addClass('divStyles');
                    div.addClass('col-md-4')
                    $('#pictures').append(div);
                }
            }
        }
        else {
            console.log('no data')
        }
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
                            <div id='pictures' className='col-md-12' val='empty'></div>
                            {/* <Recognition
                                img={this.state.image}
                            /> */}
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