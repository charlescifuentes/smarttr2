import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import ModalForm from './ModalForm'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Desea borrar este item?')
    if(confirmDelete){
      axios.delete('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers/' + id)
        .then(res => {
          console.log(res.data);
          this.props.deleteItemFromState(id)
        })
    }
  }
  showItem = (item) => {
    console.log(item)
  }

  render() {
    const products = this.props.items;
    console.log(products);

    const columns = [
      {
      dataField: 'customer_nit',
      text: 'NIT'
      }, {
      dataField: 'customer_firstname',
      text: 'Nombres'
      }, {
      dataField: 'customer_lastname',
      text: 'Apellidos'
      }, {
      dataField: 'df2',
      isDummyField: true,
      text: 'Action 2',
        formatter: (cellContent, row) => {
          return (
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={row} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(row.customer_id)}>Borrar</Button>
            </div>
          );
        }
      }
    ];

    const items = this.props.items.map(item => {
      return (
        <tr key={item.customer_id}>
          <th>{item.customer_nit}</th>
          <td>{item.customer_firstname}</td>
          <td>{item.customer_lastname}</td>
          <td>{item.customer_phone}</td>
          <td>{item.customer_city}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.customer_id)}>Borrar</Button>
            </div>
          </td>
        </tr>
      )
    })

    return (
      <div>
        <BootstrapTable keyField='customer_id' data={ products } columns={ columns } pagination={ paginationFactory() } bootstrap4 hover />
      {/*<Table responsive hover>
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
      </Table>*/}
      </div>
    )
  }
}

export default DataTable