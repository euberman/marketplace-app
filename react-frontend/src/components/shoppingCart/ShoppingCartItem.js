import React from 'react';
import { useState } from 'react-redux';

import {IconButton, Badge, Typography, Grid, Button, Box} from '@material-ui/core';


function ShoppingCartItem(props){
  
  const {items, setItems} = useState()

  const handleRemoveFromCart = (e) => {
    this.props.removeFromCart(this.props.product, this.props.indexInCart);
  }

  const handleQuantityChange = (e) => {
    this.props.item.quantityInCart = e.target.value;
    // Update total value
    this.forceUpdate();
    this.props.updateAmountToPay(this.props.item);
  }

  

  return (
    <React.Fragment>
      <tr className="items-in-cart">
        <td><img src={this.props.product.image} alt={"producIimage"}></img></td>
        <td>{this.props.product.name}</td>
        <td>${this.props.product.price}</td>
        <td>
          <input type="number" name="quantity" min="1" max="10" onChange={handleQuantityChange} />
        </td>
        <td>${this.props.product.price * this.props.product.quantity}</td>
        <td><i className="fas fa-trash"
              onClick={handleRemoveFromCart}></i></td>
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