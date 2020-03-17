import React,{ Component } from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';

//import PropTypes from 'prop-types';

class AppLogin extends Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }

  inputFieldUpdate = (event) => {
    this.setState({[event.target.type]:event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.loginFormSubmit(this.state);
  }

  render(){
    return (
      <React.Fragment>
        <Row>
          <Col md={9} style={loginLeftSpace}>
          </Col>
          <Col md={3} sm={12} >
            <Form style={formStyle} onSubmit={this.handleSubmit} >
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'white'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={this.inputFieldUpdate} value={this.state.email} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color:'white'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.inputFieldUpdate} value={this.state.password} />
              </Form.Group>
              <Button style={{position:"absolute",right:"5%"}} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const loginLeftSpace = {
  
}

const formStyle={
  
};

export default AppLogin;
