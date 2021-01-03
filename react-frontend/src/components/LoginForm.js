import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));


function LoginForm() {

  const classes = useStyles();
  
  const [currentUser, setCurrentUser] = useState({ password: '', email: '' });

  // let { username, password } = inputs;
  // const isLoggedIn = useSelector(state => state.isLoggingIn);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch({type:'LOGIN', user:{email: e.target.querySelector('#email').value, password: e.target.querySelector('#password').value}})
    dispatch({type:'CLEAR_FORM'})
    
  }

  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name] : e.target.value
    })
  };
  
  
  return (
    <Container component="main" maxWidth="xs">
      {currentUser.email}

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
       <Typography component="h1" variant="h5"> Sign in </Typography>
        <form className={classes.form} onSubmit={(e)=>handleSubmit(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>handleChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="http://localhost:3001/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default LoginForm