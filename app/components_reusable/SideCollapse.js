import React, { Component, PropTypes } from 'react';

export default class SideCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false, width: 0}
    }
    
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show) {
            this.setState({
                width: nextProps.show ? 0 : this.refs.measure.children[0].children[0].clientWidth
            });   
        }
    }
    
    
    render() {
        return (
            <div style={{
                transform: "translateX(-" + this.state.width + "px)",
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
