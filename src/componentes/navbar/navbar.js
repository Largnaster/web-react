import React from "react";
import { withRouter } from "react-router-dom";

import "../../css/navbar.css";
import { Menu } from "./menuItems";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">
          Nice<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menu.map((item, index) => {
            return (
              <li key={item}>
                <a className={item.class} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;
