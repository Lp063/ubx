import React,{ Component } from 'react';
import TeamRegistration from '../forms/TeamRegistration';
//import PropTypes from 'prop-types';

class Home extends Component{

  render(){
    return (
      <React.Fragment>
        <div class="col-md-6 offset-md-6">
          <TeamRegistration />
        </div>
      </React.Fragment>
    )
  }
}


export default Home;
