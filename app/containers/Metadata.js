import React, { Component, PropTypes } from 'react'
import MyModal from '../components/MyModal'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class Metadata extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyModal
                show={this.props.show ? this.props.show : false}
                title={this.props.title}
                onHide={this.props.hideMetadata}
                handleSubmit={this.props.hideMetadata}
                noClose>
                {this.props.metadata}
            </MyModal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        layer: state.metadata.layer,
        show: state.metadata.show,
        title: state.metadata.layer && state.layers[state.metadata.layer].name,
        metadata: state.metadata.layer && state.layers[state.metadata.layer].metadata
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideMetadata: () => {
            dispatch(actions.hideMetadata())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Metadata)


