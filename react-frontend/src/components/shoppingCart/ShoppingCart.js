import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
import {Toolbar, Paper, Typography, IconButton, Badge, Grid, Card, Button} from '@material-ui/core';


import ShoppingCartItem from './ShoppingCartItem'
// import { mergeClasses } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  sCart: {
    height: '100%',
    width:800,
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
  const subTotal          = useSelector(state => state.shoppingCart.subTotal)
  let itemCount = shoppingCartItems.length
  const handleShoppingCartClose = props.handleShoppingCartClose
  return (
    <React.Fragment>
      <div className={classes.sCart}>
        <section id="shopping-cart">
          <Toolbar className={classes.toolbar}>
              <Typography component="h1" variant="h6"> Wally-World MarketPlace </Typography>
              <Button edge="end" color="inherit" onClick={handleShoppingCartClose}>
                  Close
              </Button>
              {/* <ShoppingCartBadge  onClick={handleShoppingCartOpen} 
                                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                  itemCount={itemCount}/> */}
          </Toolbar>
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
              {
                  shoppingCartItems.map((item,index) => {
                      return <ShoppingCartItem product={item} indexInCart={index} key={item.id} />
                  })
              }
            </tbody>
          </table>
          <span id="empty-cart">{(itemCount === 0) ? "Shopping cart is empty" : ""}</span>
          <h3 id="cart-total">Cart Total</h3>
          <div id="totals">
            <span>Cart Totals</span>
            <span>Number of items: {itemCount}</span>
            <span>Total: ${subTotal}</span>
          </div>
          <button id="checkout" 
            disabled={itemCount === 0 ? true : false} >Checkout</button>
        </section>
      </div>
    </React.Fragment>
  )
}
export default ShoppingCart



