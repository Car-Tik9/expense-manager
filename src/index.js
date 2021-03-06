import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { Provider } from 'react-redux'
import App from './components/App';
import {store} from './helpers/store'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

module.hot && module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();