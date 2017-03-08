import {Modal, Button} from 'react-bootstrap'

import React, { Component } from 'react';

export default class MyModal extends Component {
    render() {
        return (
        <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {this.props.children}
            </Modal.Body>
            <Modal.Footer>
            <Button type="submit" onClick={this.props.handleSubmit}>OK</Button>
            <Button onClick={this.props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}