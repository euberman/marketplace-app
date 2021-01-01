//import React from 'react'
import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signupNewUser } from '../_actions/userActions';


    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));


function SignupForm() {
  const classes = useStyles();

  let history = useHistory();

  const currentUser = useSelector(state => state.user.currentUser)
  // const allUsers = useSelector(state => state.user.allUsers)
  
  const [user, setUser] = useState(currentUser);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    let emailVar = e.target.querySelector('#email').value
    let passwordVar = e.target.querySelector('#password').value
    let firstNameVar = e.target.querySelector('#firstName').value
    let lastNameVar = e.target.querySelector('#lastName').value

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": emailVar,
        "password": passwordVar,
        "first_name": firstNameVar,
        "last_name": lastNameVar
      })
    })
    .then(res => res.json())
    .then((data) => {
      dispatch(signupNewUser(data))
      setUser(data)
      history.push('/dashboard')
    })
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        {user.email}
        {currentUser.email}

        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                        />
                  </Grid>
                  <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                  </Grid>
                  <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                  </Grid>
                </Grid>

                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                  Sign Up
                </Button>

                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="http://localhost:3001/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
            </form>
        </div>
    </Container>
  );
}
export default SignupForm