import React from 'react';
import { useSelector } from 'react-redux';

import {IconButton, Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function ShoppingCartBadge(){
  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  const showOverlay = () => {
    document.getElementById('overlay').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  }
  return (
    <IconButton color="inherit" onClick={()=>this.showOverlay()}>
      <Badge badgeContent={shoppingCartItems.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default ShoppingCartBadge