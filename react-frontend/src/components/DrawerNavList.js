import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navList: {
    color: 'black',
    textDecoration: 'none'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    opacity: 0.5
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    marginLeft: theme.spacing(1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
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
  let searchBar = useSelector(state => state.products.searchBarInput)
  let [searchBarInput, setSearchBarInput] = useState(searchBar)

  const handleSort = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'All Products'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: ''})
    } else if (e.target.innerText === 'Price'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'price'})
    } else if (e.target.innerText === 'Rating'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'customer_rating'})
    } else if (e.target.innerText === 'Available Online'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'in_stock'})
    }
  }

  const handleSortAlt = (e) => {
    e.preventDefault()
    if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'All Products'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: ''})
    } else if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'Price'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'price'})
    } else if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'Rating'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'customer_rating'})
    } else if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'Available Online'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'in_stock'})
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setSearchBarInput(e.target.value)
    // dispatch({type: 'SEARCH_PRODUCTS', searchBarInput: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'SEARCH_PRODUCTS', searchBarInput: e.target.firstElementChild.lastElementChild.value.toLowerCase()})
  }

  return (
    <div>
      <ListSubheader inset>Sort Products</ListSubheader>
      <ListItem button onClick={(e) => handleSort(e)} >
        <ListItemIcon>
          <LayersIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="All Products" id="search-target"/>
      </ListItem>
      <ListItem button onClick={(e) => handleSort(e)}>
        <ListItemIcon>
          <AttachMoneyIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="Price" id="search-target"/>
      </ListItem>
      <ListItem button onClick={(e) => handleSort(e)}>
        <ListItemIcon>
          <BarChartIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="Rating" id="search-target"/>
      </ListItem>
      {/* <ListItem button onClick={(e) => handleSort(e)}>
        <ListItemIcon>
          <RssFeedIcon onClick={(e) => handleSortAlt(e)}/>
        </ListItemIcon>
        <ListItemText primary="Available Online" id="search-target"/>
      </ListItem> */}
      <ListItem>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={(e)=>handleSubmit(e)} noValidate>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchBarInput}
              onChange={(e) => handleChange(e)}
            />
            </form>
          </div>
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