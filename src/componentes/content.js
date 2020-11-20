import React from "react";
import { withRouter } from "react-router-dom";
import prueba from "../images/prueba.jpg";

import "../css/content.css";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null,
    };
  }
  // const imagenes = []; https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5
  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
      .then((response) => response.json())
      .then((data) => {
          this.setState({data});
          console.log(data);
      });
  }
  render() {
    return (
      <div className="content">
        <div className="card">
          <img src={prueba} style={{ width: "100%" }} alt="Imagen de prueba" />
          <div className="card-container">
            <h4>
              <b>Titulo</b>
            </h4>
            <p>Descripcion</p>
          </div>
        </div>
      </div>
    );
  }
}

Content = withRouter(Content);
export default Content;
