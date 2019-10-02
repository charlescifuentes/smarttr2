import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';

class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Jumbotron>
          <h1 className="display-3">Aplicación de prueba</h1>
          <p className="lead">Esta es una aplicación de prueba utilizando el Core UI Admin Template y React JS</p>
          <hr className="my-2" />
          <p>Vamos a realizar consultas Get, Post, Put y Delete</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;
