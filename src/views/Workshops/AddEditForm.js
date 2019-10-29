import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../../API'

class AddEditForm extends Component {
  state = { 
    ws_id: '', 
    ws_nit: '', 
    ws_name: '',
    ws_owner: '',
    ws_address: '',
    ws_phone: '', 
    ws_email: '', 
    ws_city: '', 
    ws_active: '1' 
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    const item = {
      ws_nit: this.state.ws_nit, 
      ws_name: this.state.ws_name,
      ws_owner: this.state.ws_owner,
      ws_address: this.state.ws_address,
      ws_phone: this.state.ws_phone, 
      ws_email: this.state.ws_email, 
      ws_city: this.state.ws_city,
      ws_active: this.state.ws_active,
    };
    
    API.post('workshops', item)
    .then(res => {
      this.setState({ ws_id: res.data })
      this.props.addItemToState(this.state)
      this.props.toggle()
    })
  }

  submitFormEdit = e => {
    e.preventDefault()
    const item = {
      ws_nit: this.state.ws_nit, 
      ws_name: this.state.ws_name,
      ws_owner: this.state.ws_owner,
      ws_address: this.state.ws_address,
      ws_phone: this.state.ws_phone, 
      ws_email: this.state.ws_email, 
      ws_city: this.state.ws_city,
      ws_active: this.state.ws_active,
    };

    API.put(`workshops/${this.state.ws_id}`, item )
      .then(res => {
        this.props.updateState(this.state)
        this.props.toggle()
      })
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { ws_id, ws_nit, ws_name, ws_owner, ws_address, ws_phone, ws_email, ws_city, ws_active } = this.props.item
      this.setState({ ws_id, ws_nit, ws_name, ws_owner, ws_address, ws_phone, ws_email, ws_city, ws_active })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="ws_id">ID</Label>
          <Input type="text" name="ws_id" id="ws_id" onChange={this.onChange} value={this.state.ws_id === null ? '' : this.state.ws_id} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="ws_nit">NIT</Label>
          <Input type="text" name="ws_nit" id="ws_nit" onChange={this.onChange} value={this.state.ws_nit === null ? '' : this.state.ws_nit} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_name">Nombre</Label>
          <Input type="text" name="ws_name" id="ws_name" onChange={this.onChange} value={this.state.ws_name === null ? '' : this.state.ws_name} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_nit">Propietario</Label>
          <Input type="text" name="ws_owner" id="ws_owner" onChange={this.onChange} value={this.state.ws_owner === null ? '' : this.state.ws_owner} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_address">Dirección</Label>
          <Input type="text" name="ws_address" id="ws_address" onChange={this.onChange} value={this.state.ws_address === null ? '' : this.state.ws_address} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_phone">Teléfonos</Label>
          <Input type="text" name="ws_phone" id="ws_phone" onChange={this.onChange} value={this.state.ws_phone === null ? '' : this.state.ws_phone} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_email">Email</Label>
          <Input type="text" name="ws_email" id="ws_email" onChange={this.onChange} value={this.state.ws_email === null ? '' : this.state.ws_email} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_city">Ciudad</Label>
          <Input type="text" name="ws_city" id="ws_city" onChange={this.onChange} value={this.state.ws_city === null ? '' : this.state.ws_city} />
        </FormGroup>
        <FormGroup>
          <Label for="ws_active">Activo</Label>
          <Input type="select" name="ws_active" id="ws_active" onChange={this.onChange} value={this.state.ws_active === null ? '' : this.state.ws_active} >
            <option value="1">Activo</option>
            <option value="2">Inactivo</option>
          </Input>
        </FormGroup>
        <Button color="primary">Enviar</Button>
      </Form>
    );
  }
}

export default AddEditForm