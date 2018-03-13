import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/App';
import  todoApp from './component/reducers';
import registerServiceWorker from './registerServiceWorker';
let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider> , document.getElementById('root'));
registerServiceWorker();
