import React from "react";
import { withRouter } from "react-router-dom";

import "../css/navbar.css";

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = (theme) => {
    this.props.sendTheme(theme, this.state.clicked);
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">
          NASA astronomical images
        </h1>
        <div className="menu-icon" onClick={() => this.handleClick(this.state.clicked ? 'light' : 'dark')}>
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
