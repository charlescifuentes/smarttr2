import React, { Component } from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'

class LatestTs extends Component {
  constructor(props) {
    super(props);
    this.state = {latestTs: []};
  }

  componentDidMount() {
    this.getLatestTs()
  }

  getLatestTs() {
    axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/ts/latest')
      .then(res => {
        const latestTs = res.data
        this.setState({ latestTs })
      })
  }

  render() {
    console.log(this.state);
    
    const latestTs = this.state.latestTs.map(item => {
      return (
        <tr key={item.ts_id}>
          <td>{item.ts_id}</td>
          <td>{item.ts_date_start}</td>
          <td>{item.name}</td>
          <td>{item.ts_watch_brand}</td>
          <td>{item.ts_store_sender}</td>
          <td>{item.status_name}</td>
        </tr>
      )
    })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Marca</th>
            <th>Taller</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {latestTs}
        </tbody>
      </Table>
    )
  }
}

export default LatestTs