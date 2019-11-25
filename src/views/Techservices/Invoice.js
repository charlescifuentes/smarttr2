import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Input, FormGroup, Label } from 'reactstrap'
import API from '../../API'
import logo from '../../assets/img/logo_time.jpg'

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {company: []};
    }

    componentDidMount() {
        setTimeout(() => {
            window.print();
          }, 1000)

          this.getCompanyInfo()
    }

    handlePrint = () => {
        window.print();
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    async getCompanyInfo() { 
        await API.get('config')
            .then(res => {
                console.log(res.data);
                const company = res.data;
                this.setState({ company });
            })
    }

    render() {
        const { ts_id, ts_date_start, ts_watch_brand, ts_watch_model, ws_name, ts_issue_desc, ts_diagnosis, ts_observation, status_name, ts_date_end, user_name, customer, ts_total, ts_payment, ts_balance } = this.props.location.state.items

        const company = this.state.company.map((item) =>
            <div key={item.config_id}>
                <h3>{item.company_name}</h3>
                <div>NIT: {item.company_nit}</div>
                <div>{item.company_address} - {item.company_phone}</div>
                <div>Tuluá - Valle</div>
                <div>{item.company_email}</div>
            </div>
        );
        
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
                                        {company}
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="6" md="6">
                                        <h3>CLIENTE</h3>
                                        <div>Nombres: {customer.customer_firstname + " " + customer.customer_lastname}</div>
                                        <div>Documento: {customer.customer_nit}</div>
                                        <div>Dirección: {customer.customer_address}</div>
                                        <div>Teléfono: {customer.customer_phone}</div>
                                        <div>Ciudad: {customer.customer_city}</div>
                                    </Col>
                                    <Col xs="12" sm="6" md="6" className="text-right">
                                        <h3>ORDEN DE SERVICIO # {ts_id}</h3>
                                        <div>Fecha: {ts_date_start}</div>
                                        <small>Atendido por: {user_name}</small>
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
                                            <Input type="text" name="ts_store_sender" id="ts_store_sender" value={ws_name} readOnly />
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
                                <Row form className="d-flex align-items-center">
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="ts_total">Valor</Label>
                                            <Input type="ts_total" name="ts_total" id="ts_total" value={ts_total} readOnly/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="ts_payment">Abono</Label>
                                            <Input type="ts_payment" name="ts_payment" id="ts_payment" value={ts_payment} readOnly />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="ts_balance">Saldo</Label>
                                            <Input type="ts_balance" name="ts_balance" id="ts_balance" value={ts_balance} readOnly/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <div className="text-center"><p>"Plazo para reclamar el artículo reparado 2 Meses"</p></div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Invoice
