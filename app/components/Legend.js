import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import LegendItem from './LegendItem'

class Legend extends React.Component {
    render() {
        var legendValues = [
            {
                color: '#00441b',
                label: 'UCs de Proteção Integral',
            },
            {
                color: '#006d2c',
                label: 'UCs de Uso Sustentável',
            },
            {
                color: '#238b45',
                label: 'Terras Indígenas',
            },
            {
                color: '#41ab5d',
                label: 'Áreas Militares',
            },
            {
                color: '#74c476',
                label: 'Terras Não Destinadas',
            },
            {
                color: '#023858',
                label: 'Imóveis Privados INCRA',
            },
            {
                color: '#045a8d',
                label: 'Imóveis Privados CAR',
            },
            {
                color: '#0570b0',
                label: 'Imóveis Simulados',
            },
            {
                color: '#3690c0',
                label: 'Assentamentos',
            },
            {
                color: '#74a9cf',
                label: 'Territórios Comunitários',
            },
            {
                color: '#252525',
                label: 'Urbano, Transporte e Água',
            },
        ];

        var legendItems = legendValues.map((obj, i) => (
            <tr key={i}>
                <td><LegendItem color={obj.color} /></td>
                <td className="legend-label">{obj.label}</td>
            </tr>
        ))

        var render =
            this.props.show ? (
                <div id="legend">
                    <div id="legend-title">Legenda
                    <img id="hide-legend" src={require("../img/hide_legend.png")} alt="Hide legend" onClick={this.props.hideLegend} />
                    </div>
                    <table id="legend-table">
                        <tbody>
                            {legendItems}
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