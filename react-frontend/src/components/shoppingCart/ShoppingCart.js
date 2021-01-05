import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
import {Toolbar, AppBar, Paper, Typography, IconButton, Badge, Grid, Card, Button} from '@material-ui/core';


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


function ShoppingCart(props) {

  const classes = useStyles();

  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  const subTotal          = useSelector(state => state.shoppingCart.subTotal)

  let itemCount = shoppingCartItems.length
  const handleShoppingCartClose = props.handleShoppingCartClose

  return (
    <React.Fragment>
      <div className={classes.sCart}>
          <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h6"> Wally-World MarketPlace </Typography>
                <Button edge="end" color="inherit" onClick={handleShoppingCartClose}>
                    Close
                </Button>
                {/* <ShoppingCartBadge  onClick={handleShoppingCartOpen} 
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                    itemCount={itemCount}/> */}
            </Toolbar>
          </AppBar>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
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
      </div>
    </React.Fragment>
  )
}
export default ShoppingCart



