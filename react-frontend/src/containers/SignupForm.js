import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const SignupForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Sign up for an account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input name='firstName' placeholder='First_Name'/>
          <Form.Input name='lastName' placeholder='Last Name' />
          <Form.Input name='email' placeholder='E-mail address' />
          <Form.Input name='password' placeholder='Password' type='password' 
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Have an Account? <Link to="/login">Log-In</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignupForm