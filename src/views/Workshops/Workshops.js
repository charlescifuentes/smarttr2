import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'
import ModalForm from './ModalForm'
import DataTable from './DataTable'
import API from '../../API'

class Workshops extends Component {

  state = {
    items: []
  }

  getItems(){
    API.get('workshops')
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
    const itemIndex = this.state.items.findIndex(data => data.ws_id === item.ws_id)
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
    const updatedItems = this.state.items.filter(item => item.ws_id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    const { items } = this.state
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> TALLERES DE REPARACIÓN
              </CardHeader>
              <CardBody>
                {Array.isArray(items) ? (
                  <DataTable items={items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
                ) : (
                  <p>{items}</p>
                )}
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

export default Workshops