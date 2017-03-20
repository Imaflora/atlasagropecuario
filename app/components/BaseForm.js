import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import React, { Component, PropTypes } from 'react'
import MyModal from './MyModal'
import FieldGroup from './FieldGroup'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

var promise;

class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {

        }
        this.state = {
            showModal: false,
            data: {
                email: '',
                nome: '',
                instituicao: '',
                departamento: '',
                telefone: '',
                textfield: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    @autobind
    handleChange(e) {
        var element = e;
        if (e.target.id === "email") {
            clearTimeout(promise);
            var value = e.target.value;
            promise = setTimeout(() => {
                if ($('#email')[0].parentElement.attributes['class'].value.indexOf('has-error') === -1) {
                    promise = this.props.getUserInfo(value);
                }
            }, 1000);
        }
        this.props.updateFormValue(e.target.id, e.target.value);
    }


    render() {
        var btn = this.props.show !== undefined
            ? null
            : <Button id="botao" onClick={() => this.setState({ showModal: true })}> {this.props.buttonText} </ Button>;


        var handleHide = this.props.handleHide
            ? this.props.handleHide
            : handleHide = () => this.setState({ showModal: false });

        var cleanData = {
            email: '',
            nome: '',
            instituicao: '',
            departamento: '',
            telefone: '',
            textfield: '',
        };

        return (


            <div>
                <MyModal
                    handleSubmit={(e) => {
                        if ($(e.target).parent().parent().find('.has-error').length > 0) {
                            console.log('has error');
                            return;
                        }
                        this.props.handleSubmit();
                        this.setState({ data: Object.assign({}, cleanData) });
                    }}
                    show={typeof(this.props.show) !== 'undefined' ? this.props.show : this.state.showModal}
                    onHide={handleHide}
                    title={this.props.title}>
                    <form>
                        <FieldGroup
                            id="email"
                            type="email"
                            maxLength={254}
                            label="Endereço de E-mail"
                            placeholder="E-mail"
                            required={true}
                            validationPattern=".+\@.+\..{2,}"
                            value={this.props.userData.email}
                            handleChange={this.handleChange}
                        />
                        <FieldGroup
                            id="nome"
                            type="text"
                            maxLength={124}
                            placeholder="Nome"
                            handleChange={this.handleChange}
                            value={this.props.userData.nome}
                            required
                        />
                        <FieldGroup
                            id="instituicao"
                            type="text"
                            maxLength={100}
                            placeholder="Instituição"
                            value={this.props.userData.instituicao}
                            handleChange={this.handleChange}
                            required
                        />
                        <FieldGroup
                            id="departamento"
                            type="text"
                            maxLength={50}
                            placeholder="Departamento"
                            value={this.props.userData.departamento}
                            handleChange={this.handleChange}
                        />
                        <FieldGroup
                            id="telefone"
                            type="telefone"
                            maxLength={50}
                            placeholder="Telefone"
                            value={this.props.userData.telefone}
                            handleChange={this.handleChange}

                        />
                        {this.props.children}
                        <FieldGroup
                            id="textfield"
                            maxLength={30000}
                            componentClass="textarea"
                            placeholder={this.props.textAreaLabel}
                            value={this.props.userData.textfield}
                            handleChange={this.handleChange}
                            required
                        />
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
    buttonText: PropTypes.string,
    show: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserInfo: (email) => {
            dispatch(actions.getUserInfo(email))
        },
        updateFormValue: (what, value) => {
            dispatch(actions.updateFormValue(what, value))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BaseForm)