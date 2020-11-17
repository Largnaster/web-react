import React from "react";
import { withRouter } from "react-router-dom";
import prueba from '../images/prueba.jpg'

import '../css/content.css'

class Content extends React.Component {
    render() {
        return (
            <div className="content" >
                <div className="card" >
                    <img src={prueba} style={{width: "100%" }} />
                    <div className='card-container' >
                        <h4><b>Titulo</b></h4>
                        <p>Descripcion</p>
                    </div>
                </div>
            </div>
        );
    }
}

Content = withRouter(Content);
export default Content;