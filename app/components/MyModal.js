import { Modal, Button } from 'react-bootstrap'

import React, { Component } from 'react';

export default class MyModal extends Component {
    render() {
        var closeButton = (
            this.props.noClose
                ? null
                : <Button onClick={this.props.onHide}>Fechar</Button>
        );

        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header id={this.props.headerId} closeButton>
                    <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body id={this.props.bodyId} style={{maxHeight:window.innerHeight*0.8 - 56 -71, overflowY:"scroll"}}>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    {this.props.footer}
                    <Button type="submit" onClick={this.props.handleSubmit}>OK</Button>
                    {closeButton}
                </Modal.Footer>
            </Modal>
        );
    }
}