// @flow
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Block from './tic-tac-toe';
// class About extends React.Component {
//   render() {
//     return <p>這邊是關於我們</p>;
//   }
// }
// export { About };


// 下方簡單建立兩個組件
const TicTacTio = () => (<Block />);
const Gomoku = () => (<p>這裡是五子棋</p>);
const G2048 = () => (<p>這裡是2048</p>);

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
const MyWorks = (props:{match:any}) => {
  const { match } = props;
  console.log(match);
  return (
    <div>
      <h2>關於遊戲</h2>
      <ul>
        {/* url是match的屬性之一，會回傳網址列的路徑 */}
        <li><Link to={`${match.url}/TicTacTio`}>井字遊戲</Link></li>
        <li><Link to={`${match.url}/Gomoku`}>五子棋</Link></li>
        <li><Link to={`${match.url}/G2048`}>2048</Link></li>
      </ul>
      {/* path也是match的屬性之一，會回傳透過哪個Route進入的path屬性 */}
      {/* <Route exact path={`${match.path}/:type`} component={AboutContent} /> */}
      <Switch>
        <Route exact path={`${match.path}/TicTacTio`} component={TicTacTio} />
        <Route exact path={`${match.path}/Gomoku`} component={Gomoku} />
        <Route exact path={`${match.path}/G2048`} component={G2048} />
      </Switch>
    </div>
  );
};


export default MyWorks;
