import React, { useState, useEffect } from 'react'
import { Input, Form, Label, FormGroup, Button } from 'reactstrap';

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
        alert(`the form is submmited with the data: ${data.sDate} and ${data.eDate}`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="sDate">Fecha desde</Label>
                <Input type="date" name="sDate" id="date_start" value={data.sDate} onChange={handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="eDate">Fecha hasta</Label>
                <Input type="date" name="eDate" id="date_end" value={data.eDate} onChange={handleChange}></Input>
            </FormGroup>
            <Button color="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default TsReportForm
