import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from './AddEditForm'
import API from '../../API'

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      roles: []
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  getRoles = () => {
    API.get('roles')
      .then(res => {
        const roles = res.data
        this.setState({ roles })
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
                  this.getRoles();
                }}
                style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
      title = 'Editar Registro'
    } else {
      button = <Button
                color="success"
                onClick={() => {
                  this.toggle();
                  this.getRoles();
                }}
                style={{float: "left"}}>{label}
                </Button>
      title = 'Añadir Nuevo Registro'
    }

    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item}
              roles={this.state.roles}
              label={label} 
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm

