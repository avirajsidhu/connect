import React, {Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router'

import {
  login
} from '../apis/login.js';

class AppLogin extends Component{

   constructor(props){
     super(props);

     this.state = {
       userName: '',
       password: ''
     }
   }

   handleChange = (e, { name, value }) => {
     this.setState({ [name]: value })
   }

   handleClick = async (e) => {
     const response = await login(this.state.userName, this.state.password);

     if (response.result == 'success' ) {
       this.props.history.push('/dashboard', {details : this.state.userName});
     } else {
       alert("Not authenticated!");
     }
   }

   render() {
     const{
       userName,
       password,
     } = this.state;
     return(
        <div className='login-form'>
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div >
            body > div > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/favicon.ico' /> Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    name='userName'
                    value={userName}
                    placeholder='username'
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
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='/signup'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
}

export default withRouter(AppLogin);
