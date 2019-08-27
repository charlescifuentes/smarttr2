import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import axios from 'axios';

class TablesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: this.props.id,
      customer: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  async componentDidMount() {
    const res = await axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' + this.state.id);
    this.setState({customer: res.data});
    console.log(this.state.customer);
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.children}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Detalles Cliente</ModalHeader>
          <ModalBody>
          {
            this.state.customer.map(customer => (
              <ListGroup key={customer.customer_id}>
                <ListGroupItem>
                  <ListGroupItemHeading>NIT:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_nit}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>NOMBRES:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_firstname}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>APELLIDOS:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_lastname}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>TELÉFONO:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_phone}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>DIRECCIÓN:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_address}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>CIUDAD:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_city}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>EMAIL:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_email}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>ESTADO:</ListGroupItemHeading> 
                  <ListGroupItemText>{customer.customer_status}</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            ))
          }
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default TablesDetail;
