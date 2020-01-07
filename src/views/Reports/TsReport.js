import React, { useState } from 'react';
import TsForm from './TsForm'
import API from '../../API'
import { Col, Card, Row, CardHeader, CardBody } from 'reactstrap';

const TsReport = () => {
    const initialFormState = {sDate: '', eDate: ''}

    const [data, setData] = useState(initialFormState)
    
    return (
        <div className="animated fadeIn d-flex justify-content-center">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> REPORTE DE ORDENES DE SERVICIO
                            </CardHeader>
                            <CardBody>
                                <TsForm dates={data} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <p>{data.date_start}</p>
        </div>
    );
}

export default TsReport