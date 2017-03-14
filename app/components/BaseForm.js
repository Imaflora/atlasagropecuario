import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import React, { Component, PropTypes } from 'react'
import MyModal from './MyModal'
import FieldGroup from './FieldGroup'



export default class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            email: '',
            name: '',
            institution: '',
            dept: '',
            tel: '',
            textfield: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log("handling");
        var state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
    }


    render() {
        var btn = this.props.show !== undefined
            ? null
            : <Button id="botao" onClick={() => this.setState({ showModal: true })}> {this.props.buttonText} </ Button>;


        return (
            <div>
                <MyModal show={this.props.show ? this.props.show : this.state.showModal} onHide={() => this.setState({ showModal: false })} title={this.props.title}>
                    <form>
                        <FieldGroup
                            id="name"
                            type="text"
                            label="Nome"
                            placeholder="Nome"
                            required
                        />
                        <FieldGroup
                            id="email"
                            type="email"
                            label="Endereço de E-mail"
                            placeholder="E-mail"
                            required={true}
                            validationPattern=".+\@.+\..+"
                            value={this.state.email}
                            handleChange={this.handleChange}
                        />
                        <FieldGroup
                            id="institution"
                            type="text"
                            label="Instituição"
                            placeholder="Instituição"
                            required
                        />
                        <FieldGroup
                            id="dept"
                            type="text"
                            label="Departamento"
                            placeholder="Departamento"
                        />
                        <FieldGroup
                            id="tel"
                            type="tel"
                            label="Telefone para contato"
                            placeholder="Telefone"
                        />
                        {this.props.children}
                        <FieldGroup
                            id="textfield"
                            label={this.props.textAreaLabel}
                            componentClass="textarea"
                            placeholder={this.props.textAreaPlaceholder}
                            required
                        />
                        <Button type="submit">Enviar</Button>
                    </form>
                </MyModal>
                {btn}
            </div>
        );
    }
}

BaseForm.propTypes = {
    title: PropTypes.string.isRequired,
    textAreaLabel: PropTypes.string.isRequired,
    textAreaPlaceholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    show: PropTypes.bool,
};