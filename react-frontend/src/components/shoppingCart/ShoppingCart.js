import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {Toolbar, AppBar, Paper, Box, Typography, IconButton, Badge, Grid, Card, Button, Table} from '@material-ui/core';

import ShoppingCartItem from './ShoppingCartItem'
import { PlayCircleFilledWhite } from '@material-ui/icons';
// import { setupCheckout } from "../../_actions/checkoutActions";


const useStyles = makeStyles((theme) => ({
  sCart: {
    height: '100%',
    minWidth: 800,
    width:'100%',
    display: 'flex',
    flexFlow: 'column',
    alignSelf: 'stretch',
    padding: 0
  },
  topBar: {
    height: 50,
    width:'100%',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
    background: '#1976d2',
    color: 'white', 
  },
  topBarTitle: {
    flexGrow: 1,
    marginLeft: 20,
    width: '80%'
  },
  topBarClose: {
    width:'10%'
  },
  tableContainer: {
    width: '100%',
    padding:15,
    display: 'flex',
  },
  cartTable: {
    width:'100%'
  },
  totalDetailsContainer: {
    display: 'flex',
    width: '100%',
    padding:15,
    minHeight: 0,
    justifyItems: 'end',
    flexDirection:"column"
  },
  checkoutBtnContainer:{
    // height: 50,
    display: 'flex',
    width: '100%',
    padding:15,
    lineSpacing: 1.1,
    justifyContent: 'flex-end'
  },
  checkoutBtn:{
    
  },
  totalDetails: {
    width: '100%',
    textAlign: 'right',
    paddingRight: 20
  }
}));


function ShoppingCart(props) {

  const classes = useStyles();

  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  const subTotal          = useSelector(state => state.shoppingCart.subTotal)

  let itemCount = shoppingCartItems.length
  const handleShoppingCartClose = props.handleShoppingCartClose
  const handleRerouteToCheckout = props.handleRerouteToCheckout
  // const setupCheckout = props.setupCheckout
  // const handleCheckoutBtnClick = (e) => {
  //   console.log('Checkout btn Clicked')
  //   props.handleShoppingCartClose()
  //   props.setupCheckout()
  // }
  return (
    <React.Fragment>
      <Box flexDirection="column" alignContent="stretch" className={classes.sCart}>
          <Box container display="flex" color="primary" className={classes.topBar} >
              <Box item className={classes.topBarTitle}>
                <Typography component="h1" variant="h6">Shopping Cart </Typography>
              </Box>
              <Box item className={classes.topBarClose}>
                <Button edge="end" color="inherit" onClick={handleShoppingCartClose}> Close </Button>
              </Box>
          </Box>
          <Box className={classes.tableContainer}>
              <table className={classes.cartTable}>
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
          </Box>
          <Box className={classes.totalDetailsContainer} >
              <Box className={classes.totalDetails} >
                <h4>Number of items: {itemCount} </h4>
              </Box>
              <Box className={classes.totalDetails}>
                <h3>Cart Total: ${subTotal.toFixed(2)}</h3>
              </Box>
          </Box>
          <Box className={classes.checkoutBtnContainer}>
            
            <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.checkoutBtn} 
                  onClick={handleRerouteToCheckout}>Checkout</Button>
          </Box>
      </Box>
    </React.Fragment>
  )
}
export default ShoppingCart



