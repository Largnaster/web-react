import React from "react";
import { withRouter } from "react-router-dom";

import "../css/navbar.css";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">
          NASA astronomical images
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-moon" : "far fa-moon"}
          ></i>
          Dark Mode
        </div>

      </nav>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;
