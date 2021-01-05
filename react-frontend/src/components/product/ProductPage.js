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
      justifyContent: 'space-evenly',
      alignContent: 'center'
    },
    title: {fontSize: 18, fontWeight: 'bold'},
    description: {color: '#b1b1b1', marginBottom: 10},
    price: {
      color: 'red',
      fontSize: 17,
      fontWeight: 'bold',
    },
    notInStock: {textAlign: 'center'},
    submit: {
        margin: theme.spacing(1, 0, 5),
    },
  }));

function ProductPage() {
    const classes = useStyles();

    let { productId } = useParams();
    const products = useSelector(state => state.products.allProducts)
    let product = products.find(p => p.id === parseInt(productId))

    const addToCart = () => {

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
                        <Typography >
                            $ {product.price}
                        </Typography>
                    
                        <Typography className={classes.title}>
                            {product.brand}
                        </Typography>
                        <Typography >
                            {product.title}
                        </Typography>
                        <br/>
                        <Typography>Leave a Review</Typography>
                        <Box >
                            {/* make not readOnly */}
                            <Rating name="half-rating-read" value={product.customer_rating} precision={0.5} readOnly />
                            {product.num_reviews}
                        </Box>
                        <CardActions >
                        <Box>{ product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
                        <Button size='medium' variant="contained" color="primary" onClick={() => addToCart()}>
                        Add to Cart
                        </Button>
                    </CardActions>
                    </CardContent>

                </Card>
            </Grid>
        </React.Fragment>
    )

}

export default ProductPage;