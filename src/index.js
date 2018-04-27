import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';
import routes from './routes';
import App from './components/app';
import Property from './components/property';




import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
        promise
        )(createStore);
console.log("ss",routes);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>


  <BrowserRouter>
  <Switch>
      <Route exact path="/home" component={App}/>
      <Route exact path="/properties" component={Property}/>
  </Switch>
            </BrowserRouter>


       </Provider>
  , document.querySelector('.estate'));
