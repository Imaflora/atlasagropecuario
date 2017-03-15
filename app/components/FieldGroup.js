import * as ReactBootstrap from 'react-bootstrap'
import React, { Component, PropTypes } from 'react';

export default class FieldGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    getValidationState(validationPattern) {
        var validation;
        var value = this.props.value ? this.props.value : this.state.value;
        if (this.props.required) {
            validation = "success"
                    if (value.length === 0)
                        validation = "error"
                    else if (typeof(validationPattern) !== 'undefined')
                        if (!value.match(new RegExp(validationPattern)))
                            validation = "error"
        }
        return validation;
    }

    getResult({id, label, children, required, validationPattern, handleChange, value, ...props}) {
        var label = this.props.label;
        var labelControl = label ? <ReactBootstrap.ControlLabel>{label}</ReactBootstrap.ControlLabel> : null;
        return (
            <ReactBootstrap.FormGroup controlId={id} validationState={this.getValidationState(validationPattern)}>
                {labelControl}
                <ReactBootstrap.FormControl {...props} onChange={handleChange ? handleChange : this.onChange} value={value}>
                    {children}
                </ReactBootstrap.FormControl>
            </ReactBootstrap.FormGroup>
        );
    }

    render() {
        return this.getResult({...this.props})
    }
}