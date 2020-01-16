import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './js/Hello';
import Introduction from './js/Introduction';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Introduction firstName="Sarveshwaran" lastName="Rajarajan" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
