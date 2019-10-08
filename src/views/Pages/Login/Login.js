import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
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
      console.log(res.data)
      let data = res.data

      if(data === "error") {
       this.setState({ isValid: false })
      } else {
        sessionStorage.setItem('userData', JSON.stringify(data))
        //this.props.history.push('/')
      }
    })
  }

  clearSession = () => {
    sessionStorage.clear();
  }

  render() {

    if(this.state.isValid === false) {
      const error = <p>Usuario o contraseña invalidos</p>
    }

    console.log(this.state)
    let userData = JSON.parse(sessionStorage.getItem("userData"));
    console.log(userData)
    
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
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" id="username" onChange={this.onChange} value={this.state.username} placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password} placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleLoginSubmmit}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button onClick={this.clearSession} color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
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
