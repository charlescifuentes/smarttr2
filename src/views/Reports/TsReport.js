import React, { useState } from 'react';
import TsReportForm from './TsReportForm'
import TsReportTable from './TsReportTable'
import API from '../../API'
import { Col, Card, Row, CardHeader, CardBody } from 'reactstrap';

const TsReport = () => {
    const initialFormState = {sDate: '', eDate: ''}

    const [data, setData] = useState(initialFormState)
    const [tsData, setTsData] = useState([])  
    const [showTable, setShowTable] = useState(false)

    const getTSReportByDates = async (sDate, eDate) => {
        const result = await API.get(`reports/${sDate}/${eDate}`)
        setTsData(result.data)
        setData({ sDate: sDate, eDate: eDate })
        setShowTable(true)
    }
    
    return (
        <div className="animated fadeIn h-100">
                <Row className="align-items-center h-100">
                    <Col md="4" className="mx-auto">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> REPORTE DE ORDENES DE SERVICIO
                            </CardHeader>
                            <CardBody>
                                <TsReportForm dates={data} getTSReportByDates={getTSReportByDates} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {showTable &&
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i> ORDENES DE SERVICIO DEL {data.sDate} al {data.eDate} 
                                </CardHeader>
                                <CardBody>
                                    <TsReportTable tsData ={tsData} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                }
        </div>
    );
}

export default TsReport