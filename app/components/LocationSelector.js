import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './Select'
import Option from './Option'

class LocationSelector extends Component {
    render() {
        return (
            <div id="location-selector" className="align-center row-fluid">
                <select className="cool" is data-show-subtext="true" is data-live-search={true}>
                    <optgroup label="picnic">
                    <Option dataSubtext="Rep California">Tom Foolery</Option>
                    <Option dataSubtext="Sen California">Bill Gordon</Option>
                    </optgroup>
                    <Option dataSubtext="Sen Massacusetts">Elizabeth Warren</Option>
                    <Option dataSubtext="Rep Alabama">Mario Flores</Option>
                    <Option dataSubtext="Rep Alaska">Don Young</Option>
                    <Option dataSubtext="Rep California" disabled="disabled">Marvin Martinez</Option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector)