import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class NonLiveChat extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Live Chat</h1>
                </div>
                <div className="card" id='uploadCard' >
                    <div className="card-header">Upgrade to Premium tp Speak with a Stylist</div>
                    <div className="card-body">
                        <Button variant="primary" type="button" className="btn btn-dark" onClick={this.handleShow}>Chat Now</Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title><h1>Live Chat</h1></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="form-group row">
                                    <div className='col-md-2' />
                                    <div className='col-md-8'>
                                        <h5 className='row'>Upgrade to Premium to use Live Chat feature</h5>
                                    </div>
                                    <div className='col-md-2' />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" type="button" className="btn btn-dark" onClick={this.handleClose}>Close</Button>
                                <Link to='/payment'><Button variant="secondary" type="button" className="btn btn-dark" onClick={this.handleClose}>Unlock Premium</Button></Link>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default NonLiveChat;