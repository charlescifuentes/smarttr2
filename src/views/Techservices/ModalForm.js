import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from './AddEditForm'

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

    const label = this.props.buttonLabel

    let button = ''
    let title = ''

    if(label === 'Editar') {
      button = <Button
                color="warning"
                onClick={this.toggle}
                style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
      title = 'Actualizar Orden de Servicio'
    } else {
      button = <Button
                color="success"
                onClick={this.toggle}
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
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm

