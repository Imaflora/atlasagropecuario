import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayerControlContainer from '../containers/LayerControlContainer'
import DownloadForm from '../containers/DownloadForm'

class LayersSelector extends Component {
    render() {
        return (
            <div style={{position: "fixed", zIndex: 10000, backgroundColor: "#FFF"}}>
                <LayerControlContainer />
                <DownloadForm />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayersSelector)