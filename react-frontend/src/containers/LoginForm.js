import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Button, Form, Message, Container, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

const LoginForm = () => {

  return (
    <Container text>
      <Form>
        <Form.Field required>
          <label>Email</label>
          <Input placeholder='user@gmail.com' />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
      {/* <Message>
        New to us? <Link to="/signup">Sign-up</Link>
      </Message> */}
    </Container>
  )


}
export default LoginForm




// const LoginForm = () => {
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

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setInputs(inputs => ({ ...inputs, [name]: value }));
  // };
//   return(
//     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//       <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as='h2' color='teal' textAlign='center'> Log-in to your account </Header>
//         <Form size='large'>
//           <Segment stacked>
//             <Form.Input type='text' name='email' placeholder='E-mail address'
//                         onChange={(e)=> handleChange(e) } />
//             <Form.Input name='password' placeholder='Password' type='password'
//                         onChange={(e)=> handleChange(e) }/>
//             <Button color='green' fluid size='large'> Login </Button>
//           </Segment>
//         </Form>
//         <Message>
//           New to us? <Link to="/signup">Sign-up</Link>
//         </Message>
//       </Grid.Column>
//     </Grid>
//   )
// }
// export default LoginForm;

// export const mapStateToProps = state => ({
//   isLoggedIn: state.isLoggedIn,
//   error: state.error
// });

// export default connect(mapStateToProps)(LoginForm);