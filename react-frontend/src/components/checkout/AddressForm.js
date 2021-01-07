import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { setupCheckout, addAddress } from "../../_actions/checkoutActions";

export default function AddressForm() {
  const dispatch = useDispatch()
  useEffect(()=>{

  })  
  // const currentUser = useSelector(state=> state.user.currentUser)
  
  const currentAddress = useSelector(state => state.checkout.address)
  let [address, setAddress] = useState(currentAddress)
  useEffect(()=> {
    setAddress(currentAddress)
  }, [currentAddress])

  const handleChange = (e) => {
      setAddress({
        ...address,
        [e.target.name] : e.target.value
      });
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
            defaultValue={address.firstname}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            defaultValue={address.lastname}
            onChange={(e)=>handleChange(e)}
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
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            onChange={(e)=>handleChange(e)}
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
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state" 
            name="state" 
            label="State" 
            fullWidth 
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={(e)=>handleChange(e)}
          />
        </Grid> */}
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