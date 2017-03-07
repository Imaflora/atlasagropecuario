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
                source: new ol.source.XYZ({
                  attributions: [new ol.Attribution({
                     html: '© <a href="http://cartodb.com/attributions">CartoDB</a> ' +
                      '© <a href="http://www.openstreetmap.org/copyright">' +
                      'OpenStreetMap contributors</a>'
                   })],
                  url:'https://cartodb-basemaps-c.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png'
                })
              }),
              new ol.layer.Tile({
                source: new ol.source.TileWMS({
                  url: 'http://geonode/geoserver/geonode/wms?service=WMS',
                  params: {'LAYERS': 'geonode:land_ownership255', 'TILED': true},
                  serverType: 'geoserver'
                })
              }),
              new ol.layer.Tile({
                source: new ol.source.XYZ({
                  attributions: [new ol.Attribution({
                     html: '© <a href="http://cartodb.com/attributions">CartoDB</a> ' +
                      '© <a href="http://www.openstreetmap.org/copyright">' +
                      'OpenStreetMap contributors</a>'
                   })],
                  url:'https://stamen-tiles-d.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}.png'
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
