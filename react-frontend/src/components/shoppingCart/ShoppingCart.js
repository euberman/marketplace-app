import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
import {Box, Paper, Typography, Grid, Card, Button} from '@material-ui/core';


import ShoppingCartItem from './ShoppingCartItem'
/*
ShoppingCart structure:

ShoppingCartApp
  Header
    Navigation
    ShoppingCart
  ShoppingCartOverlay
    ShoppingCartProduct
    ShoppingCartTotal
  ProductList
    Product
*/
const useStyles = makeStyles((theme) => ({
  sCart: {
    height: '100%',
    width:'100%',
    display: 'flex',
    flexFlow: 'column',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
}));

// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }
function ShoppingCart(props) {

  const classes = useStyles();

  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  const subTotal = useSelector(state => state.shoppingCart.subTotal)
  const itemCount = shoppingCartItems.length

  return (
    <React.Fragment>
      <Paper id="overlay">
        <section id="shopping-cart">
          <div id="cart-header">
            <span id="cart-title">Shopping Cart</span>
            <i className="far fa-times-circle"
              onClick={this.closeOverlay.bind(this)}></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shoppingCartItems.map(item => <ShoppingCartItem product={item} key={item.id} />)}
            </tbody>
          </table>
          <span id="empty-cart">{(itemCount.length == 0) ? "Shopping cart is empty" : ""}</span>
          <h3 id="cart-total">Cart Total</h3>
          <div id="totals">
            <span>Cart Totals</span>
            <span>Number of items: {itemCount}</span>
            <span>Total: ${subTotal}</span>
          </div>
          <button id="checkout" 
            disabled={itemCount.length == 0 ? true : false} >Checkout</button>
        </section>
      </Paper>
    </React.Fragment>
  )
}
export default ShoppingCart



