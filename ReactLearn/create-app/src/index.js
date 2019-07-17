import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App';
import routes from './routes'
import * as serviceWorker from './serviceWorker';
import { renderRoutes} from 'react-router-config'
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA







