import React, { Component, Fragment } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

class TsByStatus extends Component {

  render() {
    const tsbystatus = this.props.TsByStatus.map(item => {
      return (
        <Fragment>
            <ListGroupItem className="justify-content-between">{item.status_name} <Badge className="float-right" pill>{item.quantity}</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between">{item.status_name} <Badge className="float-right" pill>{item.quantity}</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between">{item.status_name} <Badge className="float-right" pill color="warning">{item.quantity}</Badge></ListGroupItem>        
        </Fragment>
      )
    })

    return (
        <ListGroup>
            {tsbystatus}
        </ListGroup>
    )   
  }
}

export default TsByStatus