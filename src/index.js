import React from 'react'
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import WalletPage from './pages/WalletPage'
import reducers from './redux/reducers';
import { BrowserRouter as Router, Route } from "react-router-dom";



ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<Router>
			<Route exact path="/" component={App}/>
			<Route path="/wallet" component={WalletPage}/>
		</Router>
	</Provider>, 
	document.getElementById('root'));


