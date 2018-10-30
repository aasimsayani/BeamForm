import React, { Component } from 'react';
import { Card, Container, Dimmer, Form, Loader, Segment } from 'semantic-ui-react';

class Forms extends Component {
  state = {
    data: {
    loadingText: '',
    coin: '',
    amount: '',
    address: '',
    signature: '',
    username: '',
    password: '',
    email: ''
    }
  }

  handleChange = e => this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value }
  })

  onFormSubmit = () => {
    const { username, email, coin, amount, address, signature, password} = this.state

    this.setState({
      loadingText: 'Verifying...',
      coin: coin,
      username: username,
      email: email,
      password: password,
      signature: signature,
      amount: amount,
      address: address
    });
    console.log(this.state.data)
  }

    render() {
      const { data } = this.state

      return(
        <div>
        <Container style={{ marginTop: '7em' }}>
        <Segment basic>
          <Card centered>
          <Dimmer active={!!this.state.loadingText}>
            <Loader>{this.state.loadingText}</Loader>
          </Dimmer>
            <Card.Content>
            <Form onSubmit ={this.onFormSubmit}>
              <Form.Field required>
                <label>Username</label>
                <input value={data.username} name='username' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <input value={data.password} name='password' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Email</label>
                <input value={data.email} name='email'onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Coin</label>
                <input value={data.coin} name='coin' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Amount</label>
                <input value={data.amount} name='amount' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Address</label>
                <input value={data.address} name='address' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Signature</label>
                <input value={data.signature} name='signature' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Button>Submit</Form.Button>
             </Form>
               </Card.Content>
              </Card>
           </Segment>
        </Container>
      </div>
     );
  };
};

export default Forms;
