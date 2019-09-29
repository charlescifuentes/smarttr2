import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import logo from '../../assets/img/logo_time.jpg'

class Invoice extends Component {

    handlePrint = () => {
        window.print();
    }

    componentDidMount() {
        setTimeout(() => {
            window.print();
          }, 1000)
    }

    render() {
        const { ts_id, customer_firstname } = this.props.location.state.items
        console.log(this.props.location.state.items);
        
        return (
            <div className="animated fadeIn">
                <Container>
                    <div className="invoice-header py-3 hidden-print">
                        <Row>
                            <Col>
                                <Button color="primary" onClick={this.handlePrint}>Imprimir</Button>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xs="12" sm="6" md="6">
                            <img src={logo} alt="Logo" width="200px" height="100%" />
                        </Col>
                        <Col xs="12" sm="6" md="6" className="text-right">
                            <h2>TALLER TIME</h2>
                            <div>Carrera 25 # 31-32</div>
                            <div>321 345 4565</div>
                            <div>Tuluá, Valle</div>
                            <div>tallertime@gmail.com</div>
                            <div>NIT: 79.234.435-6</div>
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
                        <Col xs="12" sm="6" md="6" className="text-right">
                            <h2>ORDEN DE SERVICIO #: {ts_id}</h2>
                            <div>Fecha: </div>
                            <div>321 345 4565</div>
                            <div>Tuluá, Valle</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Invoice
