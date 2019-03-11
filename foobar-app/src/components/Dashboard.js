import React, { Component } from 'react'
import {withRouter} from 'react-router'
import { Button, Form, Grid, Header, Image, Message, Segment, Menu, Container, Dropdown, Modal } from 'semantic-ui-react'
import CreateFeed from './CreateFeed'

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName : '',
    }
  }

  componentDidMount() {
    var userDetails = this.props.location.state;
    console.log(userDetails.details);
    this.setState({
      userName : userDetails.details
    })
  }

  render(){
    return(
      <div className='home'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div >
          body > div > div > div > div.home {
            height: 100%;
          }
        `}</style>
        <Grid style={{ height: '50vh'}} >
           <Menu fixed='top' color='teal' inverted>
             <Container>
               <Menu.Item as='a' header >
                 <Image size='mini' src='/favicon.ico' style={{ marginRight: '1.5em' }} />
                 Foobar
               </Menu.Item>
               <Dropdown item simple text='User'>
                 <Dropdown.Menu>
                   <Dropdown.Item>Log Out</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </Container>
           </Menu>
        </Grid>
        <CreateFeed userName={this.state.userName}/>
       </div>
    )
  }
}

export default withRouter(Dashboard);
