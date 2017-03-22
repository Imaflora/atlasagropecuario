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
            //<Radio name="layers" value='asas'/>
            null
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
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(actions.openDownloadForm(ownProps.value))
        },
        handleMetadata: () => {
            dispatch(actions.openMetadata(ownProps.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayerControl)