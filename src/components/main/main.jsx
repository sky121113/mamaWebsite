import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Title from '../title/';
import Test from '../test/';
import Home from '../home/';
import About from '../about/';

const Main = () => (
  <BrowserRouter>
    <div>
      <Title title="功能選單" />
      <ul className="nav justify-content-center">
        {/* Link組件中的to會改變網址，但不會刷新頁面 */}
        <li className="nav-item"><Link className="nav-link" to="/">回到首頁</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/test">測試元件</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">關於我們</Link></li>
      </ul>
      {/* 這邊塞一個分隔線 */}
      <hr />
      {/* 路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>
);

// class Main extends React.Component {
//   render() {
//     return <Title title="Hello！World！" />;
//   }
// }

export default Main;
