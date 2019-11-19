import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import TsByStatus from './TsByStatus'
import TsByWorkshops from './TsByWorkshops'
import LatestTs from './LatestTs'
import API from '../../API'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestTs: [],
      tsByStatus: [],
      tsByWorkshops: []
    };
  }

  componentDidMount() {
    this.getLatestTs()
    this.getTsByStatus()
    this.getTsByWorkshops();
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

  getTsByWorkshops() {
    API.get('ts/byworkshops')
      .then(res => {
        const tsByWorkshops = res.data
        this.setState({ tsByWorkshops })
      })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    console.log(this.state);
    
    const { latestTs, tsByStatus, tsByWorkshops } = this.state 
    
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
                <i className="fa fa-align-justify"></i><strong>ORDENES POR TALLER</strong>
              </CardHeader>
              <CardBody>
                {Array.isArray(tsByWorkshops) ? (
                  <TsByWorkshops tsByWorkshops={tsByWorkshops} />
                ) : (
                  <p>{tsByWorkshops}</p>
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
