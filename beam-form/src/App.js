import React, { Component } from 'react';
import './App.css';
import Forms from './Form';
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
        <Forms />
      </Container>
    );
  }
}

export default App;
