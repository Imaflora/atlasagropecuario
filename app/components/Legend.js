import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import LegendItem from './LegendItem'

class Legend extends React.Component {
    render() {
        var render =
            this.props.show ? (
                <div id="legend">
                    <div id="legend-title">Legenda
                    <img id="hide-legend" src={require("../img/hide_legend.png")} alt="Hide legend" onClick={this.props.hideLegend} />
                    </div>
                    <table id="legend-table">
                        <tbody>
                            <tr>
                                <td><LegendItem color="#00441b" /></td>
                                <td>UCs Prot. Integral</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#006d2c" /></td>
                                <td>UCs Uso Sustentável</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#238b45" /></td>
                                <td>Terras Indígenas</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#41ab5d" /></td>
                                <td>Áreas Militares</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#74c476" /></td>
                                <td>Terras Não Destinadas</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#023858" /></td>
                                <td>Imóveis privados Incra</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#045a8d" /></td>
                                <td>Imóveis privados CAR</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#0570b0" /></td>
                                <td>Imóveis simulados</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#3690c0" /></td>
                                <td>Assentamentos</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#74a9cf" /></td>
                                <td>Quilombolas</td>
                            </tr>
                            <tr>
                                <td><LegendItem color="#252525" /></td>
                                <td>Resíduo</td>
                            </tr>

                        </tbody></table>
                </div>
            ) : (
                    <div id="legend-shower" onClick={this.props.showLegend}>
                        <img id="show-legend" src={require("../img/show_legend.png")} alt="Show legend" />
                        <div id="legend-vertical">LEGENDA</div>
                    </div>
                );

        return render;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        show: state.legend.show
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