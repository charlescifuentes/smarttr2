import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ModalForm from './ModalForm'
import API from '../../API'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Desea borrar este item?')
    if(confirmDelete){
      API.delete('users/' + id)
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
        dataField: 'user_id',
        text: 'ID'
      }, {
        dataField: 'user_name',
        text: 'usuario'
      }, {
        dataField: 'user_firstname',
        text: 'Nombres'
      }, {
        dataField: 'user_lastname',
        text: 'Apellidos'
      }, {
        dataField: 'user_phone',
        text: 'Teléfono'
      }, {
        dataField: 'rol_name',
        text: 'Rol'
      }, {
        dataField: 'actions',
        isDummyField: true,
        text: 'Acciones',
        formatter: (cellContent, row) => {
          return (
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={row} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(row.user_id)}>Borrar</Button>
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <ToolkitProvider
          keyField="user_id"
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