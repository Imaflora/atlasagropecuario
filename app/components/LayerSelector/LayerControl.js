import React, { Component, PropTypes } from 'react';
import { Radio } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'


class LayerControl extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        var selector = (
            <Radio name="layers" value={this.props.value} checked={this.props.selectedLayer == this.props.value} onChange={() => this.props.changeLayer(this.props.value)}/>
        );

        return (
            <tr >
                <td>
                    {selector}
                </td>
                <td className="layer-label" style={{ width: "100%" }}>
                    <span >{this.props.name}</span>
                </td>
                <td>
                    <img
                        src={require('../../img/metadata.png')}
                        alt="Metadata" onClick={this.props.handleMetadata}
                        style={{
                            height: 20,
                            width: 20,
                            textAlign: "right",
                            marginLeft: 4,
                        }}
                    />
                </td>
                <td>
                    <img
                        src={require('../../img/download.png')}
                        alt="Download" onClick={this.props.handleClick}
                        style={{
                            height: 20,
                            width: 20,
                            textAlign: "right",
                            marginLeft: 4,
                        }}
                    />
                </td>
            </tr>
        );
    }
}

LayerControl.propTypes = {
    handleClick: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
    return {
        selectedLayer: state.map.coverLayer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(actions.openDownloadForm(ownProps.value))
        },
        handleMetadata: () => {
            dispatch(actions.openMetadata(ownProps.value))
        },
        changeLayer: (value) => {
            dispatch(actions.changeLayer(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayerControl)