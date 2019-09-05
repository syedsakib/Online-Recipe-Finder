import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Router from './components/Router';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
