import React from 'react';
import { useDispatch } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LayersIcon from '@material-ui/icons/Layers';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import BusinessIcon from '@material-ui/icons/Business';
import BarChartIcon from '@material-ui/icons/BarChart';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navList: {
    color: 'black',
    textDecoration: 'none'
  },
}));

export function MainListItems() {
  const classes = useStyles();

  return (
    <div>
      <NavLink to="/dashboard" className={classes.navList}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/orders" className={classes.navList}>
        <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </NavLink>
      {/* <NavLink to="/dashboard/profile" className={classes.navList}>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </NavLink> */}
    </div>
  );
}

export function SecondaryListItems() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSort = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'All Products'){
      console.log('All Products')
      dispatch({type: 'SORT_PRODUCTS', sortChar: ''})
    } else if (e.target.innerText === 'Price'){
      console.log('Price')
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'price'})
    } else if (e.target.innerText === 'Rating'){
      console.log('Rating')
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'customer_rating'})
    } else if (e.target.innerText === 'Available Online'){
      console.log('Available Online')
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'in_stock'})
    }
  }

  const handleSortAlt = (e) => {
    e.preventDefault()
    debugger
    // if (e.target.innerText === 'All Products'){
    //   console.log('All Products')
    //   dispatch({type: 'SORT_PRODUCTS', sortChar: ''})
    // } else if (e.target.innerText === 'Price'){
    //   console.log('Price')
    //   dispatch({type: 'SORT_PRODUCTS', sortChar: 'price'})
    // } else if (e.target.innerText === 'Rating'){
    //   console.log('Rating')
    //   dispatch({type: 'SORT_PRODUCTS', sortChar: 'customer_rating'})
    // } else if (e.target.innerText === 'Available Online'){
    //   console.log('Available Online')
    //   dispatch({type: 'SORT_PRODUCTS', sortChar: 'in_stock'})
    // }
  }

  return (
    <div>
      <ListSubheader inset>Sort Products</ListSubheader>
      <ListItem button onClick={(e) => handleSort(e)} id="searchTarget">
        <ListItemIcon>
          <LayersIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="All Products" />
      </ListItem>
      <ListItem button onClick={(e) => handleSort(e)}>
        <ListItemIcon>
          <AttachMoneyIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="Price" />
      </ListItem>
      <ListItem button onClick={(e) => handleSort(e)}>
        <ListItemIcon>
          <BarChartIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="Rating" />
      </ListItem>
      <ListItem button onClick={(e) => handleSort(e)}>
        <ListItemIcon>
          <RssFeedIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="Available Online" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem> */}
    </div>
  );
}