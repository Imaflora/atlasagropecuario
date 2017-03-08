import React, { Component, PropTypes } from 'react';



class LayerControl extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <img
                    src={require('../img/download.png')}
                    alt="Download" onClick={this.props.handleClick}
                    style={{
                        height: 20,
                        width: 20,
                    }}
                />
            </div>
        );
    }
}

LayerControl.propTypes = {
    handleClick: PropTypes.func,
};

export default LayerControl;