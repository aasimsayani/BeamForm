import React, { Component } from 'react';
import { Button, Card, Container, Dimmer, Form, Loader, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';


class Forms extends Component {


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
                <input value={this.state.coin} disabled />
              </Form.Field>
              <Form.Field required>
                <label>Address</label>
                <input value={this.state.address} disabled />
              </Form.Field>
              <Form.Field required>
                <label>Signature</label>
                <input value={this.state.signature} disabled />
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
