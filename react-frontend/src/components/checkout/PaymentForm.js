import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  const dispatch = useDispatch()

  const currentPayment = useSelector(state => state.checkout.payment)
  let [payment, setPayment] = useState(currentPayment)

  useEffect(()=> {
    dispatch({type:'ADD_PAYMENT', payment: payment})
  }, [payment])

  const handleChange = (e) => {
      setPayment({
        ...payment,
        [e.target.name] : e.target.value
      });
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" name="cardName" label="Name on card (First Last)" fullWidth autoComplete="cc-name" value={payment.cardName} onChange={(e) => handleChange(e)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number (XXXX-XXXX-XXXX-XXXX)"
            fullWidth
            value={payment.cardNumber}
            autoComplete="cc-number"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" name="expDate" label="Expiry date (MM/DD/YY)" fullWidth value={payment.expDate} autoComplete="cc-exp" onChange={(e) => handleChange(e)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={payment.cvv}
            autoComplete="cc-csc"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}