import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'

class Invoice extends Component {

    render() {
        const { ts_id, customer_firstname } = this.props.location.state.items
        console.log(this.props.location.state.items);
        
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> IMPRIMIR ORDEN DE SERVICIO
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="6" md="6">
                                        <div>Logo Empresa</div>
                                    </Col>
                                    <Col xs="12" sm="6" md="6" className="d-flex justify-content-end">
                                        <h2>TALLER TIME</h2>
                                        <div>Carrera 25 # 31-32</div>
                                        <div>321 345 4565</div>
                                        <div>Tuluá, Valle</div>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col xs="12" sm="6" md="6">
                                        <h1>CLIENTE</h1>
                                        <div>{customer_firstname}</div>
                                        <div>321 345 4565</div>
                                        <div>Tuluá, Valle</div>
                                    </Col>
                                    <Col xs="12" sm="6" md="6">
                                        <h2>#: {ts_id}</h2>
                                        <div>Fecha: </div>
                                        <div>321 345 4565</div>
                                        <div>Tuluá, Valle</div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <h2>Footer</h2>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Invoice
