import React,{ Component } from 'react';
import TeamRegistration from '../forms/TeamRegistration';
//import PropTypes from 'prop-types';

class TeamSignup extends Component{

  render(){
    return (
      <React.Fragment>
        <div className="col-md-6 offset-md-6">
          <TeamRegistration registerUser={this.props.registerUser}/>
        </div>
      </React.Fragment>
    )
  }
}


export default TeamSignup;
