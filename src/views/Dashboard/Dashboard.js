import React, { Component } from 'react';
import { Col, Row, Jumbotron } from 'reactstrap';
import Widget from './Widget'

class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <h1><i className="fa fa-tasks"> ORDENES POR ESTADO</i></h1>
        <Row>
          <Col sm="12" md="4">
            <Widget icon="icon-speedometer" color="info" header="87.500" value="25" invert>En Revisión</Widget>
          </Col>
          <Col sm="12" md="4">
            <Widget icon="icon-wrench" color="success" header="385" value="25" invert>En Reparación</Widget>
          </Col>
          <Col sm="12" md="4">
            <Widget icon="icon-flag" color="primary" header="1238" value="25" invert>Finalizado</Widget>
          </Col>
        </Row>
        <Jumbotron>
          <h1 className="display-3">SMART TR</h1>
          <p className="lead">Sistema administrativo para Taller de Relojes</p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;
