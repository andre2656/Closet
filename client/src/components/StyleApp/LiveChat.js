import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'

class LiveChat extends Component {
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
                    <div className="card-header">Speak with a Stylist for Real-Time Advice</div>
                    <div className="card-body">
                        <Button variant="primary" type="button" className="btn btn-dark" onClick={this.handleShow}>Chat Now</Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title><h1>Live Chat</h1></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Chat />
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveChat;