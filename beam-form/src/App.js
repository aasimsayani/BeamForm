import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import { Container, Message } from 'semantic-ui-react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container>
        <Form />
      </Container>
    );
  }
}

export default App;
