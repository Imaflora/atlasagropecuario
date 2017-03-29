import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class AttributeWindow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.overlay.setElement(document.getElementById('info-window'));
    var closer = document.getElementById('popup-closer');
    closer.onclick = function () {
      closer.blur();
      this.props.overlay.setPosition(undefined);
      return false;
    }.bind(this);
  }


  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevProps.infoWindow) !== JSON.stringify(this.props.infoWindow)) {
      this.props.overlay.setPosition(this.props.mapClick);
    }
  }
  



  render() {
    var dataValues = [];
    for (var i in this.props.infoWindow) {
      dataValues.push(<li key={i}>{this.props.translation[i]}: {this.props.infoWindow[i]}</li>);
    }

    return (
      <div id="info-window" className="ol-popup">
        <a href="#" id="popup-closer" className="ol-popup-closer"></a>
        <div id="popup-content">
          <ul>
            {dataValues}
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    infoWindow: state.infoWindow,
    translation: state.translation,
    mapClick: state.map.click,
  }
}



export default connect(mapStateToProps)(AttributeWindow);