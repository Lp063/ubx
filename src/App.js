import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js'

import Header from './components/layout/header';
import AppLogin from './components/pages/AppLogin';
import TeamSignup from './components/pages/TeamSignup';
import Analytics from './components/pages/Analytics';
import Reports from './components/pages/Reports';


Axios.defaults.baseURL = 'http://localhost:4000';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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

  
 //let history = useHistory();

  //https://reacttraining.com/react-router/web/api/Hooks/usehistory
  
  componentDidMount(){
    Axios.get('/getAllUsers').then(function(response){
      console.log(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  loginFormSubmit = (loginFormObject) => {
    console.log(loginFormObject);
  }

  registerUser=(userObject)=>{
    //Navigated to http://localhost:3000/?name=jason&lastName=Bourne&email=jasonbourne%40gmail.com&password=123456
    Axios.post('/api/addUser',userObject).then(function(response){
      console.log(response);
    });
  }

  render(){
    return (
      <Router>
        <div className="App" /* style={{
          height: '100vh',
          backgroundImage:'url(/images/turfSideline1.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} */>
          <Header />
          <div className="col-md-12 h-100" style={bodyContainer}>
              <div className="col-md-12 h-100" style={pageBackground}>
                <Route exact path="/" render={props=>(
                  <React.Fragment>
                    <AppLogin loginFormSubmit={this.loginFormSubmit} />
                  </React.Fragment>
                )}/>
                <Route exact path="/signUpTeam" render={props=>(
                  <React.Fragment>
                    <TeamSignup registerUser={this.registerUser} />
                  </React.Fragment>
                )}/>
                <Route exact path="/analytics" render={props=>(
                  <React.Fragment>
                    <Analytics  />
                  </React.Fragment>
                )}/>
                <Route exact path="/reports" render={props=>(
                  <React.Fragment>
                    <Reports />
                  </React.Fragment>
                )}/>
              </div>
            </div>
        </div>
      </Router>
    );
  }
}

const bodyContainer={
  display: "inline-flex",
  paddingTop: "2%"
}


const pageBackground={
  paddingLeft:"0px",
  paddingRight:"0px"
}
export default App;
