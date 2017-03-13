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
                <div className="HEADER_CINZA"></div>
                <div></div>
			    	<Body />
			    	<Footer />
			</div>
			);
	}
}