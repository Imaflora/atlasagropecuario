import React, { Component, PropTypes } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs.opt);
        element.setAttribute('data-subtext', this.props.dataSubtext);
    }
    

    render() {
        return (
            <option ref="opt">
                {this.props.children}
            </option>
        );
    }
}

Option.propTypes = {
    dataSubtext: PropTypes.string,
};

export default Option;