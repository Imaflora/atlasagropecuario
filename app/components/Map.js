import ol from 'openlayers'
import { PropTypes } from 'react'

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          map: null,
        };
    }

    componentDidMount() {
        var map = new ol.Map({
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
            ],
            target: this.refs.map,
            view: new ol.View({
              projection: 'EPSG:3857',
              center: [0, 0],
              zoom: this.props.zoom
            })
          }); 
        this.setState({
          map: map
        });

        var select = new ol.interaction.Select();
        map.addInteraction(select);
        window.select = select;
        select.getFeatures().on('change:length', function(e) {
        if (e.target.getArray().length > 0) {
            var feature = e.target.item(0);
        }
    }.bind(this));
    }

    componentDidUpdate(prevProps, prevState) {
      var view = this.state.map.getView();
      view.setZoom(this.props.zoom);
      view.setCenter([0,0]);
    }

    render() {      
        return (
            <div id="map" className="map" ref="map">
            </div>
        );
    }
}


Map.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.number,
};