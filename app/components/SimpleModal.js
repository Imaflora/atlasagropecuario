import React, { Component, PropTypes } from 'react'
import MyModal from '../components/MyModal'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const SimpleModal = props => {

    return (
        <MyModal
            bodyId={props.modalAlias + "-body"}
            show={props.show ? props.show : false}
            title={props.translation[props.modalAlias + "Title"]}
            handleSubmit={props.hide}
            onHide={props.hide}
            noClose
            footer={props.footer}>
            {props.text}
            {props.children}
        </MyModal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        show: state[ownProps.modalAlias].show,
        text: state[ownProps.modalAlias].text,
        translation: state.translation
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hide: () => {
            dispatch(actions["toggle" + capitalizeFirstLetter(ownProps.modalAlias)]())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal)