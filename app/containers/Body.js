import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { asCsvChanged, setQuery } from '../redux/actions'
import { store } from '../redux/reducers.js'
import MapContainer from './MapContainer'
import LayersSelector from '../components/LayerSelector/LayersSelector'
import LocationSelectorContainer from './LocationSelectorContainer'
import Welcome from '../components/Welcome'

class Body extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Welcome />
				<LayersSelector />
				<MapContainer />
			</div>
		);
	}
}



export default connect(() => Object(), () => Object())(Body);