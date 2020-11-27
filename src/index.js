import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./js/theme";
import { GlobalStyles } from "./js/global";

// Importar estilo
import "./indexP3.css";

// Importar componentes
import Nav from "./componentes/navbar.js";
import Search from "./componentes/searchbar.js";
import Content from "./componentes/content.js";

// Generar la pagina con los componentes
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleTheme = (theme, clicked) => {
    console.log(theme + " ______ " + clicked);
    let newState = this.state;
    newState = {
      theme: theme,
      clicked: clicked
    }
    this.setState(newState);
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <BrowserRouter>
            <div>
              <Nav sendTheme={this.toggleTheme.bind(this)} />
            </div>
            <div className="container">
              <Search />
              <Content />
              <br />
            </div>
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
