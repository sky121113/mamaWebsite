// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header';
import Main from '../main';

const Output = () => (
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
);

// class Main extends React.Component {
//   render() {
//     return <Title title="Hello！World！" />;
//   }
// }

export default Output;
