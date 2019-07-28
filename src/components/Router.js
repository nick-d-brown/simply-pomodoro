import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App.js';
import About from './About/About.js';
import NotFound from './NotFound/NotFound.js';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';

const Router = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch> 
      <Route path='/' exact component={App} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default Router;