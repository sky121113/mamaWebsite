// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header/';
import MainView from '../mainView/';

const Main = () => (
  <BrowserRouter>
    <Header title="尛馬工作室" />
    {/* 這邊塞一個分隔線 */}
    <hr />
    {/* 路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About */}
    <MainView />
  </BrowserRouter>
);

// class Main extends React.Component {
//   render() {
//     return <Title title="Hello！World！" />;
//   }
// }

export default Main;
