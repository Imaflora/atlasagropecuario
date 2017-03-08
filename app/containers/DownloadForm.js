import React, { Component, PropTypes } from 'react'
import BaseForm from '../components/BaseForm'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'

class DownloadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <BaseForm show={this.state.show} title="Formulário de download" buttonText="Download" textAreaPlaceholder="Finalidade de uso da camada..." textAreaLabel="Finalidade">
            </BaseForm>
        );
    }
}

DownloadForm.propTypes = {
  topics: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        layer: state.metadata.layer
    }
}

export default connect(mapStateToProps)(DownloadForm)


