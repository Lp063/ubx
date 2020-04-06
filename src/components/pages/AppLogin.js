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
    this.props.loginFormSubmit(this.state);
    event.preventDefault();
  }

  render(){
    return (
      <React.Fragment>
        <Row lg={2} md={2} sm={1} xs={1}>
          <Col lg={9} md={9} className="hidden-sm hidden-xs">
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="">
            <Form onSubmit={this.handleSubmit} >
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'white'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="christiano@cr7.com" onChange={this.inputFieldUpdate} value={this.state.email} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color:'white'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="workout" onChange={this.inputFieldUpdate} value={this.state.password} />
              </Form.Group>
              <Button style={{position:"absolute",left:"5%"}} variant="primary" >
                Sign Up
              </Button>
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

/* const loginLeftSpace = {
  backgroundImage:'url(/images/turfSideline1.jpg)',
  height:'100%'
} */

const formStyle={

};

export default AppLogin;
