import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { asCsvChanged, setQuery } from '../redux/actions'
import { store } from '../redux/reducers.js'
import { MapContainer } from './MapContainer'

class Body extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-sm-10 body">
			</div>
		);
	}
}



export default connect(() => Object(), () => Object())(Body);