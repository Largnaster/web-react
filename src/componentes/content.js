import React from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "../css/content.css";
import '../css/bootstrap.css'

const API = "https://api.nasa.gov/planetary/apod?api_key=flIXafeoeNbV5QQYmFKX17scsey1ON8mp20Nfays";
const QUERY = "&count=5";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
      readMore: false,
      showModal: false,
      hit: [],
      clicked: false,
      search: ''
    };
    this.abrirModal = this.abrirModal.bind(this);
    this.cerrarModal = this.cerrarModal.bind(this);
  }

  cerrarModal(){
    this.setState({ showModal: false });
  }

  abrirModal(date) {
    // var objeto = JSON.stringify(this.state.hits.find((hit) => hit.date === date));
    // this.setState({hit: objeto});
    var Q = `&date=${date}`;
    fetch(API+Q).then((response) => {
      if (response.ok){
        return response.json();
      }else{
        throw new Error("Algo salio mal.....");
      }
    }).then((data) => {
      this.setState({hit: data});
      console.log(data);
    }).catch((error) => this.setState({error}));
    console.log("Clicked " + this.state.hit);
    this.setState({ showModal: true });
  }

  truncateString(str, num){
    // Para cortar el texto que es generado
    if(str.length <= num){
      return str;
    }
    return str.slice(0, num) + '...';
  }
  // const imagenes = []; https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5
  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + QUERY)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Algo salio mal.....");
        }
      })
      .then((data) => {
        this.setState({ hits: data, isLoading: false });
        console.log(data);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  render() {
    const { hits, isLoading, error, showModal } = this.state;

    if (error) {
      return <h1 className="error">{error.message}</h1>;
    }

    let imagenes = hits;
    return (
      <>
        <div className="content">
          <h2 className={isLoading ? "loading-text" : "loading"}>
            Loading....
          </h2>
          {imagenes.map((hit) => (
            <div className={isLoading ? "loading" : "card"} key={hit.date}>
              <img src={hit.url} alt={hit.title} style={{ width: "100%" }} />
              <div className="card-container">
                <h4>
                  <b>{hit.title}</b>
                </h4>
                <p className="card-container-text" >
                  {this.truncateString(hit.explanation, 100)}
                </p>
              </div>
              <p>
                <button onClick={this.abrirModal.bind(this, hit.date)}>
                  LEER
                </button>
              </p>
            </div>
          ))}
        </div>
            <Modal size="lg" show={showModal} onHide={this.cerrarModal} className="modal" centered>
        <div className="modal-dialog">
          <div className="modal-content" >
              <Modal.Header className="modal-header">
              <Modal.Title className="modal.title">{this.state.hit.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <img className="img-responsive" src={this.state.hit.url} alt={this.state.hit.title} />
                <div className="card-container">
                  <p>{this.state.hit.explanation}</p>
                </div>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <button className="btn" onClick={this.cerrarModal.bind(this)}>Cerrar</button>
              </Modal.Footer>
          </div>
        </div>
            </Modal>
      </>
    );
  }
}

Content = withRouter(Content);
export default Content;
