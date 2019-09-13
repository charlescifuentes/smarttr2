import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
    ts_status: ''          
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
      const { ts_id, ts_date_start, customer_id, user_id, ts_watch_brand, ts_watch_model, ts_store_sender, ts_issue_desc, ts_diagnosis, ts_observation, ts_date_end, ts_status } = this.props.item
      this.setState({ ts_id, ts_date_start, customer_id, user_id, ts_watch_brand, ts_watch_model, ts_store_sender, ts_issue_desc, ts_diagnosis, ts_observation, ts_date_end, ts_status })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="ts_id">ID</Label>
          <Input type="text" name="ts_id" id="ts_id" onChange={this.onChange} value={this.state.ts_id === null ? '' : this.state.ts_id} readOnly />
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