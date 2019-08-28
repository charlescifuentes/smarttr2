import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Axios from 'axios';

class CustomerUpdate extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            customer: []
        };
    }

    async componentDidMount() {
        await Axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' + this.state.id )
        .then((response) => {
          // handle success
          this.setState({customer: response.data})
          console.log(this.state.customer);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default CustomerUpdate;
