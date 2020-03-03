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
          <Col md={9} >
          </Col>
          <Col md={3} sm={12} className={formStyle}>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'white'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="christiano@cr7.com" onChange={this.inputFieldUpdate} value={this.state.email} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color:'white'}}>Password</Form.Label>
                <Form.Control type="password" placeholder="workout" onChange={this.inputFieldUpdate} value={this.state.password} />
              </Form.Group>
              <Button inSubmit style={{position:"absolute",right:"5%"}} variant="primary" type="submit">
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
