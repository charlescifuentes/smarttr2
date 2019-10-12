import React, { Component } from 'react'
import ModalForm from './ModalForm'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

class DataTable extends Component {

  render() {
    const items = this.props.items;

    const columns = [
      {
        dataField: 'ts_id',
        text: 'ID'
      }, {
        dataField: 'ts_date_start',
        text: 'Fecha'
      }, {
        dataField: 'customer',
        text: 'Cliente'
      }, {
        dataField: 'ts_watch_brand',
        text: 'Marca'
      }, {
        dataField: 'ts_store_sender',
        text: 'Taller'
      }, {
        dataField: 'status_name',
        text: 'Estado'
      }, {
        dataField: 'actions',
        isDummyField: true,
        text: 'Acciones',
        formatter: (cellContent, row) => {
          return (
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={row} updateState={this.props.updateState}/>
            </div>
          );
        }
      }
    ];
    
    /*const items = this.props.items.map(item => {
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
    })*/

    return (
      <div>
        <BootstrapTable 
          keyField='ts_id' 
          data={ items } 
          columns={ columns } 
          pagination={ paginationFactory() }
          bootstrap4 
          striped
          bordered={false}
          wrapperClasses="table-responsive"
        />
      </div>
      /*<Table responsive hover>
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
      </Table>*/
    )
  }
}

export default DataTable