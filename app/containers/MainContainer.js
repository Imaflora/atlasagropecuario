import Footer from './Footer.js'
import Body from './Body'
import { Row, Col } from 'react-bootstrap'


export class MainContainer extends React.Component {
	constructor(props) {
	    super(props);
  	}

	// Main render function to output to app div
	render() {
		return (
			// Main div block with gray background				
			<div>
              <div>
                  <Col id="atlas_logo" xs={12} sm={6}>
                  <img src={require("../img/atlas_logo.png")} alt="Logo do Atlas da Agropecuária Brasielira"/>
                  </Col>
                  <Col id="realiz_logo" xsHidden xs={6}>
                  <img src={require("../img/imaflora_logo.png")} alt="Logo do Imaflora"/>
                  <img src={require("../img/esalq_logo.png")} alt="Logo da Esalq"/>
                  </Col>    
                <Col xs={12} className="HEADER_CINZA"></Col>
                <Col xs={12} className="HEADER_BRANCO"></Col>
              </div>
			    	<Body />
			    	<Footer />
			</div>
			);
	}
}