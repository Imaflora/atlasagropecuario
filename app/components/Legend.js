import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class Legend extends React.Component {
    render() {
        var render =
            this.props.show ? (
            <div id="legend">
                <div id="legend-title">Legenda
                    <img id="hide-legend" src={require("../img/hide_legend.png")} alt="Hide legend" onClick={this.props.hideLegend}/>
                </div>
                <table id="legend-table">
                <tbody>
                    <tr>
                        <td><img src={require("../img/rampa.png")} alt="rampa"/></td>
                            <td>Propriedades</td>
                        </tr>
                        
                </tbody></table>
            </div>
        ) : (
            <div id="legend-shower"  onClick={this.props.showLegend}>
                <img id="show-legend" src={require("../img/show_legend.png")} alt="Show legend"/>
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