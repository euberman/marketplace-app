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

  const currentUser = useSelector(state=> state.user.currentUser)
  const currentAddress = useSelector(state => state.checkout.address)
  let [address, setAddress] = useState(currentAddress)
  useEffect(()=> {
    dispatch({type:'ADD_ADDRESS', address: address})
  }, [address])

  const handleChange = (e) => {
    // debugger
      setAddress({
        ...address,
        [e.target.name] : e.target.value
      });
      // console.log('address', address)
      // console.log('currentAddress', currentAddress)
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
            name="firstname"
            label="First name"
            fullWidth
            defaultValue={address.firstname}
            value={address.firstname}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="lastname"
            label="Last name"
            fullWidth
            defaultValue={address.lastname}
            value={address.lastname}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address1"
            label="Address line 1"
            fullWidth
            value={address.address1}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            value={address.address2}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="city"
            label="City"
            fullWidth
            value={address.city}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            name="state" 
            label="State" 
            fullWidth
            value={address.state}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="zip"
            label="Zip / Postal code"
            fullWidth
            value={address.zip}
            onChange={(e)=>handleChange(e)}
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