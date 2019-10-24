import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import TsByStatus from './TsByStatus'
import LatestTs from './LatestTs'
import LatestCustomers from './LatestCustomers'
import API from '../../API'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestTs: [],
      tsByStatus: [],
      latestCustomers: []
    };
  }

  componentDidMount() {
    this.getLatestTs()
    this.getTsByStatus()
    this.getLatestCustomers()
  }

  getLatestTs() {
    API.get('ts/latest')
      .then(res => {
        const latestTs = res.data
        this.setState({ latestTs })
      })
  }

  getTsByStatus() {
    API.get('ts/bystatus')
      .then(res => {
        const tsByStatus = res.data
        this.setState({ tsByStatus })
      })
  }

  getLatestCustomers() {
    API.get('customers/latest')
      .then(res => {
        const latestCustomers = res.data
        this.setState({ latestCustomers })
      })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const latestTs = this.state.latestTs 
    const tsByStatus = this.state.tsByStatus  
    const latestCustomers = this.state.latestCustomers
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>ORDENES POR ESTADO</strong>
              </CardHeader>
              <CardBody>
                {Array.isArray(tsByStatus) ? (
                  <TsByStatus tsByStatus={tsByStatus} />
                ) : (
                  <p>{tsByStatus}</p>
                )}
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>CLIENTES RECIENTES</strong>
              </CardHeader>
              <CardBody>
                {Array.isArray(latestCustomers) ? (
                  <LatestCustomers latestCustomers={latestCustomers} />
                ) : (
                  <p>{latestCustomers}</p>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>ÚLTIMAS ORDENES DE SERVICIO</strong>
              </CardHeader>
              <CardBody>
                {Array.isArray(latestTs) ? (
                  <LatestTs latestTs={latestTs} />
                ) : (
                  <p>{latestTs}</p>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
