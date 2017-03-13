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
                <img id="atlas_logo" src={require("../img/atlas_logo.png")} alt="Logo do Atlas da Agropecuária Brasielira"/>
                <div className="HEADER_CINZA"></div>
                <div className="HEADER_BRANCO"></div>
               </div>
			    	<Body />
			    	<Footer />
			</div>
			);
	}
}