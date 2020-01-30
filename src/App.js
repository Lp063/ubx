import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js'

import Header from './components/layout/header';
import Home from './components/pages/Home';
import Analytics from './components/pages/Analytics';
import Reports from './components/pages/Reports';

class App extends Component {
  state = {
    requireDateRangePicker:false
  }

  dateRangepickerFunctionality = (required) =>{
    this.setState({requireDateRangePicker:required});
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
                    <Home />
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
