import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import ModalForm from './ModalForm'
import axios from 'axios'

class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Desea borrar este item?')
    if(confirmDelete){
      axios.delete('http://colombiaweb.co/smarttr/apirest/public/api/v1/users/' + id)
        .then(res => {
          console.log(res.data);
          this.props.deleteItemFromState(id)
        })
    }
  }

  render() {

    console.log(this.props.items);
    
    const items = this.props.items.map(item => {
      return (
        <tr key={item.user_id}>
          <td>{item.user_name}</td>
          <td>{item.user_firstname}</td>
          <td>{item.user_lastname}</td>
          <td>{item.user_phone}</td>
          <td>{item.user_email}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.user_id)}>Borrar</Button>
            </div>
          </td>
        </tr>
      )
    })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Email</th>
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