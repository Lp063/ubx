import React,{ Component } from 'react';
import Axios from 'axios';
import { Col } from 'react-bootstrap';


import history from "../../utils/history";

import TeamRegistration from '../forms/TeamRegistration';

class TeamSignup extends Component{
  constructor(props){
    super(props);
    this.state={};
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitRergistration = (formFields) =>{
    Axios.post('/api/user',formFields)
    .then(function(res) {
      if (res.affectedRows === 1) {
        history.push("/");
      } else {
        
      }
      /* res=>this.setState({ todos:res.data }) */
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  render(){
    return (
      <React.Fragment>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={12} xs={12}>
          <TeamRegistration submitRergistration={this.submitRergistration} />
        </Col>
      </React.Fragment>
    )
  }
}


export default TeamSignup;
