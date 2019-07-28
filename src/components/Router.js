import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App.js';
import About from './About/About.js';
import NotFound from './NotFound/NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch> 
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;