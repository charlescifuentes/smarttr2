import React, { Component } from 'react'
import { Table } from 'reactstrap'
import ModalForm from './ModalForm'

class DataTable extends Component {

  render() {
    
    const items = this.props.items.map(item => {
      return (
        <tr key={item.ts_id}>
          <td>{item.ts_id}</td>
          <td>{item.ts_date_start}</td>
          <td>{item.customer_firstname + " " + item.customer_lastname}</td>
          <td>{item.ts_watch_brand}</td>
          <td>{item.ts_store_sender}</td>
          <td>{item.status_name}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
            </div>
          </td>
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable