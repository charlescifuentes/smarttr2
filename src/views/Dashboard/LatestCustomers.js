import React, { Component } from 'react'
import { Table } from 'reactstrap'

class LatestCustomers extends Component {

  render() {
    const latestCustomers = this.props.latestCustomers.map(item => {
      return (
        <tr key={item.customer_id}>
          <td>{item.customer_firstname}</td>
          <td>{item.customer_lastname}</td>
          <td>{item.customer_city}</td>
        </tr>
      )
    })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {latestCustomers}
        </tbody>
      </Table>
    )
  }
}

export default LatestCustomers