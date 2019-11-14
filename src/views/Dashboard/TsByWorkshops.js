import React, { Component, Fragment } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

class TsByWorkshops extends Component {

  render() {
    const tsByWorkshops = this.props.tsByWorkshops.map((item, index) => {
      return (
        <Fragment key={index}>
            <ListGroupItem className="justify-content-between">{item.ws_name}<Badge className="float-right" pill color="primary">{item.quantity}</Badge></ListGroupItem>      
        </Fragment>
      )
    })

    return (
        <ListGroup>
          {tsByWorkshops}
        </ListGroup>
    )   
  }
}

export default TsByWorkshops