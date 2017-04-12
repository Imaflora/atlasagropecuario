import { Modal, Button } from 'react-bootstrap'

import React, { Component } from 'react';

export default class MyModal extends Component {
    render() {
        var closeButton = (
            this.props.noClose
                ? null
                : <Button onClick={this.props.onHide}>Fechar</Button>
        );
        
        var submitButton = this.props.handleSubmit 
        ? (<Button type="submit" onClick={this.props.handleSubmit}>OK</Button>)  
        : undefined

        return (
            <Modal id={this.props.id} show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header className={this.props.headerClass} closeButton>
                    <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={this.props.bodyClass} style={{maxHeight:window.innerHeight*0.8 - 56 -71, overflowY:"scroll"}}>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    {this.props.footer}
                    {submitButton}
                    {closeButton}
                </Modal.Footer>
            </Modal>
        );
    }
}