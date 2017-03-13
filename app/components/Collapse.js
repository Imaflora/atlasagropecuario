import React, { Component, PropTypes } from 'react';

class Collapse extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        var height = this.props.show ? this.refs.measure.clientHeight + 20 : 0;
        return (
            <div style={{maxHeight: height, transition: "ease .5s max-height", overflow: "hidden"}}>
                <div ref="measure">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Collapse.propTypes = {
    show: PropTypes.bool.isRequired,
};

Collapse.defaultProps = {
    show: false
}

export default Collapse;