import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { asCsvChanged, setQuery } from '../redux/actions'
import { store } from '../redux/reducers.js'
import MapContainer from './MapContainer'
import LayersSelector from '../components/LayerSelector/LayersSelector'
import LocationSelectorContainer from './LocationSelectorContainer'
import Welcome from '../components/Welcome'
import Legend from '../components/Legend'

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
				<Legend />
			</div>
		);
	}
}



export default connect(() => Object(), () => Object())(Body);