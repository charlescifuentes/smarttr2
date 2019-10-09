import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import Axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isValid: ''
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLoginSubmmit = e => {
    e.preventDefault()
    const item = {
      username: this.state.username,
      password: this.state.password
    }
    Axios.post('http://colombiaweb.co/smarttr/apirest/public/api/v1/users/login', item)
    .then(res => {
      let data = res.data

      if(data === "error") {
       this.setState({ isValid: false })
      } else {
        sessionStorage.setItem('userData', JSON.stringify(data))
        sessionStorage.setItem('isLogged', 'ok')
        this.setState({ isValid: 'ok' })
      }
    })
  }

  clearSession = () => {
    sessionStorage.clear();
  }

  render() {
    const error = <Alert color="danger">Usuario o Contraseña incorrectos!</Alert>
    let isLogged = sessionStorage.getItem("isLogged") 
    
    if(isLogged === 'ok') {
      this.props.history.push('/')
    }
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Ingresa con tu cuenta</p>
                      {this.state.isValid === false && error}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" id="username" onChange={this.onChange} value={this.state.username} placeholder="Usuario" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password} placeholder="Contraseña" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submmit" color="primary" className="px-4" onClick={this.handleLoginSubmmit}>Ingresar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Olvidó la contraseña?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>SMART TR</h2>
                      <p>Sistema administrativo para Taller de Relojes, inventarios y ventas</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
