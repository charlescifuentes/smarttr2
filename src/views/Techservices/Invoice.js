import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'

class Invoice extends Component {

    render() {
        const { ts_id, customer_firstname } = this.props.location.state.items
        console.log(this.props.location.state.items);
        
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> IMPRIMIR ORDEN DE SERVICIO
                    </CardHeader>
                    <CardBody>
                        <h1>{ts_id}</h1>
                        <h2>{customer_firstname}</h2>
                    </CardBody>
                    <CardFooter>
                        
                        
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default Invoice
