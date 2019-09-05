import react, { component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modals/Modal'
import DataTable from './Tables/DataTable'
import { CSVLink } from 'react-csv'
import axios from 'axios'

class Customers extends component {
  state = {
    items: []
  }

  getItems() {
    // Make a request for a user with a given ID
    axios.get('/user?ID=12345')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
}

