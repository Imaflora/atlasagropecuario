import Footer from './Footer.js'
import Body from './Body'


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
                <div className="row">
                  <div>
                  <img id="atlas_logo" src={require("../img/atlas_logo.png")} alt="Logo do Atlas da Agropecuária Brasielira"/>
                  </div>
                  <div id="realiz_logo">
                  <img src={require("../img/imaflora_logo.png")} alt="Logo do Imaflora"/>
                  <img src={require("../img/esalq_logo.png")} alt="Logo da Esalq"/>
                  </div>    
                </div>
                <div className="HEADER_CINZA"></div>
                <div className="HEADER_BRANCO"></div>
              </div>
			    	<Body />
			    	<Footer />
			</div>
			);
	}
}