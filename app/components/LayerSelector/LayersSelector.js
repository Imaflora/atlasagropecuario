import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import LayerControl from './LayerControl'
import DownloadForm from '../../containers/DownloadForm'
import Metadata from '../../containers/Metadata'
import SideCollapse from '../../components_reusable/SideCollapse'


class LayersSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true, top: 0 };
    }

    componentDidMount() {
        this.setState({
            top: "calc(50% - " + this.refs.innerMeasure.children[0].clientHeight / 2 + "px)"
        })
    }


    render() {
        var layers = this.props.layers;
        var layersControls = layers
            ? Object.keys(layers).map((layerKey, i) => (
                <LayerControl name={layers[layerKey].name} value={layerKey} metadata={layers[layerKey].metadata} key={i} />
            ))
            : null;

        return (
            <div>
                <div id="layer-shower" className={this.props.show ? "on" : "off"} onClick={this.props.toggleLayersSelector}  >
                        <img id="show-layer" src={require('../../img/show_legend.png')} alt="Show layer" />
                        <div id="layer-vertical" className="uppercase">{this.props.translation["layers"]}</div>
                </div>
                <SideCollapse show={this.props.show} top={this.state.top} width={260}>
                    <div style={{ position: "absolute", marginRight: 100 }} ref="innerMeasure">
                        <div style={{ position: "absolute", backgroundColor: "#FFF", top: -61 }}>
                            <div id="layerRectangle">
                                <img className="collapse-icon" src={require('../../img/hide_legend.png')} 
                                    alt="abrir" 
                                    onClick={this.props.toggleLayersSelector} 
                                />
                                <div className="malhaFundiaria uppercase" style={{ marginRight: 50 }}>{this.props.translation["layers"]}</div>
                            </div>
                            <table id="layers-control">
                                <tbody>
                                    {layersControls}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <DownloadForm />
                    <Metadata />
                </SideCollapse>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        layers: state.translation.layersObj,
        show: state.layerSelector.show,
        translation: state.translation,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleLayersSelector: () => {
        dispatch(actions.toggleLayersSelector())
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(LayersSelector)