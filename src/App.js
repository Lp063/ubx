import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import history from "./utils/history";

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/layout/header';
import AppLogin from './components/pages/AppLogin';
import TeamSignup from './components/pages/TeamSignup';
import TeamManager from './components/pages/TeamManager/TeamManager';


Axios.defaults.baseURL = 'http://localhost:4000';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class App extends Component {
  
  state={
    user_isLoggedIn:false,
    teamRegistration:{
      name:"",
      lastName:"",
      email:"",
      password:"",
      username:""
    }
  };

  
 //let history = useHistory();

  //https://reacttraining.com/react-router/web/api/Hooks/usehistory
  
  componentDidMount(){
    /* Axios.get('/getAllUsers').then(function(response){
      console.log(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    }); */
  }

  loginFormSubmit = (loginFormObject) => {
    //window.location="/teamManager";
    Axios.post('http://localhost:4000/api/login',loginFormObject).then(function(response){
      if (typeof response.data.token != "undefined") {
        //state.user_isLoggedIn=true;
        //this.setLoggedin();
        localStorage.setItem('authToken', response.data.token);
        history.push("/teamManager");
        //return <Redirect to='/teamManager' />
      }
    });
    //history.push("/teamManager");
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
          <Switch>
            <Route exact path="/" render={(props)=><AppLogin  pageParentContainerStyle={pageParentContainer} loginFormSubmit={this.loginFormSubmit} />} />
            <Route exact path="/signUpTeam" render={props=>(<TeamSignup  pageParentContainerStyle={pageParentContainer} registerUser={this.registerUser} />)}/>
            <Route exact path="/teamManager" render={props=>(<TeamManager pageParentContainerStyle={pageParentContainer}  />)}/>
          </Switch>
      </Router>
    //
    );
  }
}

const pageParentContainer={
  padding:"13px 0px 0px 0px",
  /* width: "100%", */
}

export default App;