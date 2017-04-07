import { Provider } from 'react-redux';
import {store} from './redux/reducers.js';
import {MainContainer} from './containers/MainContainer';
require.context("./img/", true, /^\.\/.*\.png/);
require.context("./fonts/", true, /^\.\/.*\.eot/);

//Custom css
//require('./styles/styles.css');
require('./styles/bootstrap.min.css');
require('./styles/ol.min.css');
require('./styles/styles.less');



ReactDOM.render(
	<Provider store={store}><MainContainer /></Provider>,
	document.getElementById('app')
	);