import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'
import ModalForm from './ModalForm'
import DataTable from './DataTable'
import axios from 'axios'

class Customers extends Component {

  state = {
    items: []
  }

  async  getItems(){         
    fetch('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers')
    const { data: items } = await axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers');
    this.setState({ items });
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]      
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
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
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> CLIENTES
              </CardHeader>
              <CardBody>
                <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
              </CardBody>
              <CardFooter>
                <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Customers

