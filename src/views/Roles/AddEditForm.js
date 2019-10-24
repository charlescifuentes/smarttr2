import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../../API'

class AddEditForm extends Component {
  state = {
    rol_id: '',
    rol_name: ''          
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()

    const item = {
      rolname: this.state.rol_name
    };
    
    API.post('roles', item)
    .then(res => {
      this.setState({ rol_id: res.data })
      this.props.addItemToState(this.state)
      this.props.toggle()
    })
  }

  submitFormEdit = e => {
    e.preventDefault()

    const item = {
      rolname: this.state.rol_name
    };

    API.put(`roles/${this.state.rol_id}`, item )
      .then(res => {
        console.log(res.data);
        this.props.updateState(this.state)
        this.props.toggle()
      })
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { rol_id, rol_name } = this.props.item
      this.setState({ rol_id, rol_name })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="rol_id">ID</Label>
          <Input type="text" name="rol_id" id="rol_id" onChange={this.onChange} value={this.state.rol_id === null ? '' : this.state.rol_id} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="rol_name">Nombre</Label>
          <Input type="text" name="rol_name" id="rol_name" onChange={this.onChange} value={this.state.rol_name === null ? '' : this.state.rol_name} />
        </FormGroup>
        <Button color="primary">Enviar</Button>
      </Form>
    );
  }
}

export default AddEditForm