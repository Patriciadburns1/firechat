import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'; 
import {Provider} from 'react-redux'; 
import {createStore,applyMiddleware } from 'redux'; 
import App from './components/app';
import thunk from './middleware/thunk'; 
import rootReducer from './reducers'; 


const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}> 
    <Router>
        <App/> 
   </Router> 
    </Provider>, 
    document.getElementById('root')
);
