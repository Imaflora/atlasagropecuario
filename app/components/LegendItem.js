export default class LegendItem extends React.Component {
    render() {
        var colorBackground = this.props.color !== null ? {
            backgroundColor: this.props.color
         } : {
             backgroundImage: "url('app/img/" + this.props.img + "')"
        };
        return (<div className="legend-item" style={colorBackground}>
            </div>);
    }
}

