// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Top from './top';

const Header = (props:{title:string}) => {
  const { title } = props;
  return (
    <div>
      <Top />
      <nav className="navbar navbar-light bg-light">
        <Link className="nav-link" to="/">
          {title}
        </Link>
        <ul className="nav justify-content-center">
          {/* Link組件中的to會改變網址，但不會刷新頁面 */}
          <li className="nav-item"><Link className="nav-link" to="/myWorks">我的作品</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/test">測試元件</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">關於尛馬</Link></li>
        </ul>
      </nav>
    </div>
  );
};
// class Title extends React.Component {
//   render() {
//     return <h1>{this.props.title}</h1>;
//   }
// }
// 把該目錄的Title組件匯出
export default Header;
