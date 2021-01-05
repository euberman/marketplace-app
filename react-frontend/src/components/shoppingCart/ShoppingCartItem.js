import React from 'react';
import { useState, useSelector, useDispatch } from 'react-redux';

import {IconButton, Badge, Typography, Grid, Button, Box} from '@material-ui/core';


function ShoppingCartItem(props){
  // const products = useSelector(state => state.products.allProducts)
  // const {items, setItems} = useState()
  const dispatch = useDispatch();
  const handleRemoveFromCart = (e) => {
    //this.props.removeFromCart(this.props.product, this.props.indexInCart);
    
    console.log('Remove from cart event fired')
    dispatch({type: 'REMOVE_FROM_CART', product: props.product})
  }
  

  const handleQuantityChange = (e) => {
    console.log('handleQuantityChange in cart event fired')
    // this.props.item.quantityInCart = e.target.value;
    // // Update total value
    // this.forceUpdate();
    // this.props.updateAmountToPay(this.props.item);
  }

  

  return (
    <React.Fragment>
      <tr className="items-in-cart">
        <td><img width={75} height={75} src={props.product.image_url} alt={"producIimage"}></img></td>
        <td>{props.product.title}</td>
        <td>${props.product.price}</td>
        <td>
          <input value={props.product.qty || 1} type="number" name="quantity" min="1" max="10" onChange={handleQuantityChange} />
        </td>
        {/* <td>${props.product.price * props.product.quantity}</td> */}
        <td>${props.product.price}</td>
        <td><i className="fas fa-trash" onClick={handleRemoveFromCart}></i></td>
      </tr>
    </React.Fragment>
  )
}
export default ShoppingCartItem

// function ShoppingCartItem(props){
//   return (
//     <React.Fragment>
//       <Grid item key={props.product.id}>
//         <Card className={classes.card}>
//           <img className={classes.scProductImage} src={props.product.image_url} title={props.product.name} />
//             <Typography className={classes.price}>
//               $ {props.product.price}
//             </Typography>
//             <Typography>
//               {props.product.brand}
//             </Typography>
//             <Typography>
//               {props.product.title}
//             </Typography>
//             <Box className={classes.cardActions}>
//               <Rating name="half-rating-read" value={props.product.customer_rating} precision={0.5} readOnly />
//               {props.product.num_reviews}
//             </Box>
          
//             <Box>{ props.product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
//             <Button onClick={(e) => this.addToCart()} className={classes.addToCartBtn} size='medium' variant="contained" color="primary">
//               Add to Cart
//             </Button>
          
//         </Card>
//       </Grid>
//     </React.Fragment>
// }
// export default ShoppingCartItem