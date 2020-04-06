import React,{ Component } from 'react';
import TeamRegistration from '../forms/TeamRegistration';
import { Row, Col, Form, Button} from 'react-bootstrap';

class TeamSignup extends Component{
  constructor(props){
    super(props);
    this.state={};
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return (
      <React.Fragment>
        <Row style={this.props.pageParentContainerStyle}>
          <Col md={{ span: 6, offset: 3 }}>
            <TeamRegistration registerUser={this.props.registerUser}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}


export default TeamSignup;
