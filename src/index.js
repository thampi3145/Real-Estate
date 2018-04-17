import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';
import routes from './routes';
import App from './components/app';




import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
console.log("ss",routes);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>


  <BrowserRouter>
  <Switch>
      <Route exact path="/home" component={App}/>
  </Switch>
            </BrowserRouter>


       </Provider>
  , document.querySelector('.site'));
