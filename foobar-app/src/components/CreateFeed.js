import React, { Component } from 'react'
import { Button, Modal, Input, Header, Form } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload';

import {
  createFeed
} from '../apis/createFeed.js';

class CreateFeed extends Component {
  state = {
    open: false
  }

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  constructor(props){
    super();
    this.state = {
      pictures: [],
      userName:'',
    };
    this.onDrop = this.onDrop.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    var userDetails = this.props.userName;
    this.setState({
      userName : userDetails
    })
  }

  onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    create = async (e) => {
      const response = await createFeed(this.state.userName, this.state.pictures);
      if (response.result == 'success') {
        alert("created");
        this.closeModal();
      }
      else {
        alert("not created");
      }
    }

    closeModal() {
        this.setState({pictures:[]});
        this.close();
    }

    render() {
      const { open, dimmer } = this.state;
      return(
        <div>
          <Button onClick={this.show('blurring')} id="createFeed"><i className="plus icon"></i>Create post</Button>
          <Modal size='tiny' dimmer={dimmer} open={open} onClose={this.closeModal}>
            <Modal.Header>Create Post</Modal.Header>
            <Modal.Content>
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={this.closeModal}>Cancel</Button>
                <Button positive icon='checkmark' labelPosition='right' content="post" onClick={this.create}  />
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
}

export default CreateFeed
