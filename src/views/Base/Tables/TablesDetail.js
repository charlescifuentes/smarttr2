import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TablesDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <Button onClick={this.toggle}>Show/Hide</Button>
      </div>
    );
  }
}

export default TablesDetail;
