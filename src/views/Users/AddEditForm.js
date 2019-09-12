import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

class AddEditForm extends Component {
  state = {
    user_id: '',
    user_name: '',
    user_password : '',
    user_firstname : '',
    user_lastname : '',
    user_phone : '',
    user_email : '',
    rol_id : '',
    user_status : ''            
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()

    const item = {
      username: this.state.user_name,
      password: this.state.user_password,
      firstname: this.state.user_firstname,
      lastname: this.state.user_lastname,
      email: this.state.user_email,
      phone: this.state.user_phone,
      rol: this.state.rol_id,
      status: this.state.user_status
    };
    
    axios.post('http://colombiaweb.co/smarttr/apirest/public/api/v1/users', item)
    .then(res => {
      this.setState({ user_id: res.data })
      this.props.addItemToState(this.state)
      this.props.toggle()
    })
  }

  submitFormEdit = e => {
    e.preventDefault()

    const item = {
      username: this.state.user_name,
      password: this.state.user_password,
      firstname: this.state.user_firstname,
      lastname: this.state.user_lastname,
      email: this.state.user_email,
      phone: this.state.user_phone,
      rol: this.state.rol_id,
      status: this.state.user_status
    };

    axios.put(`http://colombiaweb.co/smarttr/apirest/public/api/v1/users/${this.state.user_id}`, item )
      .then(res => {
        console.log(res.data);
        this.props.updateState(this.state)
        this.props.toggle()
      })
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { user_id, user_name, user_password, user_firstname, user_lastname, user_phone, user_email, rol_id, user_status } = this.props.item
      this.setState({ user_id, user_name, user_password, user_firstname, user_lastname, user_phone, user_email, rol_id, user_status })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="user_id">ID</Label>
          <Input type="text" name="user_id" id="user_id" onChange={this.onChange} value={this.state.user_id === null ? '' : this.state.user_id} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="user_name">Usuario</Label>
          <Input type="text" name="user_name" id="user_name" onChange={this.onChange} value={this.state.user_name === null ? '' : this.state.user_name} />
        </FormGroup>
        <FormGroup>
          <Label for="user_password">Contraseña</Label>
          <Input type="text" name="user_password" id="user_password" onChange={this.onChange} value={this.state.user_password === null ? '' : this.state.user_password} />
        </FormGroup>
        <FormGroup>
          <Label for="user_firstname">Nombres</Label>
          <Input type="text" name="user_firstname" id="user_firstname" onChange={this.onChange} value={this.state.user_firstname === null ? '' : this.state.user_firstname} />
        </FormGroup>
        <FormGroup>
          <Label for="user_lastname">Apellidos</Label>
          <Input type="text" name="user_lastname" id="user_lastname" onChange={this.onChange} value={this.state.user_lastname === null ? '' : this.state.user_lastname} />
        </FormGroup>
        <FormGroup>
          <Label for="user_phone">Teléfono</Label>
          <Input type="text" name="user_phone" id="user_phone" onChange={this.onChange} value={this.state.user_phone === null ? '' : this.state.user_phone} />
        </FormGroup>
        <FormGroup>
          <Label for="user_email">Email</Label>
          <Input type="email" name="user_email" id="user_email" onChange={this.onChange} value={this.state.user_email === null ? '' : this.state.user_email} />
        </FormGroup>
        <FormGroup>
          <Label for="rol_id">Rol</Label>
          <Input type="text" name="rol_id" id="rol_id" onChange={this.onChange} value={this.state.rol_id === null ? '' : this.state.rol_id}  />
        </FormGroup>
        <FormGroup>
          <Label for="user_status">Estado</Label>
          <Input type="text" name="user_status" id="user_status" onChange={this.onChange} value={this.state.user_status === null ? '' : this.state.user_status}  />
        </FormGroup>
        <Button color="primary">Enviar</Button>
      </Form>
    );
  }
}

export default AddEditForm