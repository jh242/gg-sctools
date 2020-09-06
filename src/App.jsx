/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';

import CommodityView from './components/CommodityView';
import TradeportView from './components/TradeportView';

import './css/App.css';
import bg from './assets/bg.mp4';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Grand Guard SC Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <Nav.Link href="#commodities">Commodities</Nav.Link>
            <Nav.Link href="#tradeports">Tradeports</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="home" id="home">
        <video style={{ width: '100vw' }} autoPlay loop>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <CommodityView />
      <TradeportView />
    </div>
  );
}

export default App;
