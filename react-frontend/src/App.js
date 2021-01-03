
import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { getProducts } from './_actions/productActions'

import Dashboard from './containers/Dashboard';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';



function App() {

    const dispatch = useDispatch()

    useEffect(()=> {
      fetch('http://localhost:3000/products')
        .then(resp => resp.json())
        .then(data => {
          dispatch(getProducts(data))
        })
    }, [])


  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/dashboard" component={() => {
            return <Dashboard />
          }}/>

          <Route path="/login" component={() => {
            return <LoginForm />
          }}/>
          
          <Route path="/signup" component={() => {
            return <SignupForm />
          }}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App