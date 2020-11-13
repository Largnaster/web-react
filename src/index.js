import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom";
import "./indexP3.css";

import Nav from './componentes/navbar/navbar.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
