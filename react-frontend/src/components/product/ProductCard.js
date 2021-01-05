import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import {useDispatch} from 'react-redux'
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  card: {
    minWidth: 200,
    width: 250,
    height:450,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  cardMedia: {
    width:150, minHeight:175, margin: 'auto', flex: 1
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  price: {
    color: 'red',
    fontSize: 17,
    fontWeight: 'bold',
  },
  notInStock: {textAlign: 'center'},
  brandLink: {
    color: '#212121',
    textDecoration: null
  }
}));

function ProductCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const addToCart = () => {
    const currentStateCartItems = useSelector(state => state.shoppingCart.items)
    const productInCart = currentStateCartItems.find(({ product_id }) => product_id === props.product.product_id)
    console.log('productInCart', productInCart)
    let cartItem;

    if (productInCart) {
      let updateQty = productInCart.qty + 1
      let updatedSubTotal = updatedQty * productInCart.price
      cartItem = {
        ...productInCart,
        qty: updateQty ,
        subTotal : updatedSubTotal
      }
    } else {
      cartItem = {
        image_url: props.product.image_url,
        title: props.product.title,
        qty: 1,
        product_id: props.product.product_id,
        price: props.product.price,
        subTotal: props.product.price
      }
    }
    // const current
    const currentLocalItems = Window.localStorage.getItem('cartItems')
    
    dispatch({type: 'ADD_TO_CART', product: props.product})
  }
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Grid item key={props.product.id}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={props.product.image_url} title={props.product.name} />

          <CardContent className={classes.cardContent}>
            <Typography className={classes.price}>
              $ {props.product.price}
            </Typography>
          
            <Typography className={classes.title}>
              <Link to={`/dashboard/${props.product.id}`} className={classes.brandLink}>{props.product.brand}</Link>

            </Typography>
            <Typography>
              {props.product.title}
            </Typography>
            <Box className={classes.cardActions}>
              <Rating name="half-rating-read" value={props.product.customer_rating} precision={0.5} readOnly />
              {props.product.num_reviews}
            </Box>
          </CardContent>
          
          <CardActions className={classes.cardActions}>
            <Box>{ props.product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
            <Button onClick={() => addToCart()} className={classes.addToCartBtn} size='medium' variant="contained" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
export default ProductCard;