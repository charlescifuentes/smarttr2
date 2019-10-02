import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Input, FormGroup, Label } from 'reactstrap'
import logo from '../../assets/img/logo_time.jpg'

class Invoice extends Component {

    handlePrint = () => {
        window.print();
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        setTimeout(() => {
            window.print();
          }, 1000)
    }

    render() {
        const { ts_id, ts_date_start, ts_watch_brand, ts_watch_model, ts_store_sender, ts_issue_desc, ts_diagnosis, ts_observation, status_name, ts_date_end, user_id, customer } = this.props.location.state.items
        console.log(this.props.location.state.items);
        
        return (
            <div className="animated fadeIn">
                <Container>
                    <div className="invoice-header-buttons p-3 my-3 hidden-print shadow rounded">
                        <Row>
                            <Col>
                                <Button color="primary" onClick={this.handleGoBack}>Nuevo</Button>
                                {' '}
                                <Button color="primary" className="float-right" onClick={this.handlePrint}>Imprimir</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="invoice-template">
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col xs="12" sm="6" md="6">
                                        <img src={logo} alt="Logo" width="60%" />
                                    </Col>
                                    <Col xs="12" sm="6" md="6" className="text-right">
                                        <h2>TALLER TIME</h2>
                                        <div>NIT: 79.234.435-6</div>
                                        <div>Carrera 25 # 31-32 - 321 345 4565</div>
                                        <div>Tuluá, Valle</div>
                                        <div>tallertime@gmail.com</div>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="6" md="6">
                                        <h1>CLIENTE</h1>
                                        <div>Nombres: {customer.customer_firstname + " " + customer.customer_lastname}</div>
                                        <div>Documento: {customer.customer_nit}</div>
                                        <div>Dirección: {customer.customer_address}</div>
                                        <div>Teléfono: {customer.customer_phone}</div>
                                        <div>Ciudad: {customer.customer_city}</div>
                                    </Col>
                                    <Col xs="12" sm="6" md="6" className="text-right">
                                        <h2>ORDEN DE SERVICIO # {ts_id}</h2>
                                        <div>Fecha: {ts_date_start}</div>
                                        <div>Atendido por: {user_id}</div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><h3>DATOS DEL RELOJ</h3></CardHeader>
                            <CardBody>
                                <Row form className="d-flex align-items-center">
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="ts_watch_brand">Marca</Label>
                                            <Input type="text" name="ts_watch_brand" id="ts_watch_brand" value={ts_watch_brand} readOnly />
                                        </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="ts_watch_model">Modelo</Label>
                                            <Input type="text" name="ts_watch_model" id="ts_watch_model" value={ts_watch_model} readOnly />
                                        </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="ts_store_sender">Taller</Label>
                                            <Input type="text" name="ts_store_sender" id="ts_store_sender" value={ts_store_sender} readOnly />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="ts_issue_desc">Problema Presentado</Label>
                                    <Input type="textarea" name="ts_issue_desc" id="ts_issue_desc" value={ts_issue_desc} readOnly />
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><h3>DIAGNÓSTICO Y OBSERVACIONES</h3></CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label for="ts_diagnosis">Diagnóstico técnico</Label>
                                    <Input type="textarea" name="ts_diagnosis" id="ts_diagnosis" value={ts_diagnosis} readOnly />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="ts_observation">Observaciones Finales</Label>
                                    <Input type="textarea" name="ts_observation" id="ts_observation" value={ts_observation} readOnly />
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><h3>ESTADO Y FECHA DE ENTREGA</h3></CardHeader>
                            <CardBody>
                                <Row form className="d-flex align-items-center">
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="ts_status">Estado</Label>
                                            <Input type="text" name="ts_status" id="ts_status" value={status_name} readOnly/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="ts_date_end">Fecha Entrega</Label>
                                            <Input type="date" name="ts_date_end" id="ts_date_end" value={ts_date_end} readOnly/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Invoice
