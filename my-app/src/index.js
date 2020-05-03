import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './js/Hello';
import Introduction from './js/Introduction';

// import * as serviceWorker from './serviceWorker';

/**
 * IP address is user machine specific
 * Sarvesh  = 192.168.1.101
 * Priyanka =
 * Default  = localhost
 */
ReactDOM.render(<Introduction ipaddress="192.168.1.102" firstName="Sarveshwaran" lastName="Rajarajan" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
