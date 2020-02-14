// @flow
import React from 'react';

// class About extends React.Component {
//   render() {
//     return <p>這邊是關於我們</p>;
//   }
// }
// export { About };

import { Route, Link, Switch } from 'react-router-dom';
// 下方簡單建立兩個組件
const Introd = () => (<p>這裡是理念介紹</p>);
const His = () => (<p>這裡是歷史沿革</p>);
const NoPage = () => (<p>頁面維護中</p>);

// const AboutContent = (props:{match:any}) => {
//   // 印出目前match的狀態
//   const { match } = props;
//   console.log(match);
//   let content;
//   // 從match的params將參數type取出來，判斷是歷史沿革還是理念介紹
//   if (match.params.type === 'introd') content = '這裡是理念介紹';
//   else content = '這裡是歷史沿革';

//   // 把判斷後的字放進<p>中回傳
//   return (<p>{content}</p>);
// };
const About = (props:{match:any}) => {
  const { match } = props;
  console.log(match);
  return (
    <div>
      <h2>關於我們選單</h2>
      <ul>
        {/* url是match的屬性之一，會回傳網址列的路徑 */}
        <li><Link to={`${match.url}/introd`}>理念介紹</Link></li>
        <li><Link to={`${match.url}/his`}>歷史沿革</Link></li>
        <li><Link to={`${match.url}/story`}>品牌故事</Link></li>
      </ul>
      {/* path也是match的屬性之一，會回傳透過哪個Route進入的path屬性 */}
      {/* <Route exact path={`${match.path}/:type`} component={AboutContent} /> */}
      <Switch>
        <Route exact path={`${match.path}/introd`} component={Introd} />
        <Route path={`${match.path}/his`} component={His} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
};


export default About;
