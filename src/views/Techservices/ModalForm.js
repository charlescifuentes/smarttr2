import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from './AddEditForm'
import API from '../../API'

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      customers: [],
      status: [],
      workshops: []
    }
  } 

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  getCustomers = () => {
    API.get('customers/select')
      .then(res => {
        const customers = res.data
        this.setState({ customers })
      })
  }

  getStatus = () => {
    API.get('status')
      .then(res => {
        const status = res.data
        this.setState({ status })
      })
  }

  getWorkshops = () => {
    API.get('workshops')
    .then(res => {
      const workshops = res.data
      this.setState({ workshops })
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
                  this.getWorkshops();
                }}
                style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
      title = 'Actualizar Orden de Servicio'
    } else {
      button = <Button
                color="success"
                onClick={() => {
                  this.toggle();
                  this.getCustomers();
                  this.getStatus();
                  this.getWorkshops();
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
              workshops={this.state.workshops}
              getCustomers={this.getCustomers}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm

