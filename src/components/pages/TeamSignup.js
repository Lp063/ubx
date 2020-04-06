import React,{ Component } from 'react';
import TeamRegistration from '../forms/TeamRegistration';
import { Row, Col, Form, Button} from 'react-bootstrap';

class TeamSignup extends Component{
  constructor(props){
    super(props);
    this.state={};
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitRergistration = (formFields) =>{
    console.log(formFields);
  }

  render(){
    return (
      <React.Fragment>
        <Row style={this.props.pageParentContainerStyle}>
          <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={12} xs={12}>
            <TeamRegistration submitRergistration={this.submitRergistration}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}


export default TeamSignup;
