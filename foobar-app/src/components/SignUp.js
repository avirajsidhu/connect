import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid, Header, Segment } from 'semantic-ui-react'

import axios from 'axios'

import {
  signUp
} from '../apis/signup.js';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      userName: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleClick = async (e) => {
    const response = await signUp(this.state.name, this.state.userName, this.state.email, this.state.password);

    if (response.result == 'success') {
      alert("Registered. You can login now");
      this.props.history.push('/');
    } else {
      alert("Not Registered!");
      console.log(response.message);
    }
  }

  render(){
    const{
      name,
      userName,
      email,
      password
    } = this.state;
    return(
      <div className='signup-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div >
          body > div > div > div > div.signup-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Signup
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  name='name'
                  value={name}
                  placeholder='name'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid icon='address card outline'
                  iconPosition='left'
                  name='userName'
                  value={userName}
                  placeholder='username'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid icon='address book outline'
                  iconPosition='left'
                  name='email'
                  value={email}
                  placeholder='email'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  name='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
                <Button color='teal' fluid size='large' onClick={this.handleClick}>
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SignUp
