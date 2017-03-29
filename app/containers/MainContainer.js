import Footer from './Footer'
import Body from './Body'
import Header from './Header'


export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	// Main render function to output to app div
	render() {
		return (
			// Main div block with gray background				
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}