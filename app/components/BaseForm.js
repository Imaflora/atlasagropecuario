import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import React, { Component } from 'react'
import MyModal from './MyModal'

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}


export default class BaseForm extends Component {
     constructor(props) {
        super(props);
        this.state = {showModal: false};
    }


    render() {
        return (
            <div>
                <MyModal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} title={this.props.title}>
                    <form>
                        <FieldGroup
                            id="email"
                            type="email"
                            label="Endereço de E-mail"
                            placeholder="exemplo@exemplo.com"
                        />
                        <FieldGroup
                            id="name"
                            type="text"
                            label="Nome do usuário"
                            placeholder="Insira o nome"
                        />
                        <FieldGroup
                            id="inst"
                            type="text"
                            label="Instituição"
                            placeholder="Insira a instituição"
                        />
                        <FieldGroup
                            id="dep"
                            type="text"
                            label="Departamento"
                            placeholder="Insira o departamento"
                        />
                        <FieldGroup
                            id="tel"
                            type="tel"
                            label="Telefone para contato"
                            placeholder="ex. 55(00)90000-0000"
                        />
                        <FieldGroup
                            id="textfield"
                            label={this.props.textAreaLabel}
                            componentClass="textarea"
                            placeholder={this.props.textAreaPlaceholder}
                        />

                    </form>
                </MyModal>
                <Button id="botao" onClick={() => this.setState({ showModal: true })}> {this.props.buttonText} </ Button>
            </div>
        );
    }
}