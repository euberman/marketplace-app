import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  const dispatch = useDispatch()

  const currentPizza = useSelector(state => state.checkout.shippingAddress)
  // console.log(currentPizza)
  let [pizza, setPizza] = useState(currentPizza)

  useEffect(()=> {
    setPizza(currentPizza)
  }, [currentPizza])

  const handleChange = (e) => {
    if(e.target.type === 'text'){
      setPizza({
        ...pizza, 
        topping:e.target.value
      })
    }else if(e.target.type=== "select-one"){
      setPizza({
        ...pizza, 
        size:e.target.value
      })
    }else{
      setPizza({
        ...pizza,
        vegetarian: !pizza.vegetarian
      })
    }
  }

  const handleSubmit = () => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(pizza)
    })
    .then(res=> res.json())
    .then(data => {
      dispatch({type:'UPDATE_PIZZA', pizza:data})
      dispatch({type:'CLEAR_FORM'})
    })
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}