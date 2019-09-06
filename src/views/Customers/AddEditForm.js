import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

class AddEditForm extends Component {
  state = {
    nit: '',
    nombres : '',
    apellidos : '',
    telefono : '',
    direccion : '',
    email : '',
    ciudad : '',
    status : ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    axios.post('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers', {
      nit: this.state.nit,
      nombres : this.state.nombres ,
      apellidos : this.state.apellidos ,
      telefono: this.state.telefono,
      direccion: this.state.direccion,
      email: this.state.email,
      ciudad: this.state.ciudad,
      status: this.state.status
    })
    .then(function (response) {
      console.log(response);
    })
    .then(item => {
      if(Array.isArray(item)) {
        this.props.addItemToState(item[0])
        this.props.toggle()
      } else {
        console.log('failure')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        hobby: this.state.hobby
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { nit, nombres, apellidos, telefono, direccion, email, ciudad, status } = this.props.item
      this.setState({ nit, nombres, apellidos, telefono, direccion, email, ciudad, status })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="nit">NIT</Label>
          <Input type="text" name="nit" id="nit" onChange={this.onChange} value={this.state.nit === null ? '' : this.state.nit} />
        </FormGroup>
        <FormGroup>
          <Label for="nombres">Nombres</Label>
          <Input type="text" name="nombres" id="nombres" onChange={this.onChange} value={this.state.nombres === null ? '' : this.state.nombres} />
        </FormGroup>
        <FormGroup>
          <Label for="apellidos">Apellidos</Label>
          <Input type="text" name="apellidos" id="apellidos" onChange={this.onChange} value={this.state.apellidos === null ? '' : this.state.apellidos}  />
        </FormGroup>
        <FormGroup>
          <Label for="telefono">Teléfono</Label>
          <Input type="text" name="telefono" id="telefono" onChange={this.onChange} value={this.state.telefono === null ? '' : this.state.telefono}  />
        </FormGroup>
        <FormGroup>
          <Label for="direccion">Dirección</Label>
          <Input type="text" name="direccion" id="direccion" onChange={this.onChange} value={this.state.direccion === null ? '' : this.state.direccion} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
        <FormGroup>
          <Label for="ciudad">Ciudad</Label>
          <Input type="text" name="ciudad" id="ciudad" onChange={this.onChange} value={this.state.ciudad === null ? '' : this.state.ciudad}  placeholder="City, State" />
        </FormGroup>
        <FormGroup>
          <Label for="status">Hobby</Label>
          <Input type="text" name="status" id="status" onChange={this.onChange} value={this.state.status}  />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
    );
  }
}

export default AddEditForm