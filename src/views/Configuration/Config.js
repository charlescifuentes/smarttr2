import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'
import axios from 'axios'
import EditForm from './EditForm'

class Config extends Component {

  state = {
    items: []
  }

  async getItems(){
    await axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/config')
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
    const itemIndex = this.state.items.findIndex(data => data.status_id === item.status_id)
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
    const updatedItems = this.state.items.filter(item => item.status_id !== id)
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
                <i className="fa fa-align-justify"></i> CONFIGURACIÓN NEGOCIO
              </CardHeader>
              <CardBody>
                <EditForm items={this.state.items} updateState={this.updateState} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Config