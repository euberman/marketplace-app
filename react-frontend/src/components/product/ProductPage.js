import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router"
// import { Link } from "react-router-dom";
// import {
//     BrowserRouter as useParams
//   } from "react-router-dom";

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
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    card: {
      align: 'center',
      margin: theme.spacing(3, 10, 0, 10),
      minWidth: 200,
    //   width: 250,
      height:450,
      padding: 5,
      display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-evenly'
    },
    brand: {
      fontSize: 12
    },
    cardMedia: {
      width:250, 
      minHeight:300, 
      margin: theme.spacing(1, 2, 1, 2), 
      display: 'block'
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
      // justifyContent: 'space-evenly',
      alignContent: 'center',
      paddingLeft: theme.spacing(0)
    },
    title: {fontSize: 18, fontWeight: 'bold'},
    description: {color: '#b1b1b1', marginBottom: 10},
    price: {
      color: '#B12704',
      fontSize: 17,
      fontWeight: 'bold',
      display: 'flex',
    },
    notInStock: {textAlign: 'center'},
    submit: {
        margin: theme.spacing(1, 0, 5),
    },
    dataLabel: {
      color: '#9e9e9e',
      display: 'flex',
      fontSize: 14,
      marginRight: theme.spacing(1)
    },
    inStock: {
      color: '#007600',
      display: 'flex',
      fontSize: 17,
    },
    twoDayShipping: {
      color: 'black',
      display: 'flex',
      marginLeft: theme.spacing(0.5),
      fontSize: 14
    }
  }));

function ProductPage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    let [rating, setRating] = useState(0)


    let { productId } = useParams();
    const products = useSelector(state => state.products.allProducts)
    let product = products.find(p => p.id === parseInt(productId))
    // console.log(parseFloat(product.customer_rating))

    let [numReviews, setNumReviews] = useState(product.num_reviews)
    debugger
    let [prodRating, setProdRating] = useState(parseFloat(product.customer_rating))

    const addToCart = () => {
      dispatch({type: 'ADD_TO_CART', product: product})
    }

    // const handleSubmit = (e) => {
    //     console.log(e)
    //     product.num_reviews += 1
    // }

    return (
        <React.Fragment>
            <Grid item key={product.id}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={product.image_url}
                        title={product.title}
                    />
                    <CardContent >
                        <Typography className={classes.brand}>
                            Brand: {product.brand}
                        </Typography>
                        <Typography >
                            {product.title}
                        </Typography>
                        <Box className={classes.cardActions}>
                            {/* make not readOnly */}
                            <Rating name="half-rating-read" value={prodRating} precision={0.5} readOnly />
                            {numReviews}
                        </Box>
                        <hr />
                        <Typography className={classes.price}>
                            <div className={classes.dataLabel}>Price:</div> ${product.price}
                        </Typography>


                        <Box className={classes.inStock}>{ product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
                        <Typography className={classes.twoDayShipping}>{product.two_day_shipping_eligible ? " Eligible for two day shipping from, and s" : "S"}old by {product.store_name.split(".")[0]}</Typography>
                        <hr />
                        
                        <Typography className={classes.dataLabel}>
                            Department: <div className={classes.twoDayShipping}>{product.department}</div>
                        </Typography>
                        <br/>
                      {/* <Box >
                        {product.two_day_shipping_eligible ? "and eligible for two day shipping" : ""}
                      </Box> */}
                      <CardActions className={classes.cardActions}>
                          
                        <Button size='medium' variant="contained" color="primary" onClick={() => addToCart()}>
                          Add to Cart
                        </Button>
                      </CardActions>
                      <br />
                      <Typography>Leave a Review:</Typography>
                      <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                          name="simple-controlled"
                          value={rating}
                          onChange={(event, newRating) => {
                            setRating(newRating);

                            let tempNumRev = product.num_reviews + 1
                            setNumReviews(tempNumRev)

                            let tempVar
                            if (product.num_reviews === NaN){
                              tempVar = 0
                            }
                            if (prodRating === NaN) {
                              prodRating = 1
                              setProdRating(1)
                            }
                            
                            let tempCustRating = ((prodRating * tempVar) + newRating) / tempNumRev

                            if (tempCustRating === NaN){
                              tempCustRating = 1
                            }
                            setProdRating(tempCustRating)
                            
                            fetch(`http://localhost:3000/products/${product.id}`, {
                              method: 'PATCH',
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                num_reviews: tempNumRev,
                                customer_rating: tempCustRating
                              })
                            })
                          }}
                        />
                      </Box>
                    </CardContent>

                </Card>
            </Grid>
        </React.Fragment>
    )

}

export default ProductPage;