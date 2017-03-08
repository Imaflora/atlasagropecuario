import React, { Component, PropTypes } from 'react'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class DownloadForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseForm 
                handleSubmit={this.props.submitDownload} 
                handleHide={this.props.hideDownload} 
                show={this.props.show} 
                title="Formulário de download" 
                buttonText="Download" 
                textAreaPlaceholder="Finalidade de uso da camada..." 
                textAreaLabel="Finalidade">
            </BaseForm>
        );
    }
}

DownloadForm.propTypes = {
  
};

const mapStateToProps = (state, ownProps) => {
    return {
        layer: state.metadata.layer,
        show: state.download.show,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideDownload: () => {
            dispatch(actions.hideDownload())
        },
        submitDownload: (data) => {
            dispatch(actions.submitDownload(data, ownProps.layer))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadForm)


