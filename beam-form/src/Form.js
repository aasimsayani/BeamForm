import React, { Component } from 'react';
import { Card, Container, Dimmer, Form, Loader, Segment } from 'semantic-ui-react';



class Forms extends Component {

  state = {
    loadingText: '',
    coin: '',
    address: '',
    signature: '',
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    this.setState({
      loadingText: 'Verifying...',
    })
  }


    render() {
      return(
        <Container style={{ marginTop: '7em' }}>
        <Segment basic>
          <Card centered>
          <Dimmer active={!!this.state.loadingText}>
            <Loader>{this.state.loadingText}</Loader>
          </Dimmer>
            <Card.Content>
            <Form onSubmit ={this.onFormSubmit}>
              <Form.Field required>
                <label>Coin</label>
                <input value={this.state.coin}  />
              </Form.Field>
              <Form.Field required>
                <label>Address</label>
                <input value={this.state.address}/>
              </Form.Field>
              <Form.Field required>
                <label>Signature</label>
                <input value={this.state.signature}  />
              </Form.Field>
              <Form.Button primary disabled={this.state.disabled}>Submit</Form.Button>
             </Form>
               </Card.Content>
              </Card>
           </Segment>
        </Container>
     );
  };
};

export default Forms;
