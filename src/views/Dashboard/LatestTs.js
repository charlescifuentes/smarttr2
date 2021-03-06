import React, { Component } from 'react'
import { Table } from 'reactstrap'

class LatestTs extends Component {

  render() {
    const options = { style: 'currency', currency: 'COP', minimumFractionDigits: '0' }
    const numberFormat = new Intl.NumberFormat('es-CO', options);

    const latestTs = this.props.latestTs.map(item => {
      return (
        <tr key={item.ts_id}>
          <td>{item.ts_id}</td>
          <td>{item.ts_date_start}</td>
          <td>{item.customer_name}</td>
          <td>{item.ts_watch_brand}</td>
          <td>{item.ws_name}</td>
          <td>{item.status_name}</td>
          <td>{numberFormat.format(item.ts_total)}</td>
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
            <th>Total</th>
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