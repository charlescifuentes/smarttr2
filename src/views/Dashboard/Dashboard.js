import React, { Component } from 'react';
import { Col, Row, Jumbotron, Card, CardHeader, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import TsByStatus from './TsByStatus'
import LatestTs from './LatestTs'

class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    console.log(this.state);
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>ORDENES POR ESTADO</strong>
              </CardHeader>
              <CardBody>
                <TsByStatus />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>CLIENTES RECIENTES</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill
                                                                                            color="warning">1</Badge></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>ÚLTIMAS RECIENTES</strong>
              </CardHeader>
              <CardBody>
                <LatestTs />
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
