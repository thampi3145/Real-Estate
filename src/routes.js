import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';
import App from './components/app';

export default (
  <Switch>
      <Route exact path="/test1" component={App}/>
  </Switch>
);
