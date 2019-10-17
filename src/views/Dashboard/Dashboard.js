import React, { Component } from 'react';
import { Col, Row, Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import Widget from './Widget'
import DataTable from './Datatable'
import axios from 'axios'

class Dashboard extends Component {
  
  state = {
    items: []
  }

  componentDidMount(){
    this.getItems()
  }

  getItems(){
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/ts/latest')
      .then(res => {
        const items = res.data
        this.setState({ items })
      })
  }

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
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> ORDENES RECIENTES
              </CardHeader>
              <CardBody>
                <DataTable items={this.state.items} />
              </CardBody>
            </Card>
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
