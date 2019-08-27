import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import CustomerDetail from './CustomerDetail';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      customer: [],
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  handleClick(id) {
    // Make a request for a user with a given ID
    Axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' + id)
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

  async componentDidMount() {
    Axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers')
    .then((response) => {
      // handle success
      this.setState({customers: response.data})
      console.log(this.state.customers);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Clientes
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>NIT</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th>Email</th>
                    <th>Opciones</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.customers.map(customer => (
                        <tr key={customer.customer_id}>
                          <td>{customer.customer_nit}</td>
                          <td>{customer.customer_firstname}</td>
                          <td>{customer.customer_lastname}</td>
                          <td>{customer.customer_phone}</td>
                          <td>{customer.customer_address}</td>
                          <td>{customer.customer_city}</td>
                          <td>{customer.customer_email}</td>
                          <td>
                            <ButtonGroup>
                              <CustomerDetail id={customer.customer_id}>Ver</CustomerDetail>
                              <Link to="/customers/customerupdate">
                              <Button color="warning"><i className="fa fa-pencil">Editar</i></Button>
                              </Link>
                              <Button color="danger"><i className="fa fa-eraser">Borrar</i></Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Customers;
