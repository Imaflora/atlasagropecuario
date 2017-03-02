import React, { Component, PropTypes } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let attr = {'data-live-search': this.props.dataLiveSearch,
                    'data-show-subtext': this.props.dataShowSubtext};
        return (
            <select ref="sel" className={"selectpicker " + "" || this.props.className} is data-live-search={this.props.dataLiveSearch} is data-show-subtext={this.props.dataShowSubtext}>
                {this.props.children}
            </select>
        );
    }
}

Select.defaultProps = {
    dataLiveSearch: false,
    dataShowSubtext: 'false'
}

Select.propTypes = {
    dataLiveSearch: PropTypes.bool,
    dataShowSubtext: PropTypes.string,
};

export default Select;