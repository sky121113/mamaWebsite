// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Test from '../test';
import Home from '../home';
import About from '../about';
import { MyWorks, MyWorks2 } from '../myWorks';

const Main = () => (
  <div style={{ textAlign: 'center' }}>
    <Route exact path="/" component={Home} />
    <Route path="/myWorks" component={MyWorks} />
    <Route path="/myWorks2" component={MyWorks2} />
    <Route path="/about" component={About} />
    <Route path="/test" component={Test} />
  </div>
);

export default Main;
