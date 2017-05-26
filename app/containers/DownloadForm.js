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
            <div id="download-form" ref="form">
                <BaseForm 
                    handleSubmit={this.props.submitDownload} 
                    handleHide={this.props.hideDownload} 
                    show={this.props.show} 
                    title={this.props.title === undefined ? this.props.translation['downloadDatabase'] : (this.props.translation['modalDownloadTitle'] + this.props.title)}
                    buttonText="Download" 
                    textAreaLabel={this.props.translation['downloadArea']}
                >
                </BaseForm>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        layer: state.download.layer,
        show: state.download.show,
        title: state.download.layer && state.translation.layersObj && state.translation.layersObj[state.download.layer].name,
        translation: state.translation,
        userData: state.user,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideDownload: () => {
            dispatch(actions.hideDownload())
        },
        submitDownload: (formContainer) => {
            dispatch(actions.submitFeedback(true))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadForm)


