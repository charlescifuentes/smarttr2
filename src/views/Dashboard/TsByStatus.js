import React, { Component, Fragment } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import axios from 'axios'

class TsByStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {tsByStatus: []};
  }

  componentDidMount() {
    this.getTsByStatus()
  }

  getTsByStatus() {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/ts/bystatus')
      .then(res => {
        const tsByStatus = res.data
        this.setState({ tsByStatus })
      })
  }

  render() {
    console.log(this.state);
    
    /*const tsbystatus = this.props.TsByStatus.map(item => {
      return (
        <Fragment>
            <ListGroupItem className="justify-content-between">{item.status_name} <Badge className="float-right" pill>{item.quantity}</Badge></ListGroupItem>      
        </Fragment>
      )
    })*/

    return (
        <ListGroup>
            {TsByStatus}
        </ListGroup>
    )   
  }
}

export default TsByStatus