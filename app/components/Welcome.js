import React, { Component, PropTypes } from 'react'
import MyModal from '../components/MyModal'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Checkbox} from 'react-bootstrap'


const Welcome = props => {
    var showAgain = function (value) {
        if (localStorage) {
            localStorage['dontShowAgain'] = value;
        }
    }

    return (
        <MyModal
            headerClass="welcome-header"
            bodyClass="welcome-body"
            show={props.show ? props.show : false}
            title="Bem-vindo"
            handleSubmit={props.hide}
            onHide={props.hide}
            noClose
            footer={<Checkbox style={{float:"left"}} onClick={e => showAgain(e.target.checked)}>
                Não mostrar novamente
            </Checkbox>}>
            {props.text}
            <br />
        </MyModal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        show: state.welcome.show,
        text: state.welcome.text,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hide: () => {
            dispatch(actions.hideWelcome())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)


