import Map from '../components/Map'
import { connect } from 'react-redux'

//Container
const mapStateToProps = function(store) {
    return {
        geo: store.data.geo,
        data: store.data.data,
        fields: store.data.fields,
        zoom: store.map.zoom,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);