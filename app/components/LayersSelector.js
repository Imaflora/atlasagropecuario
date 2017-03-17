import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayerControlContainer from '../containers/LayerControlContainer'
import DownloadForm from '../containers/DownloadForm'
import Metadata from '../containers/Metadata'
import SideCollapse from './SideCollapse'


class LayersSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true , top:0};
    }

    componentDidMount() {
        this.setState({
            top: "calc(50% - " + this.refs.innerMeasure.children[0].clientHeight/2 + "px)"
        })
    }
    

    render() {
        var layers = this.props.layers;
        var layersControls = layers
            ? Object.keys(layers).map((layerKey, i) => (
                <LayerControlContainer name={layers[layerKey].name} value={layerKey} metadata={layers[layerKey].metadata} key={i}/>
            ))
            : null;

        return (
            <SideCollapse show={this.state.isVisible} top={this.state.top}>
                <div style={{ position: "absolute", marginRight: 100 }} ref="innerMeasure">
                    <div style={{ position: "absolute", backgroundColor: "#FFF" }}>
                        <div id="malhaRectangle">
                            <img className="collapse-icon" src={require('../img/collapse-open.png')} alt="abrir"/>
                            <div className="malhaFundiaria" style={{ marginRight: 50 }}>Malha Fundiária</div>
                        </div>
                        <div>
                            <img src={require('../img/layers.png')}
                                onClick={() => this.setState({ isVisible: !this.state.isVisible })}
                                style={{ position: "absolute", right: -25, top: 10, textAlign: "right", backgroundColor: "#FFF", width: 25}}
                            />
                        </div>
                        <table style={{ width: "296px", margin: 10 }}>
                            <tbody>
                                {layersControls}
                            </tbody>
                        </table>
                    </div>
                </div>
                <DownloadForm />
                <Metadata />
            </SideCollapse>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        layers: state.layers
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayersSelector)