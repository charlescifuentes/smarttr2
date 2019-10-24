import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'
import API from '../../API'
import EditForm from './EditForm'

class Config extends Component {

  state = {
    items: []
  }

  async getItems(){
    await API.get('config')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.config_id === item.config_id)
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

  componentDidMount(){
    this.getItems()
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <EditForm key={item.config_id} item={item} updateState={this.updateState} />
      )
    })
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> CONFIGURACIÓN NEGOCIO
              </CardHeader>
              <CardBody>
                {items}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Config