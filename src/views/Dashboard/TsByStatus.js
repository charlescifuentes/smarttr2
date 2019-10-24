import React, { Component, Fragment } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

class TsByStatus extends Component {

  render() {
    const tsByStatus = this.props.tsByStatus.map((item, index) => {
      return (
        <Fragment key={index}>
            <ListGroupItem className="justify-content-between">{item.status_name}<Badge className="float-right" pill color="primary">{item.quantity}</Badge></ListGroupItem>      
        </Fragment>
      )
    })

    return (
        <ListGroup>
          {tsByStatus}
        </ListGroup>
    )   
  }
}

export default TsByStatus