import React, { useState } from 'react';
import { Col, Card, Row, CardHeader, CardBody, CardFooter } from 'reactstrap';

const Sales = () => {

    const [data, setData] = useState()
    const [tsData, setTsData] = useState([])  
    const [showTable, setShowTable] = useState(false)
    
    return (
        <div className="animated fadeIn h-100">
            <Row>
                <Col>
                    <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> VENTAS
                    </CardHeader>
                    <CardBody>
                        <p>This is the sales area</p>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Sales