import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import API from '../../API'
import Select from 'react-select'
import CustomerAdd from './CustomerAdd';
import { withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class AddEditForm extends Component {
  state = {
    ts_id: '',
    ts_date_start: '',
    customer_id: '',
    user_id: '',
    user_name: '',
    ts_watch_brand: '',
    ts_watch_model: '',
    ws_id: '',
    ws_name: '',
    ts_issue_desc: '',
    ts_diagnosis: '',
    ts_observation: '',
    ts_date_end: '',
    ts_status: '',
    ts_total: 0,
    ts_payment: 0,
    ts_balance: 0,
    customer_name: '',
    status_name: '',
    selectedOption: null,
    isDisabled: false,
    customer: []
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  setBalance = () => {
    let total = this.state.ts_total
    let payment = this.state.ts_payment 
    let balance = total - payment
    this.setState({ts_balance: balance})
  }

  handleChange = selectedOption => {
    this.setState({ 
      selectedOption,
      customer_id: selectedOption.value,
      customer_name: selectedOption.label,
      isDisabled: true
     });
  };

  getCustomer = () => {
    API.get('customers/' + this.state.customer_id)
        .then(res => {
          console.log(res.data);
          const customer = res.data
          this.setState({ customer_name: customer.customer_firstname +' '+ customer.customer_lastname, customer: customer })
        })
  }

  getStatus = () => {
    API.get('status/' + this.state.ts_status)
        .then(res => {
          console.log(res.data)
          const status = res.data
          this.setState({ status_name: status })
        })
  }

  getWorkshop = () => {
    API.get('workshops/' + this.state.ws_id)
        .then(res => {
          console.log(res.data);
          const workshop = res.data[0].ws_name
          this.setState({ ws_name: workshop })
        })
  }

  getCurrentUser = () => {
    let session = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({ user_id: session.user_id, user_name: session.user_firstname +' '+session.user_lastname })
  }

  onEdit = () => {
    this.setState({ isDisabled: false })
  }

  printOrder = () => {
    confirmAlert({
      title: 'Imprimir Orden',
      message: 'Desea imprimir?.',
      buttons: [
        {
          label: 'Si',
          onClick: () => {this.props.history.push({
            pathname : '/Invoice',
            state :{ items: this.state }
            } 
          );
        }},
        {
          label: 'No',
          onClick: () => console.log("No se va a imprimir")
        }
      ]
    });
  }

  addNewCustomer = (newItem) => {
    this.setState({ selectedOption: { value: newItem.customer_id, label: newItem.customer_firstname +" "+ newItem.customer_lastname }, customer_id: newItem.customer_id })
    this.props.getCustomers()
  }

  submitFormAdd = e => {
    e.preventDefault()
    const session = JSON.parse(sessionStorage.getItem("userData"));
    this.getCustomer()
    this.getStatus()
    this.getWorkshop()
    this.getCurrentUser()
    const item = {
      ts_date_start: this.state.ts_date_start,
      customer_id: this.state.customer_id,
      user_id: session.user_id,
      ts_watch_brand: this.state.ts_watch_brand,
      ts_watch_model: this.state.ts_watch_model,
      workshop_id: this.state.ws_id,
      ts_issue_desc: this.state.ts_issue_desc,
      ts_diagnosis: this.state.ts_diagnosis,
      ts_observation: this.state.ts_observation,
      ts_date_end: this.state.ts_date_end,
      ts_status: this.state.ts_status,
      ts_total: this.state.ts_total,
      ts_payment: this.state.ts_payment,
      ts_balance: this.state.ts_balance 
    };
    
    API.post('ts', item)
    .then(res => {
      console.log(res.data);
      const newItem = {
        ts_id: res.data, 
        ts_date_start: this.state.ts_date_start,
        customer_id: this.state.customer_id,
        user_id: this.state.user_id,
        ts_watch_brand: this.state.ts_watch_brand,
        ts_watch_model: this.state.ts_watch_model,
        ws_id: this.state.ws_id,
        ts_issue_desc: this.state.ts_issue_desc,
        ts_diagnosis: this.state.ts_diagnosis,
        ts_observation: this.state.ts_observation,
        ts_date_end: this.state.ts_date_end,
        ts_status: this.state.ts_status,
        ts_total: this.state.ts_total,
        ts_payment: this.state.ts_payment,
        ts_balance: this.state.ts_balance,
        customer_name: this.state.customer_name,
        status_name: this.state.status_name,
        ws_name: this.state.ws_name
      };
      this.setState({ ts_id: res.data })
      this.props.addItemToState(newItem)
      this.props.toggle()
      this.printOrder()
    })
  }

  submitFormEdit = e => {
    e.preventDefault()
    const session = JSON.parse(sessionStorage.getItem("userData"));
    this.getCustomer()
    this.getStatus()
    this.getWorkshop()
    this.getCurrentUser()
    const item = {
      ts_date_start: this.state.ts_date_start,
      customer_id: this.state.customer_id,
      user_id: session.user_id,
      ts_watch_brand: this.state.ts_watch_brand,
      ts_watch_model: this.state.ts_watch_model,
      workshop_id: this.state.ws_id,
      ts_issue_desc: this.state.ts_issue_desc,
      ts_diagnosis: this.state.ts_diagnosis,
      ts_observation: this.state.ts_observation,
      ts_date_end: this.state.ts_date_end,
      ts_status: this.state.ts_status,
      ts_total: this.state.ts_total,
      ts_payment: this.state.ts_payment,
      ts_balance: this.state.ts_balance 
    };    
    API.put(`ts/${this.state.ts_id}`, item)
      .then(res => {
        console.log(res.data);
        const newItem = {
          ts_id: this.state.ts_id, 
          ts_date_start: this.state.ts_date_start,
          customer_id: this.state.customer_id,
          user_id: this.state.user_id,
          ts_watch_brand: this.state.ts_watch_brand,
          ts_watch_model: this.state.ts_watch_model,
          ws_id: this.state.ws_id,
          ts_issue_desc: this.state.ts_issue_desc,
          ts_diagnosis: this.state.ts_diagnosis,
          ts_observation: this.state.ts_observation,
          ts_date_end: this.state.ts_date_end,
          ts_status: this.state.ts_status,
          ts_total: this.state.ts_total,
          ts_payment: this.state.ts_payment,
          ts_balance: this.state.ts_balance, 
          customer_name: this.state.customer_name,
          status_name: this.state.status_name,
          ws_name: this.state.ws_name
        };
        this.props.updateState(newItem)
        this.props.toggle()
        this.printOrder()
      })
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { ts_id, ts_date_start, customer_id, user_id, ts_watch_brand, ts_watch_model, ws_id, ws_name, ts_issue_desc, ts_diagnosis, ts_observation, ts_date_end, ts_status, ts_total, ts_payment, ts_balance, customer_name, status_name } = this.props.item
      this.setState({ ts_id, ts_date_start, customer_id, user_id, ts_watch_brand, ts_watch_model, ws_id, ws_name, ts_issue_desc, ts_diagnosis, ts_observation, ts_date_end, ts_status, ts_total, ts_payment, ts_balance, customer_name, status_name, selectedOption: { value: customer_id, label: customer_name }, isDisabled: true })
    }
  }

  render() {
    const status = this.props.status.map(st => {
      return (
        <option key={st.status_id} value={st.status_id}>{st.status_name}</option>
      )
    })

    const workshops = this.props.workshops.map(ws => {
      return (
      <option key={ws.ws_id} value={ws.ws_id}>{ws.ws_name}</option>
      )
    })

    const customers = this.props.customers

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
                    <Input type="date" name="ts_date_start" id="ts_date_start" onChange={this.onChange} value={this.state.ts_date_start === null ? '' : this.state.ts_date_start} required/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form className="d-flex align-items-center">
                <Col md={6}>
                  <FormGroup>
                  <Select
                    value={this.state.selectedOption}
                    isDisabled={this.state.isDisabled}
                    onChange={this.handleChange}
                    placeholder="Seleccione un cliente"
                    key={customers}
                    options={customers}
                  />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <CustomerAdd onEdit={this.onEdit} addNewCustomer={this.addNewCustomer} />
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
                    <Label for="ws_id">Taller</Label>
                    <Input type="select" name="ws_id" id="ws_id" onChange={this.onChange}>
                    <option value={this.state.ws_id}>{this.state.ws_name}</option>
                    {workshops}
                  </Input>
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
            </Row>
            <Row form className="d-flex align-items-center">
              <Col md={4}>
                  <FormGroup>
                      <Label for="ts_total">Valor</Label>
                      <Input type="ts_total" name="ts_total" id="ts_total" onChange={this.onChange} onBlur={this.setBalance} value={this.state.ts_total === null ? '' : this.state.ts_total} />
                  </FormGroup>
              </Col>
              <Col md={4}>
                  <FormGroup>
                      <Label for="ts_payment">Abono</Label>
                      <Input type="ts_payment" name="ts_payment" id="ts_payment" onChange={this.onChange} onBlur={this.setBalance} value={this.state.ts_payment === null ? '' : this.state.ts_payment} />
                  </FormGroup>
              </Col>
              <Col md={4}>
                  <FormGroup>
                      <Label for="ts_balance">Saldo</Label>
                      <Input type="ts_balance" name="ts_balance" id="ts_balance" onChange={this.onChange} value={this.state.ts_balance === null ? '' : this.state.ts_balance} readOnly />
                  </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter><Button color="primary float-right">Guardar</Button></CardFooter>
        </Card>
      </Form>
    );
  }
}

export default withRouter(AddEditForm)