import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js'

import Header from './components/layout/header';
import Home from './components/pages/Home';
import Analytics from './components/pages/Analytics';
import Reports from './components/pages/Reports';

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

  registerUser=(userObject)=>{
    //Navigated to http://localhost:3000/?name=jason&lastName=Bourne&email=jasonbourne%40gmail.com&password=123456
    Axios.post('localhost:4000/addUser',userObject).then(function(response){
      console.log(response);
    });
  }

  render(){
    return (
      <Router>
        <div className="App" >
          <Header />
          <div class="col-md-12 h-100" style={bodyContainer}>
              <div class="col-md-12 h-100" style={pageBackground}>
                <Route exact path="/" render={props=>(
                  <React.Fragment>
                    <Home registerUser={this.registerUser} />
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
