
import React from 'react';
// eslint-disable-next-line
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Dashboard from './containers/Dashboard';
import SignupForm from './containers/SignupForm';
import LoginForm from './containers/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
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
