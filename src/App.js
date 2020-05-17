import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import Axios from 'axios';
import history from "./utils/history";

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/layout/header';
import AppLogin from './components/pages/AppLogin';
import TeamSignup from './components/pages/TeamSignup';
import TeamManager from './components/pages/TeamManager/TeamManager';

class App extends Component {
  
  state={
    teamRegistration:{
      name:"",
      lastName:"",
      email:"",
      password:"",
      username:""
    }
  };

  //https://reacttraining.com/react-router/web/api/Hooks/usehistory
  
  loginFormSubmit = (loginFormObject) => {
    // return <Redirect to='/teamManager' />
    console.log(loginFormObject);
    history.push("/teamManager");
  }

  registerUser=(userObject)=>{
    //Navigated to http://localhost:3000/?name=jason&lastName=Bourne&email=jasonbourne%40gmail.com&password=123456
    Axios.post('/api/addUser',userObject).then(function(response){
      console.log(response);
    });
  }
  
  render(){
    return (
      <Router history={history}>
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AppLogin  pageParentContainerStyle={pageParentContainer} loginFormSubmit={this.loginFormSubmit} />
            </React.Fragment>
          )}/>
          <Route exact path="/signUpTeam" render={props=>(
            <React.Fragment>
              <TeamSignup  pageParentContainerStyle={pageParentContainer} registerUser={this.registerUser} />
            </React.Fragment>
          )}/>
          <Route exact path="/teamManager" render={props=>(
            <React.Fragment>
              <TeamManager pageParentContainerStyle={pageParentContainer}  />
            </React.Fragment>
          )}/>
      </Router>
    //
    );
  }
}

const pageParentContainer={
  padding:"13px 0px 0px 0px",
  width: "100%",
}

export default App;