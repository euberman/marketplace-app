// import React from 'react';
import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

const LoginForm = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [currentUser, setCurrentUser] = useState({
    
  // });

  // let { username, password } = inputs;
  // const isLoggedIn = useSelector(state => state.isLoggingIn);
  // const dispatch = useDispatch();

  // // reset login status
  // useEffect(() => { 
  //     dispatch(userActions.logout()); 
  // }, []);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: value }));
  };


  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'> Log-in to your account </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input name='email' placeholder='E-mail address' />
            <Form.Input name='password' placeholder='Password' type='password'/>
            <Button color='teal' fluid size='large'> Login </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign-up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
export default LoginForm;

// export const mapStateToProps = state => ({
//   isLoggedIn: state.isLoggedIn,
//   error: state.error
// });

// export default connect(mapStateToProps)(LoginForm);