import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from './AddEditForm'
import axios from 'axios'

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      customers: [],
      status: []
    }
  } 

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  getCustomers = () => {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/select')
      .then(res => {
        const customers = res.data
        this.setState({ customers })
      })
  }

  getStatus = () => {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/status')
      .then(res => {
        const status = res.data
        this.setState({ status })
      })
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

    const label = this.props.buttonLabel

    let button = ''
    let title = ''

    if(label === 'Editar') {
      button = <Button
                color="warning"
                onClick={() => {
                  this.toggle();
                  this.getCustomers();
                  this.getStatus();
                }}
                style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
      title = 'Actualizar Orden de Servicio'
    } else {
      button = <Button
                color="success"
                //onClick={this.toggle}
                onClick={() => {
                  this.toggle();
                  this.getCustomers();
                  this.getStatus();
                }}
                style={{float: "left"}}>{label}
                </Button>
      title = 'Crear una Orden de Servicio'
    }

    return (      
      <div>
        {button}
        <Modal size="lg" isOpen={this.state.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item}
              customers={this.state.customers}
              status={this.state.status}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm

