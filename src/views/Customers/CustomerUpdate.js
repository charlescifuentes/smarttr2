import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class CustomerUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          id: this.props.id,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Editar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Actualizar Cliente</ModalHeader>
                    <ModalBody>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CustomerUpdate;
