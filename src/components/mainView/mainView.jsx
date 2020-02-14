// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Test from '../test/';
import Home from '../home/';
import About from '../about/';

const MainView = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/test" component={Test} />
  </div>
);

export default MainView;
