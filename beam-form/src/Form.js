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
    fetch(`http://localhost:3000/user/add?username=${this.state.data.username}&password=${this.state.data.password}&email=${this.state.data.email}&coin=${this.state.data.coin}&address=${this.state.data.address}&amount=${this.state.data.amount}&signature=${encodeURIComponent(this.state.data.signature)}`)
    .catch( err => console.log(err))
  }

  coinOptions = () => {

  }

  // addUser = () => {
  //   const { data } = this.state
  //   fetch(`http://localhost:40000/user/add?username={data.username}&password={data.password}&email={data.email}&coin={data.coin}&address={data.address}&amount={data.amount}&signature={data.signature}`)
  //   .catch( err = console.log(err))
  // }

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
                <Dropdown placeholder='Select your coin' fluid selection options={coinOptions} />
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
