import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Tables extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    customers: []
  }

  async componentDidMount() {
    const res = await axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers');
    this.setState({customers: res.data});
    console.log(this.state.customers);
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
                    <th>Estado</th>
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
                          <td>{customer.customer_status}</td>
                          <td>
                            <ButtonGroup>
                              <Link to="/base/forms">
                                <Button color="info" size="sm"><i className="fa fa-eye"></i>Ver</Button>
                              </Link>
                              <Button color="warning" size="sm"><i className="fa fa-edit"></i>Editar</Button>
                              <Button color="danger" size="sm"><i className="fa fa-eraser"></i>Borrar</Button>
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

export default Tables;
