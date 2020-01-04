import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/header';
import Menu from './components/layout/menu';
import Analytics from './components/pages/Analytics';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div class="col-md-12" style={bodyContainer}>
            <div class="col-md-2" style={leftSideBar}>
              <Menu />
            </div>
            <div class="col-md-10" style={pageBackground}>
              <Route exact path="/" render={props=>(
                <React.Fragment>
                  <Analytics />
                </React.Fragment>
              )}/>
            </div>
          </div>
      </div>
    </Router>
  );
}

const bodyContainer={
  display: "inline-flex",
  paddingLeft: "0px",
  paddingRight: "0px"
}

const leftSideBar={
  paddingLeft: "0px",
  paddingRight: "0px",
  width: "13% !important"
}

const pageBackground={
  backgroundColor: "#f6f7fb"
}
export default App;
