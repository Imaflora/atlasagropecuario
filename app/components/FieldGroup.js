import * as ReactBootstrap from 'react-bootstrap'
import React, { Component, PropTypes } from 'react';

export default class FieldGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ value: e.target.value });
    }

    render() {
        var validation;
        if (this.props.required) {
            validation = "success"
                    if (this.state.value.length === 0)
                        validation = "error"
                    else if (this.props.validationPattern)
                        if (!this.state.value.match(new RegExp(this.props.validationPattern)))
                            validation = "error"
        }

        

        var label = this.props.label;
        if (this.props.required) label += "*";
        return (
            <ReactBootstrap.FormGroup controlId={this.props.id} validationState={validation}>
                <ReactBootstrap.ControlLabel>{label}</ReactBootstrap.ControlLabel>
                <ReactBootstrap.FormControl {...this.props} onChange={this.onChange} />
            </ReactBootstrap.FormGroup>
        );
    }
}