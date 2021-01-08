import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const currentCheckout = useSelector(state => state.checkout)
  const [checkout, setCheckout] = useState(currentCheckout)

  const currentUser = useSelector(state=> state.user.currentUser)


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkout.orderItems.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${checkout.total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{checkout.address.firstname + ' ' + checkout.address.lastname}</Typography>
          <Typography gutterBottom>{checkout.address.address1 + ', ' + checkout.address.city + ', ' + checkout.address.state + ', ' + checkout.address.zip + ', ' + checkout.address.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card Name:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{checkout.payment.cardName}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{checkout.payment.cardNumber}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card Expiration Date:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{checkout.payment.expDate}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card CVV</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{checkout.payment.cvv}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}