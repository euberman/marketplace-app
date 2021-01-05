import React from 'react';
import { useSelector } from 'react-redux';

import {IconButton, Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function ShoppingCartBadge(){
  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  function showOverlay() {
    console.log('Shopping Cart Btn was clicked')
    document.getElementById('overlay').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  }
  return (
    <IconButton color="inherit" onClick={()=>showOverlay()}>
      <Badge badgeContent={shoppingCartItems.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default ShoppingCartBadge