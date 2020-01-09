import React, { useState, useEffect } from 'react'
import { Input, Form, Label, FormGroup, Button, Col } from 'reactstrap';

const TsReportForm = props => {
    const [data, setData] = useState(props.dates)

    useEffect(() => {
        setData(props.dates)
    },[props])

    const handleChange = e => {
        e.persist();
        setData({...data, [e.target.name]: e.target.value });
    } 

    const handleSubmit = e => {
        e.preventDefault();
        props.getTSReportByDates(data.sDate, data.eDate)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="sDate" sm={4}>Fecha desde</Label>
                <Col sm={8}>
                    <Input type="date" name="sDate" id="sDate" value={data.sDate} onChange={handleChange} required></Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="eDate" sm={4}>Fecha desde</Label>
                <Col sm={8}>
                    <Input type="date" name="eDate" id="eDate" value={data.eDate} onChange={handleChange} required></Input>
                </Col>
            </FormGroup>
            <Button color="primary" type="submit">Enviar</Button>
        </Form>
    )
}

export default TsReportForm
