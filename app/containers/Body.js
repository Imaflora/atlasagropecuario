import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { asCsvChanged, setQuery } from '../redux/actions'
import { store } from '../redux/reducers.js'
import Map from '../components/Map'
import LayersSelector from '../components/LayerSelector/LayersSelector'
import LocationSelectorContainer from './LocationSelectorContainer'
import SimpleModal from '../components/SimpleModal'
import Legend from '../components/Legend'
import AttributeWindow from '../components/AttributeWindow'
import ol from 'openlayers'
import { Checkbox } from 'react-bootstrap'

var showAgain = function (value) {
	if (localStorage) {
		localStorage['dontShowAgain2'] = value;
	}
}

var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */({
			autoPan: true,
			autoPanAnimation: {
				duration: 250
			}
		}));

class Body extends Component {
	constructor(props) {
		super(props);
	}
	

	render() {

		return (
			<div>
				<SimpleModal modalAlias="welcome" footer={<Checkbox style={{ float: "left" }} onClick={e => showAgain(e.target.checked)}>
					{this.props.translation['dontShowAgain']}
				</Checkbox>}>
					<div dangerouslySetInnerHTML={{ __html: this.props.translation['welcomeText'] }}></div>
				</SimpleModal>
				<LayersSelector />
				<Map overlay={overlay} />
				<AttributeWindow overlay={overlay} />
				<Legend />
				<SimpleModal modalAlias="message" />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		translation: state.translation,
	}
}

export default connect(mapStateToProps, () => Object())(Body);