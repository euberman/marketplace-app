import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { getLocalCurrentUser, setLocalCurrentUser } from '../localServices';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade, } from '@material-ui/core';

import { MainListItems, SecondaryListItems } from '../components/DrawerNavList';
import ProductList from '../components/product/ProductList'
// import ShoppingCartBadge from '../components/shoppingCart/ShoppingCartBadge'
import ShoppingCart from '../components/shoppingCart/ShoppingCart'
import ProductPage from '../components/product/ProductPage'
import OrdersList from 'components/OrdersList';
import Checkout from '../components/checkout/Checkout';

import { setupCheckout } from "../_actions/checkoutActions";

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex'
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
      },
      navList: {
        color: 'black',
        textDecoration: 'none'
      },
      logoutButton: {
        fontSize: 18
      }
    }));

function Dashboard() {
  let history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  
  const [shoppingCartOpen, setShoppingCartOpen] = React.useState(false);
  const handleShoppingCartOpen = () => setShoppingCartOpen(true);
  const handleShoppingCartClose = () => setShoppingCartOpen(false);

  const shoppingCart = useSelector(state => state.shoppingCart)
  const currentUser = useSelector(state => state.user.currentUser)

  const products = useSelector(state => state.products.allProducts)

  const handleRerouteToCheckout = () => {
    console.log('shoppingCart', shoppingCart)
    console.log('currentUser', currentUser)
    setShoppingCartOpen(false)
    setupCheckout(currentUser, shoppingCart, dispatch)
    history.push('dashboard/checkout')
  }

  let { path, url } = useRouteMatch();

  let user = getLocalCurrentUser()

  useEffect(() => {
    console.log(user)
    if (!user){
      history.push('/login')
    } else {
      dispatch({type: 'UPDATE_CURRENT_USER', user: user})
    }
  }, [])

  const logout = (event) => {
    console.log(event.target)
    setLocalCurrentUser(null)
    dispatch({type: 'LOGOUT', user: {}})
    history.push('/login')
  }

  const login = (event) => {
    console.log(event.target)
    history.push('/login')
  }

  return (
    <div className={clsx(classes.root)}  >
      <CssBaseline />

      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
              <MenuIcon />
            </IconButton>

            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}> Wally-World MarketPlace </Typography>
            {(getLocalCurrentUser()) ? <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.logoutButton} onClick={(e) => logout(e)} >
              Log Out
            </IconButton> : <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.logoutButton} onClick={(e) => login(e)} >
              Log In
            </IconButton>}
            {/* <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.logoutButton} onClick={(e) => logout(e)} >
              Log Out
            </IconButton> */}
            <IconButton color="inherit" onClick={handleShoppingCartOpen}>
                <Badge badgeContent={shoppingCart.count} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }} open={open} >
          <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
          </div>
          <Divider />
          <List>
            <MainListItems />
          </List>
          <Divider />
          <List>
            <SecondaryListItems />
          </List>
          <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" 
            className={classes.modal}
            open={shoppingCartOpen}
            onClose={handleShoppingCartClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
            <Fade in={shoppingCartOpen}>
              <div className={classes.paper}>
                <ShoppingCart handleRerouteToCheckout={handleRerouteToCheckout} handleShoppingCartClose={handleShoppingCartClose}/>
              </div>
            </Fade>
          </Modal>
          <Switch>
            <Route exact path={path}>
              <ProductList />
            </Route>
            <Route exact path={`${path}/orders`}>
              <OrdersList />
            </Route>
            <Route exact path={`${path}/checkout`}>
              <Checkout />
            </Route>
            <Route path={`${path}/:productId`}>
              <ProductPage />
            </Route>
            
          </Switch>
        </Container>
      </main>
    </div>
  );
}
export default Dashboard

// {/* Chart */}
// <Grid item xs={12} md={8} lg={9}>
// <Paper className={fixedHeightPaper}>
//     <Chart />
// </Paper>
// </Grid>

// {/* Recent Deposits */}
// <Grid item xs={12} md={4} lg={3}>
// <Paper className={fixedHeightPaper}>
//     <Deposits />
// </Paper>
// </Grid>