import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios'

class EditForm extends Component {
  state = {
    config_id: '',
    company_name: '',
    company_nit: '', 
    company_address: '', 
    company_phone: '', 
    company_email: '',
    alert: false          
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormEdit = e => {
    e.preventDefault()

    const item = {
      companyname: this.state.company_name,
      companynit: this.state.company_nit,
      companyaddress: this.state.company_address,
      companyphone: this.state.company_phone,
      companyemail: this.state.company_email
    };

    axios.put(`http://colombiaweb.co/smarttr/apirest/public/api/v1/config/${this.state.config_id}`, item )
      .then(res => {
        console.log(res.data);
        this.toggle();
        this.props.updateState(this.state)
      })
  }

  toggle = () => {
    this.setState(prevState => ({
      alert: !prevState.alert
    }))
  }

  notification() {
    return (
      <Alert color="success">
        Datos guardados
      </Alert>
    );
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { config_id, company_name, company_nit, company_phone, company_email, company_address } = this.props.item
      this.setState({ config_id, company_name, company_nit, company_phone, company_email, company_address })
    }
  }

  render() {    
    return (
      <Form onSubmit={this.submitFormEdit}>
        <FormGroup>
          <Label for="company_name">NOMBRE EMPRESA</Label>
          <Input type="text" name="company_name" id="company_name" onChange={this.onChange} value={this.state.company_name === null ? '' : this.state.company_name} />
        </FormGroup>
        <FormGroup>
          <Label for="company_nit">NIT EMPRESA</Label>
          <Input type="text" name="company_nit" id="company_nit" onChange={this.onChange} value={this.state.company_nit === null ? '' : this.state.company_nit} />
        </FormGroup>
        <FormGroup>
          <Label for="company_phone">TELÉFONOS EMPRESA</Label>
          <Input type="text" name="company_phone" id="company_phone" onChange={this.onChange} value={this.state.company_phone === null ? '' : this.state.company_phone} />
        </FormGroup>
        <FormGroup>
          <Label for="company_address">DIRECCIÓN EMPRESA</Label>
          <Input type="text" name="company_address" id="company_address" onChange={this.onChange} value={this.state.company_address === null ? '' : this.state.company_address} />
        </FormGroup>
        <FormGroup>
          <Label for="company_email">EMAIL EMPRESA</Label>
          <Input type="text" name="company_email" id="company_email" onChange={this.onChange} value={this.state.company_email === null ? '' : this.state.company_email} />
        </FormGroup>
        {this.state.alert && this.notification()}
        <Button color="primary">Enviar</Button>
      </Form>
    );
  }
}

export default EditForm