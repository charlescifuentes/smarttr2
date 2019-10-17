import React, { Component } from 'react'
import { Button } from 'reactstrap'
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
      axios.delete('http://colombiaweb.co/smarttr/apirest/public/api/v1/status/' + id)
        .then(res => {
          console.log(res.data);
          this.props.deleteItemFromState(id)
        })
    }
  }

  render() {
    const items = this.props.items;

    const columns = [
      {
        dataField: 'status_id',
        text: 'ID'
      }, {
        dataField: 'status_name',
        text: 'Nombre'
      }, {
        dataField: 'actions',
        isDummyField: true,
        text: 'Acciones',
        formatter: (cellContent, row) => {
          return (
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Editar" item={row} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(row.status_id)}>Borrar</Button>
            </div>
          );
        }
      }
    ];
    
    return (
      <div>
        <BootstrapTable 
          keyField='status_id' 
          data={ items } 
          columns={ columns } 
          pagination={ paginationFactory() }
          bootstrap4 
          striped
          bordered={false}
          wrapperClasses="table-responsive"
        />
      </div>
    )
  }
}

export default DataTable