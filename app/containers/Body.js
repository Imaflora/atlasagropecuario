import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { asCsvChanged, setQuery } from '../redux/actions'
import { store } from '../redux/reducers.js'
import MapContainer from './MapContainer'
import LayersSelector from '../components/LayerSelector/LayersSelector'
import LocationSelectorContainer from './LocationSelectorContainer'
import Welcome from '../components/Welcome'
import Legend from '../components/Legend'
import AttributeWindow from '../components/AttributeWindow'
import ol from 'openlayers'


class Body extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}


	render() {
		var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */({
			autoPan: true,
			autoPanAnimation: {
				duration: 250
			}
		}));

		return (
			<div>
				<Welcome />
				<LayersSelector />
				<MapContainer overlay={overlay} />
				<AttributeWindow overlay={overlay} />
				<Legend />
			</div>
		);
	}
}



export default connect(() => Object(), () => Object())(Body);