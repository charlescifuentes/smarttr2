import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

class EditForm extends Component {
  state = {
    config_id: '',
    company_name: '',
    company_nit: '', 
    company_address: '', 
    company_phone: '', 
    company_email: ''          
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormEdit = e => {
    e.preventDefault()

    const item = {
      statusname: this.state.status_name
    };

    axios.put(`http://colombiaweb.co/smarttr/apirest/public/api/v1/status/${this.state.status_id}`, item )
      .then(res => {
        console.log(res.data);
        this.props.updateState(this.state)
        this.props.toggle()
      })
  }

  render() {
    const item = this.props.items.map(item => {
      return (
        <h1>{item.company_name}</h1>
      )
    })

    return (
      <Form onSubmit={this.submitFormEdit}>
        {item}
        <FormGroup>
          <Label for="company_name">NOMBRE EMPRESA</Label>
          <Input type="text" name="company_name" id="company_name" onChange={this.onChange} value={this.state.company_name === null ? '' : this.state.company_name} />
        </FormGroup>
        <FormGroup>
          <Label for="company_nit">NIT EMPRESA</Label>
          <Input type="text" name="company_nit" id="company_nit" onChange={this.onChange} value={this.state.company_nit === null ? '' : this.state.company_nit} />
        </FormGroup>
        <Button color="primary">Enviar</Button>
      </Form>
    );
  }
}

export default EditForm