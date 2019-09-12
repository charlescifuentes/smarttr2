import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

class AddEditForm extends Component {
  state = {
    status_id: '',
    status_name: ''          
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()

    const item = {
      statusname: this.state.status_name
    };
    
    axios.post('http://colombiaweb.co/smarttr/apirest/public/api/v1/status', item)
    .then(res => {
      this.setState({ status_id: res.data })
      this.props.addItemToState(this.state)
      this.props.toggle()
    })
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

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { status_id, status_name } = this.props.item
      this.setState({ status_id, status_name })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="status_id">ID</Label>
          <Input type="text" name="status_id" id="status_id" onChange={this.onChange} value={this.state.status_id === null ? '' : this.state.status_id} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="status_name">Nombre</Label>
          <Input type="text" name="status_name" id="status_name" onChange={this.onChange} value={this.state.status_name === null ? '' : this.state.status_name} />
        </FormGroup>
        <Button color="primary">Enviar</Button>
      </Form>
    );
  }
}

export default AddEditForm