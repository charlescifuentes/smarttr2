import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'
import ModalForm from './ModalForm'
import DataTable from './DataTable'
import axios from 'axios'
import DTable from 'react-data-table-component';

class Customers extends Component {

  state = {
    items: []
  }

  getItems(){
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]      
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.customer_id === item.customer_id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.customer_id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    const data = this.state.items
    const columns = [
      {
        name: 'NIT',
        selector: 'customer_nit',
        sortable: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
    ];

    console.log(data);
    console.log(columns);
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> CLIENTES
              </CardHeader>
              <CardBody>
              <DTable
                title="Arnold Movies"
                columns={columns}
                data={data}
              />
                <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
              </CardBody>
              <CardFooter>
                <ModalForm buttonLabel="Añadir Registro" addItemToState={this.addItemToState} />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Customers