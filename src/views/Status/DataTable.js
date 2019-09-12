import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import ModalForm from './ModalForm'
import axios from 'axios'

class Status extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Desea borrar este item?')
    if(confirmDelete){
      axios.delete('http://colombiaweb.co/smarttr/apirest/public/api/v1/status/' + id)
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
        <tr key={item.status_id}>
          <td>{item.status_id}</td>
          <td>{item.status_name}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.status_id)}>Borrar</Button>
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
            <th>Nombres</th>
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

export default Status