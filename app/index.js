import { Provider } from 'react-redux';
import {store} from './redux/reducers.js';
import {MainContainer} from './containers/MainContainer';
require.context("./img/", true, /^\.\/.*\.png/);

//Custom css
//require('./styles/styles.css');
require('./styles/styles.less');
require('./fonts/Gotham-Bold.otf');



ReactDOM.render(
	<Provider store={store}><MainContainer /></Provider>,
	document.getElementById('app')
	);