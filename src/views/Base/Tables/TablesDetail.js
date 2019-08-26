import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TablesDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    customers: []
  }

  async componentDidMount() {
    const res = await axios.get('http://colombiaweb.co/smarttr/apirest/public/api/v1/customers');
    this.setState({customers: res.data});
    console.log(this.state.customers);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default TablesDetail;
