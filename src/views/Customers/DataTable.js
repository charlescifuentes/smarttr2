import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ModalForm from './ModalForm'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import API from '../../API'


class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Desea borrar este item?')
    if(confirmDelete){
      API.delete('customers/' + id)
        .then(res => {
          console.log(res.data);
          this.props.deleteItemFromState(id)
        })
    }
  }

  render() {
    const { SearchBar } = Search;
    const items = this.props.items;

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
        dataField: 'actions',
        isDummyField: true,
        text: 'Acciones',
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

    /*const items = this.props.items.map(item => {
      return (
        <tr key={item.customer_id}>
          <th>{item.customer_nit}</th>
          <td>{item.customer_firstname}</td>
          <td>{item.customer_lastname}</td>
          <td>{item.customer_phone}</td>
          <td>{item.customer_city}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={rowIndex} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(rowIndex.customer_id)}>Borrar</Button>
            </div>
          </td>
        </tr>
      )
    })*/

    return (
      <div>
        <ToolkitProvider
          keyField="customer_id"
          data={ items }
          columns={ columns }
          search
        >
        {
          props => (
            <div>
              <SearchBar { ...props.searchProps } />
              <hr />
              <BootstrapTable
                { ...props.baseProps }
                pagination={ paginationFactory() }
                bootstrap4 
                striped
                bordered={false}
                wrapperClasses="table-responsive"
              />
            </div>
          )
        }
        </ToolkitProvider>
      </div>
    )
  }
}

export default DataTable