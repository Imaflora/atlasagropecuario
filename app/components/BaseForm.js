import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import React, { Component, PropTypes } from 'react'
import MyModal from './MyModal'
import FieldGroup from './FieldGroup'



export default class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            
        }
        this.state = {
            showModal: false,
            data: {
                email: '',
                name: '',
                institution: '',
                dept: '',
                tel: '',
                textfield: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    @autobind
    handleChange(e) {
        var state = {data: this.state.data};
        state['data'][e.target.id] = e.target.value;
        this.setState(state);
    }


    render() {
        var btn = this.props.show !== undefined
            ? null
            : <Button id="botao" onClick={() => this.setState({ showModal: true })}> {this.props.buttonText} </ Button>;


        var handleHide = this.props.handleHide 
            ? this.props.handleHide 
            : handleHide = () => this.setState({ showModal: false });
        
        var cleanData = {email: '',
                name: '',
                institution: '',
                dept: '',
                tel: '',
                textfield: '',};

        return (
            

            <div>
                <MyModal 
                handleSubmit={() => {
                    this.props.handleSubmit(this.state.data);
                    this.setState({data: Object.assign({}, cleanData)}); 
                }} 
                show={this.props.show ? this.props.show : this.state.showModal} 
                onHide={handleHide} 
                title={this.props.title}>
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
                            validationPattern=".+\@.+\..{2,}"
                            value={this.state.data.email}
                            handleChange={this.handleChange}
                        />
                        <FieldGroup
                            id="institution"
                            type="text"
                            label="Instituição"
                            placeholder="Instituição"
                            handleChange={this.handleChange}
                            value={this.state.data.name}
                            required
                        />
                        <FieldGroup
                            id="dept"
                            type="text"
                            label="Departamento"
                            placeholder="Departamento"
                            value={this.state.data.dept}
                            handleChange={this.handleChange}
                        />
                        <FieldGroup
                            id="tel"
                            type="tel"
                            label="Telefone para contato"
                            placeholder="Telefone"
                            value={this.state.data.tel}
                            handleChange={this.handleChange}

                        />
                        {this.props.children}
                        <FieldGroup
                            id="textfield"
                            label={this.props.textAreaLabel}
                            componentClass="textarea"
                            placeholder={this.props.textAreaPlaceholder}
                            value={this.state.data.textfield}
                            handleChange={this.handleChange}
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