import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import API from '../../API'

class CustomerAdd extends Component {
    constructor(props) {
      super(props);
      this.state = {
        customer_id: '',
        customer_nit: '',
        customer_firstname : '',
        customer_lastname : '',
        customer_phone : '',
        customer_address : '',
        customer_email : '',
        customer_city : '',
        customer_status : '',
        modal: false,
        checkNit: '',
        isDisabled: false 
      }
    }

    onChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }

    checkNit = e => {
      const nit = e.target.value
      if (nit !== "") {
        API.get(`customers/checknit/${nit}`)
        .then(response => {
          const checkNit = response.data
  
          if (checkNit === 1) {
            this.setState({ checkNit: checkNit, isDisabled: true })
          } else {
            this.setState({ checkNit: checkNit, isDisabled: false })
          }
        })
      } else {
          this.setState({ checkNit: '', isDisabled: false })
      }
    }

    submitFormAdd = e => {
      e.preventDefault()
      const item = {
        customer_nit: this.state.customer_nit,
        customer_firstname: this.state.customer_firstname,
        customer_lastname: this.state.customer_lastname,
        customer_phone: this.state.customer_phone,
        customer_address: this.state.customer_address,
        customer_email: this.state.customer_email,
        customer_city: this.state.customer_city,
        customer_status: this.state.customer_status
      };
      
      API.post('customers', item)
      .then(res => {
        console.log(res.data);
        const newItem = {
          customer_id: res.data,
          customer_firstname: this.state.customer_firstname,
          customer_lastname: this.state.customer_lastname,
        }
        this.props.addNewCustomer(newItem)
        this.toggle()
      })
    }

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
    }

    render() {
      const { checkNit } = this.state
      const nitAlert = <Alert color="danger">Este NIT ya existe</Alert>
        return (
          <div>
            <Button color="info" onClick={this.props.onEdit}><i className="fa fa-pencil"> Editar</i></Button>
            {" "}
            <Button color="danger" onClick={this.toggle}><i className="fa fa-plus"> Crear</i></Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="customer_id">ID</Label>
                  <Input type="text" name="customer_id" id="customer_id" onChange={this.onChange} value={this.state.customer_id} readOnly/>
                </FormGroup>
                <FormGroup>
                  <Label for="customer_nit">NIT</Label>
                  { checkNit === 1 && nitAlert }
                  <Input type="text" name="customer_nit" id="customer_nit" onChange={this.onChange} onBlur={this.checkNit} value={this.state.customer_nit} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_firstname">Nombres</Label>
                  <Input type="text" name="customer_firstname" id="customer_firstname" onChange={this.onChange} value={this.state.customer_firstname === null ? '' : this.state.customer_firstname} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_lastname">Apellidos</Label>
                  <Input type="text" name="customer_lastname" id="customer_lastname" onChange={this.onChange} value={this.state.customer_lastname === null ? '' : this.state.customer_lastname} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_phone">Teléfono</Label>
                  <Input type="text" name="customer_phone" id="customer_phone" onChange={this.onChange} value={this.state.customer_phone === null ? '' : this.state.customer_phone} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_address">Dirección</Label>
                  <Input type="text" name="customer_address" id="customer_address" onChange={this.onChange} value={this.state.customer_address === null ? '' : this.state.customer_address} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_email">Email</Label>
                  <Input type="email" name="customer_email" id="customer_email" onChange={this.onChange} value={this.state.customer_email === null ? '' : this.state.customer_email} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_city">Ciudad</Label>
                  <Input type="text" name="customer_city" id="customer_city" onChange={this.onChange} value={this.state.customer_city === null ? '' : this.state.customer_city} />
                </FormGroup>
                <FormGroup>
                  <Label for="customer_status">Estado</Label>
                  <Input type="select" name="customer_status" id="customer_status" onChange={this.onChange} value={this.state.customer_status === null ? '' : this.state.customer_status} >
                    <option value="1">Activo</option>
                    <option value="2">Inactivo</option>
                  </Input>
                </FormGroup>
                <Button color="primary" onClick={this.submitFormAdd} disabled={this.state.isDisabled}>Enviar</Button>
              </Form>
              </ModalBody>
            </Modal>
          </div>
        );
    }
}

export default CustomerAdd
