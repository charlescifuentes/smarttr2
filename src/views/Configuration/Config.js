import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';

class Config extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>CONFIGURACIÓN NEGOCIO</CardHeader>
              <CardBody>
               
              </CardBody>
              <CardFooter>
                <Button color="success">Enviar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>  
      </div>
    )
  }
}

export default Config
