import React, { Component, PropTypes } from 'react';

class Collapse extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        var height = this.props.show ? window.innerHeight - 136 - 69 : 0;
        return (
            <div style={{maxHeight: height, transition: "ease .5s max-height", overflow: "hidden", overflowY : "scroll"}}>
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