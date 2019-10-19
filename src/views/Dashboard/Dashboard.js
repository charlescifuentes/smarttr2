import React, { Component } from 'react';
import { Col, Row, Jumbotron, Card, CardHeader, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import TsByStatus from './TsByStatus'
import LatestTs from './LatestTs'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestTs: [],
      tsByStatus: [],
      test: 'hola'
    };
  }

  componentDidMount() {
    this.getLatestTs()
    this.getTsByStatus()
  }

  getLatestTs() {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/ts/latest')
      .then(res => {
        const latestTs = res.data
        this.setState({ latestTs })
      })
  }

  getTsByStatus() {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/ts/bystatus')
      .then(res => {
        const tsByStatus = res.data
        this.setState({ tsByStatus })
      })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const latestTs = this.state.latestTs   
    console.log(latestTs);
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>ORDENES POR ESTADO</strong>
              </CardHeader>
              <CardBody>
                <TsByStatus tsByStatus={this.state.tsByStatus} />
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
                {latestTs ? (
                  <LatestTs latestTs={this.state.latestTs} />
                ) : (
                  <p>Sin datos</p>
                )}
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
