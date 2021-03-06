
import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { getProducts } from './_actions/productActions'
import { getUsers } from './_actions/userActions'

import Dashboard from './containers/Dashboard';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Checkout from './components/checkout/Checkout';


function App() {

  const dispatch = useDispatch()

    useEffect(()=> {
      fetch('http://localhost:3000/products')
        .then(resp => resp.json())
        .then(data => {
          dispatch(getProducts(data))
        })
      fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        dispatch(getUsers(data))
      })
      fetch('http://localhost:3000/orders')
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'GET_ORDERS', orders: data})
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

          <Route path="/checkout" component={() => {
            return <Checkout />
          }}/>

          <Route component={() => {
            return <Redirect to='/login' />
          }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App
