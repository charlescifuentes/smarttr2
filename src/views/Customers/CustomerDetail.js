import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Axios from 'axios';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: this.props.id,
      customer: []
    };

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Make a request for a user with a given ID
    Axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' + this.state.id)
    .then((response) => {
      // handle success
      this.setState({customer: response.data})
      this.toggle();
      console.log(this.state.customer);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.handleClick}><i className="fa fa-search">{this.props.value}</i></Button>
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

export default CustomerDetail;
