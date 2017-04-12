import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import LegendItem from './LegendItem'

class Legend extends React.Component {
    render() {
            var legendValues = this.props.layers[this.props.selectedLayer].legend;

            var legendItems = legendValues.map((obj, i) => (
                <tr key={i}>
                    <td><LegendItem color={obj.color} /></td>
                    <td className="legend-label">{obj.label}</td>
                </tr>
            ));

        var render =
            <div>
                <div id="legend" className={!this.props.show ? "off" : undefined}>
                    <div id="legend-title">Legenda
                    <img id="hide-legend" src={require("../img/hide_legend.png")} alt="Hide legend" onClick={this.props.hideLegend} />
                    </div>
                    <table id="legend-table">
                        <tbody>
                            {legendItems}
                        </tbody></table>
                </div>
                    <div id="legend-shower" className={this.props.show ? "off" : undefined} onClick={this.props.showLegend}>
                        <img id="show-legend" src={require("../img/show_legend.png")} alt="Show legend" />
                        <div id="legend-vertical">LEGENDA</div>
                    </div>
                </div>

        return render;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        show: state.legend.show,
        layers: state.layers,
        selectedLayer: state.map.coverLayer,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideLegend: () => {
            dispatch(actions.hideLegend());
        },
        showLegend: () => {
            dispatch(actions.showLegend());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Legend);