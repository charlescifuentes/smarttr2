import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios'

class AddEditForm extends Component {
  state = {
    ts_id: '',
    ts_date_start: '',
    customer_id: '',
    user_id: '',
    ts_watch_brand: '',
    ts_watch_model: '',
    ts_store_sender: '',
    ts_issue_desc: '',
    ts_diagnosis: '',
    ts_observation: '',
    ts_date_end: '',
    ts_status: '',
    customer_firstname: '',
    customer_lastname: '',
    status_name: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  getCustomer = () => {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' + this.state.customer_id)
        .then(res => {
          const customer = res.data
          this.setState({ customer_firstname: customer })
        })
  }

  getStatus = () => {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/status/' + this.state.ts_status)
        .then(res => {
          const status = res.data
          this.setState({ status_name: status })
        })
  }

  submitFormAdd = e => {
    e.preventDefault()
    this.getCustomer()
    this.getStatus()
    const item = {
      ts_date_start: this.state.ts_date_start,
      customer_id: this.state.customer_id,
      user_id: "2",
      ts_watch_brand: this.state.ts_watch_brand,
      ts_watch_model: this.state.ts_watch_model,
      ts_store_sender: this.state.ts_store_sender,
      ts_issue_desc: this.state.ts_issue_desc,
      ts_diagnosis: this.state.ts_diagnosis,
      ts_observation: this.state.ts_observation,
      ts_date_end: this.state.ts_date_end,
      ts_status: this.state.ts_status 
    };
    
    axios.post('http://colombiaweb.co/smarttr/apirest/public/api/v1/ts', item)
    .then(res => {
      const newItem = {
        ts_id: res.data, 
        ts_date_start: this.state.ts_date_start,
        customer_id: this.state.customer_id,
        user_id: "2",
        ts_watch_brand: this.state.ts_watch_brand,
        ts_watch_model: this.state.ts_watch_model,
        ts_store_sender: this.state.ts_store_sender,
        ts_issue_desc: this.state.ts_issue_desc,
        ts_diagnosis: this.state.ts_diagnosis,
        ts_observation: this.state.ts_observation,
        ts_date_end: this.state.ts_date_end,
        ts_status: this.state.ts_status,
        customer_firstname: this.state.customer_firstname,
        customer_lastname: this.state.customer_lastname,
        status_name: this.state.status_name
      };
      console.log(newItem);
      this.props.addItemToState(newItem)
      this.props.toggle()
    })
  }

  submitFormEdit = e => {
    e.preventDefault()
    this.getCustomer()
    this.getStatus()
    const item = {
      ts_date_start: this.state.ts_date_start,
      customer_id: this.state.customer_id,
      user_id: this.state.user_id,
      ts_watch_brand: this.state.ts_watch_brand,
      ts_watch_model: this.state.ts_watch_model,
      ts_store_sender: this.state.ts_store_sender,
      ts_issue_desc: this.state.ts_issue_desc,
      ts_diagnosis: this.state.ts_diagnosis,
      ts_observation: this.state.ts_observation,
      ts_date_end: this.state.ts_date_end,
      ts_status: this.state.ts_status
    };

    axios.put(`http://colombiaweb.co/smarttr/apirest/public/api/v1/ts/${this.state.ts_id}`, item )
      .then(res => {
        console.log(res.data);
        console.log(this.state);
        
        this.props.updateState(this.state)
        this.props.toggle()
      })
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { ts_id, ts_date_start, customer_id, user_id, ts_watch_brand, ts_watch_model, ts_store_sender, ts_issue_desc, ts_diagnosis, ts_observation, ts_date_end, ts_status, customer_firstname, customer_lastname, status_name } = this.props.item
      this.setState({ ts_id, ts_date_start, customer_id, user_id, ts_watch_brand, ts_watch_model, ts_store_sender, ts_issue_desc, ts_diagnosis, ts_observation, ts_date_end, ts_status, customer_firstname, customer_lastname, status_name })
    }
  }

  render() {
    console.log(this.state);
            
    const customers = this.props.customers.map(customer => {
      return (
        <option key={customer.customer_id} value={customer.customer_id}>{customer.customer_firstname + " " + customer.customer_lastname}</option>
      )
    })

    const status = this.props.status.map(st => {
      return (
        <option key={st.status_id} value={st.status_id}>{st.status_name}</option>
      )
    })
    
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <Card>
          <CardBody>
              <Row form className="d-flex align-items-center">
                <Col md={7}>
                  <h1>ORDEN DE SERVICIO</h1>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="ts_id">Orden No.</Label>
                    <Input type="text" name="ts_id" id="ts_id" onChange={this.onChange} value={this.state.ts_id === null ? '' : this.state.ts_id} readOnly />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="ts_date_start">Fecha Creación</Label>
                    <Input type="date" name="ts_date_start" id="ts_date_start" onChange={this.onChange} value={this.state.ts_date_start === null ? '' : this.state.ts_date_start} />
                  </FormGroup>
                </Col>
              </Row>
              <Row form className="d-flex align-items-center">
                <Col md={6}>
                  <FormGroup>
                    <Input type="select" name="customer_id" id="customer_id" onChange={this.onChange}>
                      <option value={this.state.customer_id}>{this.state.customer_firstname +" " + this.state.customer_lastname}</option>
                      {customers}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Button color="primary">Editar</Button>
                    {' '}
                    <Button color="primary">Crear</Button>
                  </FormGroup>
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
                    <Input type="text" name="ts_watch_brand" id="ts_watch_brand" onChange={this.onChange} value={this.state.ts_watch_brand === null ? '' : this.state.ts_watch_brand} />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="ts_watch_model">Modelo</Label>
                    <Input type="text" name="ts_watch_model" id="ts_watch_model" onChange={this.onChange} value={this.state.ts_watch_model === null ? '' : this.state.ts_watch_model} />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="ts_store_sender">Taller</Label>
                    <Input type="text" name="ts_store_sender" id="ts_store_sender" onChange={this.onChange} value={this.state.ts_store_sender === null ? '' : this.state.ts_store_sender} />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="ts_issue_desc">Problema Presentado</Label>
                <Input type="textarea" name="ts_issue_desc" id="ts_issue_desc" onChange={this.onChange} value={this.state.ts_issue_desc === null ? '' : this.state.ts_issue_desc} />
              </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><h3>DIAGNÓSTICO Y OBSERVACIONES</h3></CardHeader>
          <CardBody>
            <FormGroup>
              <Label for="ts_diagnosis">Diagnóstico técnico</Label>
              <Input type="textarea" name="ts_diagnosis" id="ts_diagnosis" onChange={this.onChange} value={this.state.ts_diagnosis === null ? '' : this.state.ts_diagnosis} />
            </FormGroup>
            <FormGroup>
              <Label for="ts_observation">Observaciones Finales</Label>
              <Input type="textarea" name="ts_observation" id="ts_observation" onChange={this.onChange} value={this.state.ts_observation === null ? '' : this.state.ts_observation} />
            </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><h3>ESTADO Y FECHA DE ENTREGA</h3></CardHeader>
          <CardBody>
            <Row form className="d-flex align-items-center">
              <Col md={4}>
                <FormGroup>
                  <Label for="ts_status">Estado</Label>
                  <Input type="select" name="ts_status" id="ts_status" onChange={this.onChange}>
                      <option value={this.state.status_id}>{this.state.status_name}</option>
                      {status}
                    </Input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="ts_date_end">Fecha Entrega</Label>
                  <Input type="date" name="ts_date_end" id="ts_date_end" onChange={this.onChange} value={this.state.ts_date_end === null ? '' : this.state.ts_date_end} />
                </FormGroup>
              </Col>
              <Col md={4}>
                <Button color="primary float-right">Enviar</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Form>
    );
  }
}

export default AddEditForm