import React, { Component } from 'react'
import ModalForm from './ModalForm'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

class DataTable extends Component {

  render() {
    const { SearchBar } = Search;
    const items = this.props.items;

    const columns = [
      {
        dataField: 'ts_id',
        text: 'ID'
      }, {
        dataField: 'ts_date_start',
        text: 'Fecha'
      }, {
        dataField: 'customer_name',
        text: 'Cliente'
      }, {
        dataField: 'ts_watch_brand',
        text: 'Marca'
      }, {
        dataField: 'ws_name',
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
  
    return (
      <div>
        <ToolkitProvider
          keyField="ts_id"
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