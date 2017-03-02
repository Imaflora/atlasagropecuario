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
                source: new ol.source.OSM(),
              }),
              new ol.layer.Tile({
                source: new ol.source.TileWMS({
                  url: 'http://geonode/geoserver/geonode/wms?service=WMS',
                  params: {'LAYERS': 'geonode:bi_amz_amazleg_limite', 'TILED': true},
                  serverType: 'geoserver'
                })
              }),
            ],
            target: this.refs.map,
            view: new ol.View({
              projection: 'EPSG:3857',
              center: [-6007208.067874676, -1647062.4922446532],
              zoom: this.props.zoom
            })
          }); 
        this.setState({
          map: map
        });

        map.on('click', function(evt) {
          var coordinates = evt.coordinate;
          console.log(coordinates);
        });

    }

    componentDidUpdate(prevProps, prevState) {
      var view = this.state.map.getView();
      view.setZoom(this.props.zoom);
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
  layers: PropTypes.arrayOf(String),
};