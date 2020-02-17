// @flow
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Top = (props:{match:any}) => {
  const { match } = props;
  console.log(match);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/" role="button">尛馬工作室</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="我的作品" id="collasible-nav-dropdown">
            {/* <Link to="/myWorks/TicTacTio" class="dropdown-toggle nav-link">井字遊戲</Link> */}
            <Link to="/myWorks2/TicTacTio" className="dropdown-item">井字遊戲</Link>
            <Link to="/myWorks2/Gomoku" className="dropdown-item">五子棋</Link>
            <Link to="/myWorks2/G2048" className="dropdown-item">2048</Link>
            {/* <Link aria-haspopup="true" aria-expanded="false" to={`${match.url}/Gomoku`} class="dropdown-toggle nav-link">五子棋</Link>
            <Link aria-haspopup="true" aria-expanded="false" to={`${match.url}/G2048`} class="dropdown-toggle nav-link">2048</Link> */}
            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            {/* <MyWorks2 /> */}
          </NavDropdown>
          <Link className="nav-link" to="/myWorks" role="button">我的作品</Link>
          <Link className="nav-link" to="/test">測試元件</Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">fb</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
    Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  // <nav style={style}>
  //   <ul>
  //     <li>fb</li>
  //     <li>phone</li>
  //   </ul>
  // </nav>
};

export default Top;
