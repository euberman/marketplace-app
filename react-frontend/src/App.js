
import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Dashboard from './containers/Dashboard';
//import SignUpForm from './containers/SignUpForm';
//import LoginForm from './containers/LoginForm';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Router>
        <Header />

        <Switch>
          <Route path="/" component={() => {
            return <Dashboard />
          }}/>

          <Route path="/login" component={() => {
            return <LoginForm />
          }}/>
          
          <Route path="/signup" component={() => {
            return <SignUpForm />
          }}/>
          
        </Switch>
      </Router> */}
    </div>
);
}

export default App;
