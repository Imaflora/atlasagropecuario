import {MainContainer} from './containers/MainContainer';
import { Provider } from 'react-redux';
import {store} from './redux/reducers.js';
require.context("./img/", true, /^\.\/.*\.png/);

//Custom css
require('./styles/styles.css');


ReactDOM.render(
	<Provider store={store}><MainContainer /></Provider>,
	document.getElementById('app')
	);