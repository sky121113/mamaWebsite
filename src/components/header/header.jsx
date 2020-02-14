// @flow
import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props:{title:string}) => {
  const { title } = props;
  return (
    <div>
      <div className="">{title}</div>

      <ul className="nav justify-content-center">
        {/* Link組件中的to會改變網址，但不會刷新頁面 */}
        <li className="nav-item"><Link className="nav-link" to="/">回到首頁</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/test">測試元件</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">關於我們</Link></li>
      </ul>

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
