import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { asCsvChanged, setQuery } from '../redux/actions'
import { store } from '../redux/reducers.js'
import MapContainer from './MapContainer'
import LayersSelectorContainer from './LayersSelectorContainer'
import LocationSelectorContainer from './LocationSelectorContainer'

class Body extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<LocationSelectorContainer />
				<LayersSelectorContainer />
				<MapContainer />
			</div>
		);
	}
}



export default connect(() => Object(), () => Object())(Body);