import React, { Component, PropTypes } from 'react';

export default class SideCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false, width: 0}
    }
    
    
    
    render() {
        var width = this.props.show ? 0 : this.props.width;
        return (
            <div style={{
                transform: "translateX(-" + width + "px)",
                transition: "ease .5s transform", 
                position: "absolute",
                zIndex: 1,
                top: this.props.top,
                width: "100%"}}>
                <div ref="measure">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SideCollapse.propTypes = {
    show: PropTypes.bool.isRequired,
};

SideCollapse.defaultProps = {
    show: true
}
