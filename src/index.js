import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import AppRouterContainer from './App';


ReactDOM.render( <AppRouterContainer />, document.getElementById('root'));

serviceWorker.unregister();
