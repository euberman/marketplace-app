import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);

  const currentCartItems = useSelector(state => state.shoppingCart.items)
  const currentUser = useSelector(state => state.user.currentUser)
  const currentCheckout = useSelector(state => state.checkout)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (activeStep === steps.length){
      // console.log("Put place order mechanic here")
      // console.log(currentCartItems)
      // console.log(currentCheckout)
      // console.log(currentUser)
      let nameString = [currentCheckout.address.firstname, currentCheckout.address.lastname].join(' ')
      let paymentString = `VISA ⠀•••• ${currentCheckout.payment.cardNumber.split("-")[3]}`
      let addressString = [currentCheckout.address.address1, currentCheckout.address.city, currentCheckout.address.state, currentCheckout.address.zip, currentCheckout.address.country].join(', ')

      // let currentOrder

      fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          payment: paymentString,
          address: addressString,
          shipped: false
        })
      })
      .then(res => res.json())
      .then(data => {
        currentCartItems.forEach(product => {
          fetch('http://localhost:3000/order_items', {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              order_id: data.id,
              product_id: product.product_id
            })
          })
        })
        dispatch({type: 'EMPTY_CART', cart: {
          items: [],
          subTotal: 0.00,
          count: 0,
          showModal: false
        }})
      })

      // currentCartItems.forEach(product => {
      //   fetch('http://localhost:3000/order_items', {
      //     method: 'POST',
      //     headers: {
      //       "Content-type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       order_id: currentOrder.id,
      //       product_id: 
      //     })
      //   })
      // })
    }
  }, [activeStep])

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </div>
    </React.Fragment>
  );
}