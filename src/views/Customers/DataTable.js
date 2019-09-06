import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import ModalForm from './ModalForm'
import axios from 'axios'

class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      axios.delete('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' +id)
      .then(res => {
        this.props.deleteItemFromState(id);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <tr key={item.customer_id}>
          <th scope="row">{item.customer_nit}</th>
          <td>{item.customer_firstname}</td>
          <td>{item.customer_lastname}</td>
          <td>{item.customer_phone}</td>
          <td>{item.customer_city}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.customer_id)}>Borrar</Button>
            </div>
          </td>
        </tr>
      )
    })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>NIT</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
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