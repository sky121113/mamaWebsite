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

// class Title extends React.Component {
//   render() {
//     return <h1>{this.props.title}</h1>;
//   }
// }
// 把該目錄的Title組件匯出
export default MainView;
